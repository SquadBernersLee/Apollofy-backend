import express from "express";
// import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import playlistRouter from "./routes/playlist.routes";
import { tracksRouter } from "./routes/tracks.routes";
import userRouter from "./routes/user.routes";
import searchRouter from "./routes/search.routes";
import albumRouter from "./routes/albums.routes";

const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
/* app.use("/user"); */
app.use("/api", requestRoutes);
app.use("/api/playlist", playlistRouter);
app.use("/api/track", tracksRouter);
app.use("/api/user", userRouter);
app.use("/api/search", searchRouter);
app.use("/api/album", albumRouter);
export default app;
