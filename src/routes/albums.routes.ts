import { Router } from "express";
import { getAllAlbums } from "../controllers/album.controller";

const albumRouter = Router();

albumRouter.get("/", getAllAlbums);
export default albumRouter;
