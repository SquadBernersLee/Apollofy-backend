import { Request, Response } from "express";
import prisma from "../db/prismaClient";

/* export const getAllPlaylist = async (req: Request, res: Response) => {
  try {
    const allArtists = await prisma.Playlist.findMany({});
    res.status(200).send(allArtists);
  } catch (error) {
    res.status(400).send(error);
  }
};
 */
export const createPlaylist = async (req: Request, res: Response) => {
  const { name, imageUrl, description, primaryColor } = req.body;

  if (!name || !imageUrl || !description || !primaryColor) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const newPlaylist = await prisma.Playlist.create({
      data: { name, imageUrl, description, primaryColor },
    });
  } catch (error: any) {
    res.status(400).send("Error creating playlist: " + error.message);
  }
};
