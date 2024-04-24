// import { Request, Response } from "express";
// import prisma from "../db/prismaClient";

// export const getAllPasswords = async (req: Request, res: Response) => {
//     try {
//         const allPasswords = await prisma.user.findMany({
//         });
//         res.status(200).send(allPasswords);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };

// // export const createPassword = async (req: Request, res: Response) => {
// //     const {  password } = req.body;
// //     console.log(req.body);

// //     try {
// //         const newPassword = await prisma.user.create({
// //         data:{ 
// //             password: password
// //         }
// //         });
// //         res.status(201).send(newPassword);
// //     } catch (error) {
// //         res.status(400).send(error);
// //     }
// // };


// interface CreateUserInput {
//     password: any; // Asegúrate de que el tipo de 'password' sea el esperado por la función create
//     // Otros campos que puedan ser necesarios aquí
// }

// export const createPassword = async (req: Request, res: Response) => {
//     const { password } = req.body as CreateUserInput; // Asigna el tipo CreateUserInput a req.body
//     console.log(req.body);

//     try {
//         const newPassword = await prisma.password.create({
//             data: {
//                 password: password
//             }
//         });
//         res.status(201).send(newPassword);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };


// export const updatePassword = async (req: Request, res: Response) => {
//     const {  password } = req.body;
//     const  passwordId  = parseInt(req.params.passwordId);

//     try {
//         const passwordUpdated = await prisma.user.update({
//         where: {id:passwordId},
//         data:{ password }
//         })
//         res.status(201).send(passwordUpdated)
//     } catch (error) {
//         res.status(400).send(error)
//         console.log(error)
//     }
// };