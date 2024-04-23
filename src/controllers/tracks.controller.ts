import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllTracks = async (req: Request, res: Response) => {
  try {
    const allSongs = await prisma.track.findMany({});
    res.status(200).send(allSongs);
  } catch (error) {
    res.status(400).send(error);
  }
};
