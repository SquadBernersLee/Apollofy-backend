import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllAlbums = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.album.findMany();
    res.status(201).send({ msg: "Here are all your users", data: allUsers });
  } catch (error) {
    res.status(400).send({ msg: "Error", error });
  }
};
