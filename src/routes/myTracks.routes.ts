import { Router } from "express";
import { getAllMyTracks } from "../controllers/myTracks.controllers";


export const myTracksRouter = Router();

myTracksRouter.get("/:userId", getAllMyTracks)