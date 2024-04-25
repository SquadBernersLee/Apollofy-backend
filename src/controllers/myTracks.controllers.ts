import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllMyTracks = async(req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);


    try {
        const tracks = await prisma.artistTracks.findMany({
            where: {
                UserId: userId
            }
        });
        res.status(200).send(tracks);
    } catch (error) {
        res.status(400).send(error);
    }
}
