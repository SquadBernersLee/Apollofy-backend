import { Router } from "express";
import { getArtist } from "../controllers/artist.controller";

const artistRouter = Router();

artistRouter.get("/:userId", getArtist);

export default artistRouter;
