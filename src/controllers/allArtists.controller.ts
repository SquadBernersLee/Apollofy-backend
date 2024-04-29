import { Request, Response } from "express";
import prisma from "../db/prismaClient";
import { memoryStorage } from "multer";

export const getAllArtists = async (req: Request, res: Response) => {
  try {
    const allArtists = await prisma.users.findMany({
      where: {
        rolId: 1,
      },
      select: {
        id: true,
        first_name: true,
        img: true,
      },
    });
    res.status(200).send({
      msg: "All artists",
      data: {
        allArtists,
      },
      type: typeof allArtists,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
