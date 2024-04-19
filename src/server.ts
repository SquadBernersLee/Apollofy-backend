import express from "express";
import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import { tracksRouter } from "./routes/tracks.routes";

const app = express();

app.use(express.json());
app.use("/api/tracks", tracksRouter )
// app.use("/user");
export default app;
