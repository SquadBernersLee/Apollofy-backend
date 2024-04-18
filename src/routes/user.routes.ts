import { Router } from "express"
import { createUser, deleteUser, getAllUser, updateUser } from "../controllers/user.controllers";

const userRouter = Router();

userRouter.get("/api/account", getAllUser)
userRouter.post("/api/account", createUser)
userRouter.patch("/api/account/:userId", updateUser)
userRouter.delete("/api/account/:userId", deleteUser)

export default userRouter;