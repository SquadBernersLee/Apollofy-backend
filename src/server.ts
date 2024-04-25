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

const cors = require("cors");

const app = express();
app.use(cors());


app.use(express.json());
app.use("/user");
app.use("/api", requestRoutes)
app.use("/api/playlist", playlistRouter);
app.use("/api/track", tracksRouter);
app.use("/api/track", likedTrackRouter)
app.use("/api/track", myTracksRouter)
// app.use("/api/password", passwordRouter);
app.use("/api/artists", artistRouter );

app.use(urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "./upload" }));

export default app;
