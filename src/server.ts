import express from "express";
import cors from "cors";
// import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import playlistRouter from "./routes/playlist.routes";
import { tracksRouter } from "./routes/tracks.routes";
import userRouter from "./routes/user.routes";
import searchRouter from "./routes/search.routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.APP_ORIGIN,
  })
);
/* app.use("/user"); */
app.use("/api", requestRoutes);
app.use("/api/playlist", playlistRouter);
app.use("/api/track", tracksRouter);
app.use("/api/user", userRouter);
app.use("/api/search", searchRouter);
export default app;
