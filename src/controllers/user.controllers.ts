require('dotenv').config();

import { Request, Response } from "express";
import prisma from "../db/prismaClient";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { Prisma } from "@prisma/client";
import fs from 'fs-extra';

// import {
//     uploadImageCloudinary,
//     deleteImageCloudinary,
// } from '../../Utils/cloudinary';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await prisma.user.findMany();
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
    console.log(req.body)

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
        const existingUser = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return res.sendStatus(409);
        }

        // Hash de la contraseña
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const newUser = await prisma.user.create({
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
        return res.status(400).send("Error creating user");
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
    console.log(req.body)
        const  userId  = parseInt(req.params.userId);
    try {
        // const hashedPassword = await bcrypt.hash(password, 10);

        const updatedUser = await prisma.user.update({
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
            .send({ msg: 'The user has been updated', data: updatedUser });
        } catch (error) {
        res.status(400).send({ msg: "ERROR" });
        }
    };
    
    export const deleteUser = async (req: Request, res: Response) => {
        const  userId  = parseInt(req.params.userId);
    
        try {
        const userDeleted = await prisma.user.delete({ where: { id: userId } });
    
        res
            .status(201)
            .send({ msg: 'User has been deleted successfully', data: userDeleted });
        } catch (error) {
        res.status(400).send({ msg: 'ERROR' });
        }
    };

// export const handleLogin = async (req, res) => {
//     const { first_name, password } = req.body;
//     if (!first_name || !password) {
//         return res
//         .status(400)
//         .json({ message: 'first_name and password are required.' });
//     }

//     try {
//         const foundUser = await prisma.user.findFirst({
//         where: { 
//             first_name: first_name 
//         },
//         });
//         if (!foundUser) return res.sendStatus(401); //Unauthorized

//         const match = await bcrypt.compare(password, foundUser.password);
//         if (!match) return res.sendStatus(401);

//         const accessToken = jwt.sign(
//         { userId: foundUser.id, first_name: foundUser.first_name },
//         process.env.ACCESS_TOKEN_SECRET,
//         { expiresIn: '30s' }
//         );

//         const refreshToken = jwt.sign(
//         { userId: foundUser.id },
//         process.env.REFRESH_TOKEN_SECRET,
//         { expiresIn: '1m' }
//         );
//         await prisma.user.update({
//         where: { id: foundUser.id },
//         data: { refreshToken: refreshToken } as Prisma.UserUpdateInput,
//         });

//         res.cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         secure: true,
//         maxAge: 70000,
//         });

//         res.status(200).json({ accessToken });
//     } catch (error) {
//         console.error('Error in handleLogin:', error);
//         res.sendStatus(500);
//     }
// };

// export const handleRefreshToken = async (req, res) => {
//     const token = req.cookies?.refreshToken;

//     if (!token) return res.sendStatus(401);

//     try {
//         const verifiedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
//         if (!verifiedToken) {
//         return res.sendStatus(403);
//         }

//         const user = await prisma.user.findUnique({
//         where: { id: verifiedToken.userId },
//         });
        
//         if (!user || user.refreshToken !== token) return res.sendStatus(403);

//         const accessToken = jwt.sign(
//         { userId: verifiedToken.userId },
//         process.env.ACCESS_TOKEN_SECRET,
//         { expiresIn: '30s' }
//         );

//         res.json({ accessToken });
//     } catch (error) {
//         console.error('Error in handleRefreshToken:', error);
//         res.sendStatus(500);
//     }
// };

// export const handleLogout = async (req, res) => {
//     const token = req.cookies?.refreshToken;
//     if (!token) return res.sendStatus(204);

//     try {
//         const verifiedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, {
//         ignoreExpiration: true,
//         });
//         if (!verifiedToken) {
//         res.clearCookie('refreshToken', { httpOnly: true, secure: true });
//         return res.sendStatus(204);
//         }

//         const user = await prisma.user.findUnique({
//         where: { id: verifiedToken.userId },
//         });
//         if (!user || user.refreshToken !== token) return res.sendStatus(403);

//         const refreshToken = jwt.sign(
//             { userId: user.id },    
//             process.env.REFRESH_TOKEN_SECRET,
//             { expiresIn: '1m' }
//             );

//         await prisma.user.update({
//         where: { id: verifiedToken.userId },
//         data: {  refreshToken },
//         });

//         res.clearCookie('refreshToken', { httpOnly: true, secure: true });

//         res.sendStatus(204);
//     } catch (error) {
//         console.error('Error in handleLogout:', error);
//         res.sendStatus(500);
//     }
// };

