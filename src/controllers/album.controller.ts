import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const addAlbum = async (req: Request, res: Response) => {
  try {
    const { name, imageUrl } = req.body;
    const newAlbum = await prisma.album.create({ data: { name, imageUrl } });
    res.status(201).send({ msg: "Album added successfully", data: newAlbum });
  } catch (error) {
    res.status(400).send({ msg: "Error adding album", error });
  }
};

export const getAllAlbums = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.album.findMany();
    res.status(201).send({ msg: "Here are all your users", data: allUsers });
  } catch (error) {
    res.status(400).send({ msg: "Error", error });
  }
};

export const getAllAlbumsWithTracks = async (req: Request, res: Response) => {
  try {
    const albums = await prisma.album.findMany({
      include: {
        Tracks: true,
      },
    });

    const formattedAlbums = albums.map((album) => {
      return {
        id: album.id,
        name: album.name,
        imageUrl: album.imageUrl,
        songs: album.Tracks.map((track) => track.id),
      };
    });

    res
      .status(201)
      .send({ msg: "Here are all your albums", data: formattedAlbums });
  } catch (error) {
    res.status(400).send({ msg: "Error", error });
  }
};
