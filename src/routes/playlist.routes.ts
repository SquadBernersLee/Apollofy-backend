import { Router } from "express";
import {
  addSongPlaylist,
  createPlaylist,
  deletePlaylist,
  followPlaylist,
  followUnfollow,
  getAllPlaylist,
  getFollowedPlaylistsByUserId,
  getPlaylistById,
  getSongsByPlaylistId,
  isUserFollowingPlaylist,
  updatePlaylist,
} from "../controllers/playlist.controllers";

const playlistRouter = Router();

playlistRouter.get("/", getAllPlaylist);
playlistRouter.post("/", createPlaylist);
playlistRouter.patch("/:id", updatePlaylist);
playlistRouter.delete("/:id", deletePlaylist);
playlistRouter.post("/:id/follow", followPlaylist);

playlistRouter.post("/:id", addSongPlaylist);

playlistRouter.get("/followedPlaylists/:userId", getFollowedPlaylistsByUserId);
playlistRouter.get("/songs/:id", getSongsByPlaylistId);

playlistRouter.get("/individual/:id", getPlaylistById);

playlistRouter.get(
  "/is-following-playlist/:userId/:playlistId",
  isUserFollowingPlaylist
);

playlistRouter.get("/followUnfollow/:userId/:id", followUnfollow);

export default playlistRouter;
