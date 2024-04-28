import { Router } from "express";
import {
  getAllAlbums,
  getAllAlbumsWithTracks,
} from "../controllers/album.controller";

const albumRouter = Router();
albumRouter.get("/", getAllAlbums);
albumRouter.get("/withTracks", getAllAlbumsWithTracks);

export default albumRouter;
