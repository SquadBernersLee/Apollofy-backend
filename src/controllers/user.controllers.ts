import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        // first_name: true,
        Roles: true,
        // LikedTraks: true,
        Followers: true,
        // Following:true,
        // LikedAlbum: true,
        FollowPlaylist: true,
        Playlist: true,
        AlbumArtist: true,
      },
    });
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const {
    first_name,
    email,
    password,
    last_name,
    rolId,
    city,
    gender,
    profilePicture,
    country,
    dateOfBirth,
    genreId,
    popularity,
  } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        first_name,
        email,
        password,
        last_name,
        city,
        gender,
        profilePicture,
        country,
        dateOfBirth,
        genreId,
        popularity,
        Roles: { connect: { id: rolId } },
      },
    });
    res.status(201).send(newUser);
  } catch (error: any) {
    res.status(400).send("Error creating user: " + error.message);
  }
};

// export const createUser = async (req: Request, res: Response) => {
//     const { first_name, last_name, email, city, gender, profilePicture } = req.body;
//     console.log(req.body);

//     try {
//         let userData: any = { first_name, email };

//         if (last_name) userData.last_name = last_name;
//         if (city) userData.city = city;
//         if (gender) userData.gender = gender;
//         if (profilePicture) userData.profilePicture = profilePicture;

//         const newUser = await prisma.user.create({
//             data: userData
//         });

//         res.status(201).send(newUser);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };

export const updateUser = async (req: Request, res: Response) => {
  const { first_name, email, password } = req.body;
  const userId = parseInt(req.params.userId);
  //const userId = req.params.userId

  try {
    const userUpdated = await prisma.user.update({
      where: { id: userId },
      data: { first_name, email, password },
    });
    res.status(201).send(userUpdated);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  //const userId = req.params.userId
  try {
    const userDeleted = await prisma.user.delete({
      where: { id: userId },
    });
    res.status(200).send(userDeleted);
  } catch (error) {
    res.status(400).send(error);
  }
};
