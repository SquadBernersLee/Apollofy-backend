import { Router } from "express"
import { createPassword, getAllPasswords, updatePassword } from "../controllers/password.controllers";

const passwordRouter = Router();

passwordRouter.get("/api/authenticate", getAllPasswords)
passwordRouter.post("/api/authenticate", createPassword)
passwordRouter.patch("/api/authenticate:passwordId", updatePassword)
// passwordRouter.delete("/api/authenticate:passwordId", deletepassword)

export default passwordRouter;