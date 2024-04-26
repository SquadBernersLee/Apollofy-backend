import { Router } from "express";
import { getSearch } from "../controllers/search.controllers";

const searchRouter = Router();

searchRouter.get("/", getSearch);

export default searchRouter;
