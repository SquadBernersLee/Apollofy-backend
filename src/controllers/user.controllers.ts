import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const createUser = async (req: Request, res: Response) => {
  const {
    first_name,
    last_name,
    email,
    city,
    gender,
    img,
    password,
    country,
    dateOfBirth,
    genreId,
    popularity,
    rolId,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !city ||
    !gender ||
    !img ||
    !password ||
    !country ||
    !dateOfBirth ||
    !genreId ||
    !popularity ||
    !rolId
  ) {
    return res.status(400).send("Missing required fields");
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        first_name,
        email,
        password,
        last_name,
        city,
        gender,
        img,
        country,
        dateOfBirth,
        genreId,
        popularity,
        rolId,
      },
    });

    return res.status(201).send({
      msg: "New user created",
      data: newUser,
    });
  } catch (error: any) {
    res.status(400).send("Error creating user: " + error.message);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(201).send({ msg: "Here are all your users", data: allUsers });
  } catch (error) {
    res.status(400).send({ msg: "Error", error });
  }
};
