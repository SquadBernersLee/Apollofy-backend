import { Router } from "express";
import {
  createTracks,
  deleteTrack,
  getAllTracks,
  trackUpdated,
} from "../controllers/tracks.controller";
import multerCloudinaryConnect from "../../Utils/multer-cloudinary";

export const tracksRouter = Router();

tracksRouter.get("/:userId", getAllTracks);
tracksRouter.post("/:userId", createTracks);
tracksRouter.patch("/:userId", trackUpdated);
tracksRouter.delete("/:userId", deleteTrack);

tracksRouter.get("/", getAllTracks);
tracksRouter.post(
  "/:userId",
  multerCloudinaryConnect.single("image"),
  createTracks
);
