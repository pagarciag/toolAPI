import express from "express";
import userRouter from "./user.routes";
const router = express.Router();

router.use("/user", userRouter)

export default router;