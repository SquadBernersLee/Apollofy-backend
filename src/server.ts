import express from "express";
import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";

const app = express();

app.use(express.json());
// app.use("/user");
export default app;
