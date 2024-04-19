import express from "express";
import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import playlistRouter from "./routes/playlist.routes";
import { tracksRouter } from "./routes/tracks.routes";
import { likedTrackRouter } from "./routes/likedTracks.routes";
import { myTracksRouter } from "./routes/myTracks.routes";

const app = express();

app.use(express.json());
/* app.use("/user"); */
app.use("/api", requestRoutes);
app.use("/api/playlist", playlistRouter);
app.use("/api/track", tracksRouter);
app.use("/api/track/like", likedTrackRouter)
app.use("/api/me/track", myTracksRouter)

export default app;
