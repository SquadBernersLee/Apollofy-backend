import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const createTrack = async (req: Request, res: Response) => {
  try {
    const { name, url, genreId, albumId, thumbnail } = req.body;
    const newTrack = await prisma.track.create({
      data: {
        name,
        url,
        genreId,
        albumId,
        thumbnail,
      },
    });
    res.status(201).send(`Track created successfully`);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllTracks = async (req: Request, res: Response) => {
  try {
    const allSongs = await prisma.track.findMany();
    res.status(200).send(allSongs);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllLikedTracks = async (req: Request, res: Response) => {
  const UserId = parseInt(req.params.UserId);

  try {
    const allSongs = await prisma.likedTracks.findMany({
      where: {
        UserId: UserId,
      },
      include: {
        Track: true, // Include the related Track model
      },
    });

    // Extracting relevant data from each object in the allSongs array
    const formattedSongs = allSongs.map((song) => ({
      id: song.Track.id,
      name: song.Track.name,
      url: song.Track.url,
      genreId: song.Track.genreId,
      albumId: song.Track.albumId,
      thumbnail: song.Track.thumbnail,
    }));

    res.status(200).send(formattedSongs);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const likeTrack = async (req: Request, res: Response) => {
  try {
    const { userid, trackid } = req.body;
    await prisma.likedTracks.create({
      data: {
        UserId: userid,
        trackId: trackid,
      },
    });
    res.status(201).send(`Track liked successfully`);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTrack = async (req: Request, res: Response) => {
  const trackId = parseInt(req.params.trackId);

  try {
    // Check if the track exists
    const existingTrack = await prisma.track.findUnique({
      where: {
        id: trackId,
      },
    });

    if (!existingTrack) {
      return res.status(404).send("Track not found");
    }

    // Delete the track
    await prisma.track.delete({
      where: {
        id: trackId,
      },
    });

    res.status(200).send("Track deleted successfully");
  } catch (error) {
    res.status(500).send("Error deleting track");
  }
};
