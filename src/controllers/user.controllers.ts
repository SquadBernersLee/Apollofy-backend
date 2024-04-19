    import { Request, Response } from "express";
    import prisma from "../db/prismaClient";
    import { deleteImageCloudinary, uploadImageCloudinary } from "../utils/cloudinary";
    import fs from  'fs-extra';


    // export const getAllUser = async (req: Request, res: Response) => {
    // try {
    //     const allUsers = await prisma.user.findMany({
    //     include: {
    //         // first_name: true,
    //         Roles: true,
    //         // LikedTraks: true,
    //         Followers: true,
    //         // Following:true,
    //         // LikedAlbum: true,
    //         FollowPlaylist: true,
    //         Playlist: true,
    //         AlbumArtist: true,
    //     },
    //     });
    //     res.status(200).send(allUsers);
    // } catch (error) {
    //     res.status(400).send(error);
    // }
    // };

    // export const createUser = async (req: Request, res: Response) => {
    // const {
    //     first_name,
    //     email,
    //     password,
    //     last_name,
    //     rolId,
    //     city,
    //     gender,
    //     profilePicture,
    //     country,
    //     dateOfBirth,
    //     genreId,
    //     popularity,
    // } = req.body;

    // try {
    //     const newUser = await prisma.user.create({
    //     data: {
    //         first_name,
    //         email,
    //         password,
    //         last_name,
    //         city,
    //         gender,
    //         profilePicture,
    //         country,
    //         dateOfBirth,
    //         genreId,
    //         popularity,
    //         Roles: { connect: { id: rolId } },
    //     },
    //     });
    //     res.status(201).send(newUser);
    // } catch (error: any) {
    //     res.status(400).send("Error creating user: " + error.message);
    // }
    // };

    // // export const createUser = async (req: Request, res: Response) => {
    // //     const { first_name, last_name, email, city, gender, profilePicture } = req.body;
    // //     console.log(req.body);

    // //     try {
    // //         let userData: any = { first_name, email };

    // //         if (last_name) userData.last_name = last_name;
    // //         if (city) userData.city = city;
    // //         if (gender) userData.gender = gender;
    // //         if (profilePicture) userData.profilePicture = profilePicture;

    // //         const newUser = await prisma.user.create({
    // //             data: userData
    // //         });

    // //         res.status(201).send(newUser);
    // //     } catch (error) {
    // //         res.status(400).send(error);
    // //     }
    // // };

    // export const updateUser = async (req: Request, res: Response) => {
    // const { first_name, email, password } = req.body;
    // const userId = parseInt(req.params.userId);
    // //const userId = req.params.userId

    // try {
    //     const userUpdated = await prisma.user.update({
    //     where: { id: userId },
    //     data: { first_name, email, password },
    //     });
    //     res.status(201).send(userUpdated);
    // } catch (error) {
    //     res.status(400).send(error);
    //     console.log(error);
    // }
    // };

    // export const deleteUser = async (req: Request, res: Response) => {
    // const userId = parseInt(req.params.userId);
    // //const userId = req.params.userId
    // try {
    //     const userDeleted = await prisma.user.delete({
    //     where: { id: userId },
    //     });
    //     res.status(200).send(userDeleted);
    // } catch (error) {
    //     res.status(400).send(error);
    // }
    // };


        export const getAllUsers = async (req: Request, res: Response) => {
            try {
            const allUsers = await prisma.user.findMany();
            res.status(201).send({ msg: 'Here are all your users', data: allUsers });
            } catch (error) {
            res.status(400).send({ msg: 'Error', error });
            }
        };
        
        export const createUser = async (req: Request, res: Response) => {
            const { first_name,
                last_name, 
                email, 
                city, 
                gender, 
                profilePicture, 
                password, 
                country, 
                username, 
                dateOfBirth,
                img,
                genreId, 
                popularity, 
                rolId } = 
                req.body;
            if (!first_name || !last_name || !email || !password || !username|| !city || !gender || !img || !profilePicture  || !country  || !dateOfBirth  || !genreId  || !popularity  || !rolId ) {
            return res
                .status(400)
                .send(
                'The fields name, lastname, email, password and username are required'
                );
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
                        profilePicture,
                        country,
                        dateOfBirth,
                        img,
                        genreId,
                        popularity,
                        Roles: { connect: { id: rolId } },
                    },
            });
        
            if (req.files && req.files.img) {
                if (Array.isArray(req.files.img)) {
                return res.status(400).json({
                    msg: 'You can only upload one file. Sorryyyy!!!!!!',
                });
                } else {
                const result = await uploadImageCloudinary(req.files.img.tempFilePath);
                const newUserImg = await prisma.user.update({
                    where: { id: newUser.id },
                    data: {
                        img: result.secure_url,
                        public_id_img: result.public_id,
                    },
                });
        
                await fs.unlink(req.files.img.tempFilePath);
                return res.status(201).send({
                    msg: 'New user created',
                    data: newUserImg,
                });
                }
            }
            return res.status(201).send({
                msg: 'New user created',
                data: newUser,
            });
            } catch (error) {
            return res.status(400).send(error);
            }
        };
        
        export const updateUser = async (req: Request, res: Response) => {
            const { 
                first_name,
                last_name, 
                email, 
                city, 
                gender, 
                profilePicture, 
                password, 
                country, 
                username, 
                dateOfBirth, 
                genreId, 
                popularity, 
                rolId } = 
                req.body;
                const userId = parseInt(req.params.userId);
            try {
            const updatedUser = await prisma.user.update({
                where: { id: userId },
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
        
            if (req.files && req.files.img) {
                //Eliminar la imagen para volverla a subir
                //Elimina
                if (updatedUser.public_id_img) {
                await deleteImageCloudinary(updatedUser.public_id_img);
                }
                //Sube mismo método que el create
                if (Array.isArray(req.files.img)) {
                return res.status(400).json({
                    msg: 'You can only upload one file per user.',
                });
                } else {
                const result = await uploadImageCloudinary(req.files.img.tempFilePath); // Subir el archivo único
                const newUserImg = await prisma.user.update({
                    where: { id: userId },
                    data: {
                    img: result.secure_url,
                    public_id_img: result.public_id,
                    },
                });
        
                await fs.unlink(req.files.img.tempFilePath);
                return res.status(201).send({
                    msg: 'New user created',
                    data: newUserImg,
                });
                }
            }
        
            res
                .status(201)
                .send({ msg: 'The user has been updated', data: updatedUser });
            } catch (error) {
            res.status(400).send({ msg: 'ERROR' });
            }
        };
        
        export const deleteUser = async (req: Request, res: Response) => {
            const userId = parseInt(req.params.userId);
        
            try {
            const userDeleted = await prisma.user.delete({ where: { id: userId } });
        
            if (userDeleted.public_id_img) {
                await deleteImageCloudinary(userDeleted.public_id_img);
            }
        
            res
                .status(201)
                .send({ msg: 'User has been deleted successfully', data: userDeleted });
            } catch (error) {
            res.status(400).send({ msg: 'ERROR' });
            }
        };
