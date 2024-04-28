import express from "express";
// import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import playlistRouter from "./routes/playlist.routes";
import { tracksRouter } from "./routes/tracks.routes";
import { likedTrackRouter } from "./routes/likedTracks.routes";
import { myTracksRouter } from "./routes/myTracks.routes";
import userRouter from "./routes/user.routes";
import searchRouter from "./routes/search.routes";
import albumRouter from "./routes/albums.routes";

const app = express();
app.use(cors());

app.use(express.json());
// app.use("/user", checkJwtMiddlewares);
app.use("/api", requestRoutes);
app.use("/api/playlist", playlistRouter);
app.use("/api/track", tracksRouter);
app.use("/api/track", likedTrackRouter);
app.use("/api/track", myTracksRouter);
app.use("/api/user", userRouter);
app.use("/api/search", searchRouter);
app.use("/api/album", albumRouter);
export default app;
