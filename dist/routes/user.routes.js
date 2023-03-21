"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const authenticate_1 = require("../middleware/authenticate");
const userRouter = express_1.default.Router();
userRouter.get("/login", user_controller_1.default.login);
userRouter.get("/verify", authenticate_1.authenticateToken, user_controller_1.default.verifyToken);
exports.default = userRouter;
