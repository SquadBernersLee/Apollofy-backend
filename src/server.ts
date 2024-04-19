import express from "express";
import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import { tracksRouter } from "./routes/tracks.routes";
import { myTracksRouter } from "./routes/myTracks.routes";

const app = express();

app.use(express.json());
app.use("/api/tracks", tracksRouter )
app.use("/api/me/tracks", myTracksRouter)
// app.use("/user");
export default app;
