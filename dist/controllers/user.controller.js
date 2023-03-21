"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = __importDefault(require("../middleware/create"));
function login(req, res, next) {
    const username = req.query.username;
    const newToken = create_1.default.generateToken(username);
    res.send(newToken);
}
function verifyToken(req, res, next) {
    res.send("Valid Token!");
}
exports.default = { login, verifyToken };
