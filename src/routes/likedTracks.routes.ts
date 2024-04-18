import { Router } from "express";
import { createTrackLiked, deleteLikedTrack, getAllLikedTracks } from "../controllers/likedTracks.controller";

export const likedTrackRouter = Router()

likedTrackRouter.get("/api/tracks/userId/like", getAllLikedTracks)
likedTrackRouter.post("/api/tracks/userId/like", createTrackLiked)
likedTrackRouter.delete("/api/tracks/userId/like", deleteLikedTrack)

