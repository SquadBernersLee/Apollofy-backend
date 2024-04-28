require("dotenv").config();
import { Request, Response } from "express";
import prisma from "../db/prismaClient";
import bcrypt from "bcrypt";


export const getAllUsers = async (req: Request, res: Response) => {   
    try {
        const allUsers = await prisma.users.findMany();
        res.status(201).send({ msg: "Here are all your users", data: allUsers });
    } catch (error) {
        res.status(400).send({ msg: "Error", error });
    }
};

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

    if (!first_name || !last_name || !email || !gender || !img || !password) {
        return res.status(400).send("Missing required fields");
    }

    try {
        const existingUser = await prisma.users.findFirst({
        where: {
            email: email,
        },
        });

        if (existingUser) {
        return res.sendStatus(409);
        }

        const newUser = await prisma.users.create({
        data: {
            first_name,
            last_name,
            email,
            city,
            gender,
            img,
            // password: hashedPassword,
            password,
            country,
            dateOfBirth,
            genreId,
            popularity,
            rolId,
        },
    });

    // if (req.files && req.files.img) {
    //     if (Array.isArray(req.files.img)) {
    //         return res.status(400).json({
    //             msg: 'You can only upload one file per user.',
    //         });
    //         } else {
    //         const result = await uploadImageCloudinary(req.files.img); // Subir el archivo único
    //         const newUserImg = await prisma.user.update({
    //             where: { id: newUser.id },
    //             data: {
    //             img: result.secure_url,
    //             public_id_img: result.public_id,
    //             },
    //         });

    //         await fs.unlink(req.files.img);
    //         return res.status(201).send({
    //             msg: 'New user created',
    //             data: newUserImg,
    //         });
    //         }
    // }
    //     return res.status(201).send({
    //         msg: 'New user created',
    //         data: newUser,
    //     });
} catch (error: any) {
    return res.status(400).send("Error creating user" + error.message);
}
};

export const updateUser = async (req: Request, res: Response) => {
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
    const userId = parseInt(req.params.userId);
    try {
    // const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.users.update({
        where: { id: userId },
        data: {
            first_name,
            email,
            // password: hashedPassword,
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

    res
        .status(201)
        .send({ msg: "The user has been updated", data: updatedUser });
    } catch (error) {
        res.status(400).send({ msg: "ERROR" });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);

    try {
    const userDeleted = await prisma.users.delete({ where: { id: userId } });

    res
        .status(201)
        .send({ msg: "User has been deleted successfully", data: userDeleted });
    } catch (error) {
        res.status(400).send({ msg: "ERROR" });
    }
};
