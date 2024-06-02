import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getSearch = async (req: Request, res: Response) => {
  const { query } = req.query;
  console.log(req.query);
  try {
    const allArtists = prisma.users.findMany({
      where: {
        rolId: 1,
        OR: [
          { last_name: { contains: query as string, mode: "insensitive" } },
          { first_name: { contains: query as string, mode: "insensitive" } },
        ],
      },
    });
    const allSongs = await prisma.track.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query as string,
              mode: "insensitive",
            },
          },
          {
            Album: {
              name: {
                contains: query as string,
                mode: "insensitive",
              },
            },
          },
          {
            ArtistTracks: {
              some: {
                User: {
                  first_name: {
                    contains: query as string,
                    mode: "insensitive",
                  },
                },
              },
            },
          },
        ],
      },
      include: {
        ArtistTracks: {
          include: {
            User: true,
          },
        },
      },
    });
    const allAlbums = await prisma.album.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query as string,
              mode: "insensitive",
            },
          },
          {
            AlbumArtist: {
              some: {
                Artist: {
                  first_name: {
                    contains: query as string,
                    mode: "insensitive",
                  },
                },
              },
            },
          },
        ],
      },
      include: {
        AlbumArtist: {
          include: {
            Artist: true,
          },
        },
      },
    });

    const allPromises = await Promise.all([allArtists, allSongs, allAlbums]);
    const artists = allPromises[0];
    const songs = allPromises[1];
    const albums = allPromises[2];

    const artistsToSend = artists.map(({ id, first_name, last_name, img }) => ({
      id,
      first_name,
      last_name,
      img,
    }));
    const songsToSend = songs.map(({ id, name, thumbnail, ArtistTracks }) => ({
      id,
      name,
      thumbnail,
      artist: ArtistTracks[0]?.User.first_name,
    }));
    const albumsToSend = albums.map(({ id, name, imageUrl, AlbumArtist }) => ({
      id,
      name,
      imageUrl,
      artist: AlbumArtist[0].Artist.first_name,
    }));
    console.log({
      artists: artistsToSend,
      songs: songsToSend,
      albums: albumsToSend,
    });
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
