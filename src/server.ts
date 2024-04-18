import express from "express";
// import { checkJwtMiddlewares } from "./middlewares/checkjwt.middlewares";
import { requestRoutes } from "./routes/request.routes";
import userRouter from "./routes/user.routes";
// import passwordRouter from "./routes/password.routes";
import artistRouter from "./routes/artist.routes";
import { urlencoded } from "body-parser";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api", requestRoutes);
// app.use("/api/password", passwordRouter);
app.use("/api/artists", artistRouter );

app.use(urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "./upload" }));

export default app;
