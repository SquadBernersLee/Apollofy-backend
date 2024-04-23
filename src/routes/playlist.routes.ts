import { Router } from "express";
import {
  addSongPlaylist,
  createPlaylist,
  deletePlaylist,
  followPlaylist,
  getAllPlaylist,
  updatePlaylist,
} from "../controllers/playlist.controllers";

const playlistRouter = Router();

playlistRouter.get("/", getAllPlaylist);
playlistRouter.post("/", createPlaylist);
playlistRouter.patch("/:id", updatePlaylist);
playlistRouter.delete("/:id", deletePlaylist);
playlistRouter.post("/:id/follow", followPlaylist);

playlistRouter.post("/:id", addSongPlaylist);
export default playlistRouter;
