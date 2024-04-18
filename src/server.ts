import express from "express";

const app = express();

app.use(express.json());
//app.use("/user", user);
export default app;
