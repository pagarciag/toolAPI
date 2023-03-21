"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(username) {
    const secretKey = process.env.TOKEN_SECRET;
    return jsonwebtoken_1.default.sign({ username: username }, secretKey, { expiresIn: '7200s' });
}
exports.default = { generateToken };
