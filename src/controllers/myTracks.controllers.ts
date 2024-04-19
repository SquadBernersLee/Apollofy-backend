import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllMyTracks = async(req: Request, res: Response) => {

    try {
        const tracks = await prisma.track.findMany({});
        res.status(200).send(tracks);
    } catch (error) {
        res.status(400).send(error);
    }
}
