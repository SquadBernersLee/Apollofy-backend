import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllMyTracks = async(req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
    try {
        const tracks = await prisma.track.findMany({
            where: {
                userId: userId},
            include: {
                Genre: true, // Incluir información sobre el género de la pista
                Album: true   // Incluir información sobre el álbum de la pista
            }
        });
        res.status(200).send(tracks);
    } catch (error) {
        res.status(400).send(error);
    }
}

 