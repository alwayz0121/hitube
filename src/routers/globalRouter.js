import express from "express";
import { home } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
