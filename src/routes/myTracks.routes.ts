import { Router } from "express";
import { getAllMyTracks } from "../controllers/myTrack.controllers";

const myTracksRouter = Router();

myTracksRouter.get("/api/me/track", getAllMyTracks)