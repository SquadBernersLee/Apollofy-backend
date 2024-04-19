import express from "express";
import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import playlistRouter from "./routes/playlist.routes";
import { tracksRouter } from "./routes/tracks.routes";

const app = express();

app.use(express.json());
/* app.use("/user"); */
app.use("/api", requestRoutes);
app.use("/api/playlist", playlistRouter);
app.use("/api/track", tracksRouter);
export default app;
