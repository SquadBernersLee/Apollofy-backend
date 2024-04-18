import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllArtists = async (req: Request, res: Response) => {
    try {
        const allArtists = await prisma.artist.findMany({
        });
        res.status(200).send(allArtists);
    } catch (error) {
        res.status(400).send(error);
    }
};