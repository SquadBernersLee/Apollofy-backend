import { Router } from "express";
import { createTrackLiked, deleteLikedTrack, getAllLikedTracks } from "../controllers/likedControllers";


export const likedTrackRouter = Router()

likedTrackRouter.get("/:userId", getAllLikedTracks)
likedTrackRouter.post("/:userId", createTrackLiked)
likedTrackRouter.delete("/:userId", deleteLikedTrack)