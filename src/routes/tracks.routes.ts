import { Router } from "express";


export const tracksRouter = Router()

tracksRouter.get("/",() => console.log("hola desde rutas"))