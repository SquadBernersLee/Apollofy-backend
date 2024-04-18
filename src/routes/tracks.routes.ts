import { Router } from "express";
import { createTracks, deleteTrack, getAllTracks, trackUpdated } from "../controllers/tracks.controller";


export const tracksRouter = Router()

tracksRouter.get("/api/tracks/:userId", getAllTracks)
tracksRouter.post("/api/track/", createTracks)
tracksRouter.patch("/api/tracks/:userId", trackUpdated)
tracksRouter.delete("/api/tracks/:userId", deleteTrack)