import { Router } from "express";
import { createSearch } from "../controllers/search.controllers";

const searchRouter = Router();

searchRouter.post("/api/search", createSearch)