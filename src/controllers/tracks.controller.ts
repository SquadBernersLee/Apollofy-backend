// import { Request, Response } from "express"; 
// import prisma from "../db/prismaClient";


// export const getAllTracks = async (req: Request, res: Response) => {
//     try {
//         const allTracks = await prisma.tracks.findMany()
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }

// export const createAllTracks = async (req: Request, res: Response) => {
//     const newTrack = await prisma.Track.create({data: {name, artist, }}) ;
//     try {
//         const newTrack = await prisma.tracks
//     } catch (error) {
        
//     }
// }