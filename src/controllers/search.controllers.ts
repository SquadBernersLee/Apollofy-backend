import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getSearch = async (req: Request, res: Response) => {
  const { query } = req.query;
  console.log(req.query);
  try {
    // const allArtists = await prisma.user.findMany({
    //   where: {
    //     rolId: 1,
    //     OR: [
    //       { last_name: { contains: query as string } },
    //       { first_name: { contains: query as string } },
    //     ],
    //   },
    // });
    const allSongs = await prisma.track.findMany({
      where: {
        name: {contains: query as string}
      },
    });
    res
      .status(201)
      .send({
        msg: "Here are all your artists",
        data: { artists: allSongs },
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
