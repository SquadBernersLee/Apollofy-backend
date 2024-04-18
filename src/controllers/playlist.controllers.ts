import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllPlaylist = async (req: Request, res: Response) => {
  try {
    const allArtists = await prisma.playlist.findMany({});
    res.status(200).send(allArtists);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createPlaylist = async (req: Request, res: Response) => {
  const { name, imageUrl, description, primaryColor } = req.body;
  const userId = 1;

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
