import { Router } from "express";
import {
  addAlbum,
  getAllAlbums,
  getAllAlbumsWithTracks,
} from "../controllers/album.controller";

const albumRouter = Router();
albumRouter.get("/", getAllAlbums);
albumRouter.get("/withTracks", getAllAlbumsWithTracks);
albumRouter.post("/", addAlbum);
export default albumRouter;
