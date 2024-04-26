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
    const artists = allPromises[0];
    const songs = allPromises[1];
    const albums = allPromises[2];

    const artistsToSend = artists.map(
      ({ id, first_name, last_name, profilePicture }) => ({
        id,
        first_name,
        last_name,
        profilePicture,
      })
    );
    const songsToSend = songs.map(({ id, name, thumbnail }) => ({
      id,
      name,
      thumbnail,
    }));
    const albumsToSend = albums.map(({ id, name, imageUrl }) => ({
      id,
      name,
      imageUrl,
    }));
console.log({
  artists: artistsToSend,
  songs: songsToSend,
  albums: albumsToSend,
},)
    res.status(201).send({
      msg: "Here is your information",
      data: {
        artists: artistsToSend,
        songs: songsToSend,
        albums: albumsToSend,
      },
      typeofArtists: typeof artists,
      typeofSongs: typeof songs,
      typeofAlbums: typeof albums,
      isArrayArtists: Array.isArray(artists),
      isArraySongs: Array.isArray(songs),
      isArrayAlbums: Array.isArray(albums),
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
