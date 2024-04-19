import { Router } from "express";
import { getAllMyTracks } from "../controllers/myTrack.controllers";

export const myTracksRouter = Router();

myTracksRouter.get("/:userId", getAllMyTracks)