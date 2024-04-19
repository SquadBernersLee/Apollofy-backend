import { Router } from "express";
import { createTracks, deleteTrack, getAllTracks, trackUpdated } from "../controllers/tracks.controller";

export const tracksRouter = Router();

tracksRouter.get("/", getAllTracks);
tracksRouter.post("/:userId", createTracks)
tracksRouter.patch("/:userId", trackUpdated)
tracksRouter.delete("/:userId", deleteTrack)