import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controllers";

const userRouter = Router();

userRouter.post("/account", createUser);
userRouter.get("/account", getAllUsers);
userRouter.patch("/account/:userId", updateUser);
userRouter.delete("/account/:userId", deleteUser);
userRouter.get("/account/:userId", getUserById);
export default userRouter;
