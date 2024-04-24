import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controllers";

const userRouter = Router();

userRouter.post("/account", createUser);
userRouter.get("/account", getAllUsers);

export default userRouter;
