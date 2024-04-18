import { Request, Response } from "express";
import prisma from "../db/prismaClient";


export const createSearch = async (req: Request, res: Response) => {
    const { search } = req.body;
    console.log(req.body);

    try {
        const newSearch = await prisma.search.create({
        data:{ search },
        include:{
            Teack: true,
            Playlist: true,
            Album: true,
            User:true,
            
        }
        });
        res.status(201).send(newSearch);
    } catch (error) {
        res.status(400).send(error);
    }
};