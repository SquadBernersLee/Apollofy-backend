import { Router } from "express";
import {
  getAllLikedTracks,
  getAllTracks,
  likeTrack,
} from "../controllers/tracks.controller";

export const tracksRouter = Router();

tracksRouter.get("/", getAllTracks);

tracksRouter.post("/likeTrack", likeTrack);

tracksRouter.get("/likeTrack/:UserId", getAllLikedTracks);
