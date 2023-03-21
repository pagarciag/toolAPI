import express from "express";
import userController from "../controllers/user.controller";
import { authenticateToken } from "../middleware/authenticate";
const userRouter = express.Router();

userRouter.get("/login", userController.login);
userRouter.get("/verify",authenticateToken, userController.verifyToken);

export default userRouter;