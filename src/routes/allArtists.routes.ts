import { Router } from "express";
import { getAllArtists } from "../controllers/allArtists.controller";


const allArtistRouter = Router();

allArtistRouter.get("/", getAllArtists);

export default allArtistRouter;