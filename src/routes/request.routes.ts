import { Router } from "express";
import { checkJwtMiddlewares } from "../middlewares/checkjwt.middlewares";
import {
    protectedRequest,
    publicRequest,
} from "../controllers/requests.controllers";

export const requestRoutes: Router = Router();

requestRoutes.get("/public", publicRequest);
requestRoutes.get("/protected", checkJwtMiddlewares, protectedRequest);
