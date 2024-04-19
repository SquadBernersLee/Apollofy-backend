import { Request, Response } from "express"; 
import prisma from "../db/prismaClient";


export const getAllTracks = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const allTracks = await prisma.track.findMany();
        res.status(200).send(allTracks)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const createTracks = async (req: Request, res: Response) => {
    const {name, artist, url, genreId, albumId, thumbnail } = req.body;
    const userId  = parseInt(req.params.userId);

    try {
        const newTrack = await prisma.track.create({
            data:{ name, artist, url, userId, genreId, albumId, thumbnail}
        })
        res.status(200).send(newTrack)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const trackUpdated = async(req: Request, res: Response) => {
    const {name, artist, url } = req.body;
    const userId = parseInt(req.params.userId);
    try {
        const updatedTrack = await prisma.track.update({
            where: {id:userId},
            data: {name, artist, url}
        })
        res.status(200).send(updatedTrack)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const deleteTrack = async (req: Request, res: Response) => {
    const  userId  = parseInt(req.params.userId);

    try {
        const trackDeleted = await prisma.track.delete({ 
        where: { id: userId}
        })
        res.status(200).send(trackDeleted)
    } catch (error) {
        res.status(400).send(error)
    }
};
