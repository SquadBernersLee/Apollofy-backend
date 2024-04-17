import { Router } from "express"
import { createPassword, getAllPasswords, updatePassword } from "../controllers/password.controllers";
import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";

const passwordRouter = Router();

passwordRouter.get("/api/authenticate", checkJwtMiddlewares, getAllPasswords)
passwordRouter.post("/api/authenticate", checkJwtMiddlewares, createPassword)
passwordRouter.patch("/api/authenticate:passwordId", checkJwtMiddlewares, updatePassword)

export default passwordRouter;