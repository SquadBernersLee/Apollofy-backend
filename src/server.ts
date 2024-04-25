import express from "express";
import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import playlistRouter from "./routes/playlist.routes";
import { tracksRouter } from "./routes/tracks.routes";
import { likedTrackRouter } from "./routes/likedTracks.routes";
import { myTracksRouter } from "./routes/myTracks.routes";
import userRouter from "./routes/user.routes";
// import passwordRouter from "./routes/password.routes";
import artistRouter from "./routes/artist.routes";
import { urlencoded } from "body-parser";
import fileUpload from "express-fileupload";
import searchRouter from "./routes/search.routes";

const cors = require("cors");

const app = express();
app.use(cors());


app.use(express.json());
app.use("/user", checkJwtMiddlewares);
app.use("/api", checkJwtMiddlewares, requestRoutes)
app.use("/api/playlist",checkJwtMiddlewares, playlistRouter);
app.use("/api/track", checkJwtMiddlewares, tracksRouter);
app.use("/api/track", checkJwtMiddlewares, likedTrackRouter)
app.use("/api/track", checkJwtMiddlewares, myTracksRouter)
// app.use("/api/password", passwordRouter);
app.use("/api/artists", checkJwtMiddlewares, artistRouter );
app.use("/api/user", userRouter);
app.use("/api/search", searchRouter);

app.use(urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "./upload" }));

export default app;
