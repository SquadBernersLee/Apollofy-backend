import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllMyTracks = async(req: Request, res: Response) => {
    try {
        const allMyTrack = await prisma.track.findMany({
            include:{
                name: true,
                artist: true
            }
        })
        res.status(200).send(allMyTrack);
    } catch (error) {
        res.status(400).send(error);
    }
}

 