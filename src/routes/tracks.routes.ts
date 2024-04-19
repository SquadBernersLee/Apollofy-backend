import { Router } from "express";
import { getAllTracks } from "../controllers/tracks.controller";

export const tracksRouter = Router();

tracksRouter.post("/", getAllTracks);
