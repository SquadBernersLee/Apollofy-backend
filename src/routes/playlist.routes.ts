import { Router } from "express";
import { createPlaylist } from "../controllers/playlist.controllers";

const playlistRouter = Router();

/* playlistRouter.get("/:id", getAllPlaylist); */
playlistRouter.post("/", createPlaylist);
/* playlistRouter.patch("/:id", updatePlaylist);
playlistRouter.delete("/:id", deletePlaylist);  */

export default playlistRouter;
