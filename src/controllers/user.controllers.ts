import { Request, Response } from "express";
import prisma from "../db/prismaClient";
// import UserModel from "../models/user.model";
// import prisma from "../db/client";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const allUsers = await prisma.user.findMany({
        include:{
            movies: true
        }
        });
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    try {
        const newUser = await prisma.user.create({
        data:{ name, email, password }
        });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    // const  userId  = parseInt(req.params.userId);
    const userId = req.params.userId

    try {
        const userUpdated = await prisma.user.update({
        where: {id:userId},
        data:{name, email, password}
        })
        res.status(201).send(userUpdated)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
};

export const deleteUser = async (req: Request, res: Response) => {
  // const  userId  = parseInt(req.params.userId);
    const userId = req.params.userId
    try {
        const userDeleted = await prisma.user.delete({ 
        where: { id: userId}
        })
        res.status(200).send(userDeleted)
    } catch (error) {
        res.status(400).send(error)
    }

};
