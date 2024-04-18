import express from "express";
// import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api", requestRoutes);
export default app;
