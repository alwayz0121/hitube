import express from "express";
import { edit, deleteVideo, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", deleteVideo);
userRouter.get("/:id", see);

export default userRouter;
