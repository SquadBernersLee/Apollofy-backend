import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getSearch = async (req: Request, res: Response) => {
  const { query } = req.query;
  console.log(req.query);
  try {
    const allArtists = prisma.user.findMany({
      where: {
        rolId: 1,
        OR: [
          { last_name: { contains: query as string, mode: "insensitive" } },
          { first_name: { contains: query as string, mode: "insensitive" } },
        ],
      },
    });
    const allSongs = prisma.track.findMany({
      where: {
        name: { contains: query as string, mode: "insensitive" },
      },
    });
    const allAlbums = prisma.album.findMany({
      where: {
        name: { contains: query as string, mode: "insensitive" },
      },
    });
    
    const allPromises = await Promise.all([allArtists, allSongs, allAlbums]);
    
    res.status(201).send({
      msg: "Here is your information",
      data: {
        artists: allPromises[0],
        songs: allPromises[1],
        albums: allPromises[2],
      },
    });
  } catch (error) {
    res.status(400).send({ msg: "Error", error });
  }
};

// export const createSearch = async (req: Request, res: Response) => {
//   const { search } = req.params;
//   console.log(req.params);

//   try {

//     const newSearch = await prisma.create({
//       data: { search },
//       include: {
//         Teack: true,
//         Playlist: true,
//         Album: true,
//         User: true,
//       },
//     });
//     res.status(201).send(newSearch);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };
