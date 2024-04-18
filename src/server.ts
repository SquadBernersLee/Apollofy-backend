import express from "express";
import { userRouter } from "./routes/user.routes";
import { tracksRouter } from "./routes/tracks.routes";
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/", tracksRouter);
export default app;
