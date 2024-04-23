import { Request, Response } from "express"; 
import prisma from "../db/prismaClient";

export const getAllLikedTracks = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);

    try {
        const AllLikedTracks = await prisma.likedTracks.findMany({
            where: {UserId:userId}
        })
        res.status(200).send(AllLikedTracks)
    } catch (error) {
        res.status(400).send(error)
    }
}

// export const createTrackLiked = async (req: Request, res: Response) => {
//     const {name, url, genreId, albumId, thumbnail} = req.body;
//     try {
//         const newLikedTrack = await prisma.track.create({
//             data:{ name, url, genreId, albumId, thumbnail}
//         })
//         res.status(200).send(newLikedTrack)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }

export const createTrackLiked = async (req: Request, res: Response) => {
    const {UserId,trackId} = req.body;

    try {
        const newLikedTrack = await prisma.likedTracks.create({
            data:{UserId,trackId }
        })
        res.status(200).send(newLikedTrack)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const deleteLikedTrack = async (req: Request, res: Response) => {
    const  userId  = parseInt(req.params.userId);
    try {
        const likedTrackDeleted = await prisma.track.delete({ 
        where: { id: userId}
        })
        res.status(200).send(likedTrackDeleted)
    } catch (error) {
        res.status(400).send(error)
    }
}