import { NextFunction, Request, Response } from "express";


export const publicRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        res.status(201).send({ message: "public route" });
    } catch (e) {
        next(e)
    }
}

export const protectedRequest = async (req: Request, res: Response): Promise<void> => {
    res.status(201).send({ message: "Protected route" });
};