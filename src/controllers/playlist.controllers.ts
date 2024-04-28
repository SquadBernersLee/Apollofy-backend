import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const followUnfollow = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const id = parseInt(req.params.id);

  try {
    const existingFollow = await prisma.followPlaylist.findFirst({
      where: {
        UserId: userId,
        PlaylistId: id,
      },
    });

    if (existingFollow) {
      // If the user is already following the playlist, delete the follow
      await prisma.followPlaylist.delete({
        where: {
          id: existingFollow.id,
        },
      });
      res.status(200).send("Unfollowed playlist successfully");
    } else {
      // If the user is not following the playlist, create a new follow
      const followPlaylist = await prisma.followPlaylist.create({
        data: {
          UserId: userId,
          PlaylistId: id,
        },
      });
      res.status(201).send(followPlaylist);
    }
  } catch (error: any) {
    res.status(400).send("Error following playlist: " + error.message);
  }
};

export const isUserFollowingPlaylist = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const playlistId = parseInt(req.params.playlistId);

  try {
    const followPlaylist = await prisma.followPlaylist.findFirst({
      where: {
        UserId: userId,
        PlaylistId: playlistId,
      },
    });

    if (followPlaylist) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  } catch (error: any) {
    res
      .status(500)
      .send("Error checking if user is following playlist: " + error.message);
  }
};

export const getPlaylistById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const playlist = await prisma.playlist.findUnique({
      where: {
        id: id,
      },
    });

    if (!playlist) {
      return res.status(404).send("Playlist not found");
    }

    res.status(200).json(playlist);
  } catch (error: any) {
    res.status(500).send("Error retrieving playlist: " + error.message);
  }
};

export const getSongsByPlaylistId = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id); // Assuming the playlist ID is passed as a route parameter

  try {
    // Query the PlaylistTracks table to get the track IDs of the playlist
    const playlistTracks = await prisma.playlistTracks.findMany({
      where: {
        playlistId: id,
      },
      select: {
        trackId: true,
      },
    });

    // Extract track IDs from the result
    const trackIds = playlistTracks.map(
      (playlistTrack) => playlistTrack.trackId
    );

    // Query the Track table to get the details of the tracks
    const tracks = await prisma.track.findMany({
      where: {
        id: {
          in: trackIds,
        },
      },
    });

    res.status(200).json(tracks);
  } catch (error: any) {
    res
      .status(500)
      .send("Error retrieving songs of playlist: " + error.message);
  }
};

export const getFollowedPlaylistsByUserId = async (
  req: Request,
  res: Response
) => {
  const userId = parseInt(req.params.userId); // Assuming the user ID is passed as a route parameter

  try {
    // Query the FollowPlaylist table to get the followed playlists IDs of the user
    const followedPlaylists = await prisma.followPlaylist.findMany({
      where: {
        UserId: userId,
      },
      select: {
        PlaylistId: true,
      },
    });

    // Extract playlist IDs from the result
    const playlistIds = followedPlaylists.map(
      (followedPlaylist) => followedPlaylist.PlaylistId
    );

    // Query the Playlist table to get the details of the followed playlists
    const playlists = await prisma.playlist.findMany({
      where: {
        id: {
          in: playlistIds,
        },
      },
    });

    res.status(200).json(playlists);
  } catch (error: any) {
    res
      .status(500)
      .send("Error retrieving followed playlists: " + error.message);
  }
};

export const getAllPlaylist = async (req: Request, res: Response) => {
  try {
    const allArtists = await prisma.playlist.findMany({});
    res.status(200).send(allArtists);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createPlaylist = async (req: Request, res: Response) => {
  const { name, imageUrl, description, primaryColor, userId } = req.body;

  if (!name || !imageUrl || !description || !primaryColor) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const newPlaylist = await prisma.playlist.create({
      data: {
        name,
        imageUrl,
        description,
        primaryColor,
        User: { connect: { id: userId } },
      },
    });

    // Retrieve the ID of the newly created playlist
    const playlistId = newPlaylist.id;

    // Create a new entry in the FollowPlaylist table
    const followedPlaylist = await prisma.followPlaylist.create({
      data: {
        PlaylistId: playlistId,
        UserId: 3, // Assuming the user ID is 3
      },
    });

    res.status(201).send(newPlaylist);
  } catch (error: any) {
    res.status(400).send("Error creating playlist: " + error.message);
  }
};

export const updatePlaylist = async (req: Request, res: Response) => {
  const { name, imageUrl, description, primaryColor } = req.body;
  const playlistId = parseInt(req.params.id);

  if (!name || !imageUrl || !description || !primaryColor) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const playlistUpdated = await prisma.playlist.update({
      where: { id: playlistId },
      data: { name, imageUrl, description, primaryColor },
    });

    if (!playlistUpdated) {
      return res.status(404).send("Playlist not found");
    }

    res.status(201).send(playlistUpdated);
  } catch (error: any) {
    res.status(400).send("Error updating playlist: " + error.message);
  }
};

export const deletePlaylist = async (req: Request, res: Response) => {
  const playlistId = parseInt(req.params.id);
  try {
    const deletedPlaylist = await prisma.playlist.delete({
      where: { id: playlistId },
    });

    if (!deletedPlaylist) {
      return res.status(404).send("Playlist not found");
    }

    res.status(204).send("User deleted successfully");
  } catch (error: any) {
    res.status(400).send("Error deleting user: " + error.message);
  }
};

export const followPlaylist = async (req: Request, res: Response) => {
  const PlaylistId = parseInt(req.params.id);
  const UserId = 1;

  if (!PlaylistId) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const followedPlaylist = await prisma.followPlaylist.create({
      data: {
        PlaylistId,
        UserId,
      },
    });
    res.status(201).send(followedPlaylist);
  } catch (error: any) {
    res.status(400).send("Error following playlist: " + error.message);
  }
};

export const addSongPlaylist = async (req: Request, res: Response) => {
  const { trackId } = req.body;
  const playlistId = parseInt(req.params.id);

  if (!trackId || !playlistId) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const newAddedSongPlaylsit = await prisma.playlistTracks.create({
      data: {
        trackId,
        playlistId,
      },
    });
    res.status(201).send(newAddedSongPlaylsit);
  } catch (error: any) {
    res.status(400).send("Error adding song to playlist: " + error.message);
  }
};
