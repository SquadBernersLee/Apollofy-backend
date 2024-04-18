import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../controllers/user.controllers";

const userRouter = Router();

userRouter.get("/account", getAllUser);
userRouter.post("/account", createUser);
userRouter.patch("/account/:userId", updateUser);
userRouter.delete("/account/:userId", deleteUser);

export default userRouter;
