import { Router } from "express";
import { createTrackLiked, deleteLikedTrack, getAllLikedTracks } from "../controllers/likedTracks.Controllers";


export const likedTrackRouter = Router()

likedTrackRouter.get("/:userId/like", getAllLikedTracks)
likedTrackRouter.post("/:userId/like", createTrackLiked)
likedTrackRouter.delete("/:userId", deleteLikedTrack)