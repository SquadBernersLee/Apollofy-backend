import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const getAllPasswords = async (req: Request, res: Response) => {
    try {
        const allPasswords = await prisma.password.findMany({
        });
        res.status(200).send(allPasswords);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const createPassword = async (req: Request, res: Response) => {
    const {  password } = req.body;
    console.log(req.body);

    try {
        const newPassword = await prisma.password.create({
        data:{  password }
        });
        res.status(201).send(newPassword);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updatePassword = async (req: Request, res: Response) => {
    const {  password } = req.body;
    const  passwordId  = parseInt(req.params.passwordId);

    try {
        const passwordUpdated = await prisma.password.update({
        where: {id:passwordId},
        data:{ password }
        })
        res.status(201).send(passwordUpdated)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
};