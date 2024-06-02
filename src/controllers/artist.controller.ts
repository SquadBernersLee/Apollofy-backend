import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getArtist = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  console.log(userId);
  try {
    const artist = await prisma.users.findMany({
      where: {
        id: userId,
      },
      select: {
        first_name: true,
        img: true,
        ArtistTracks: {
          select: {
            Track: {
              select: {
                id: true,
                name: true,
                thumbnail: true,
              },
            },
          },
        },
        AlbumArtist: {
          select: {
            Album: {
              select: {
                id: true,
                name: true,
                imageUrl: true,
              },
            },
          },
        },
      },
    });

    res.status(201).send({
      msg: "Here is your data",
      data: {
        artist,
      },
      typeofArtists: typeof artist,

      isArrayArtist: Array.isArray(artist),
    });
  } catch (error) {
    res.status(400).send({ msg: "Error", error });
  }
};
