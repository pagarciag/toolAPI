"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticateToken(req, res, next) {
    try {
        const secretKey = process.env.TOKEN_SECRET;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null)
            return res.sendStatus(401);
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.token = decoded;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(401).send('Authentication failed.');
    }
}
exports.authenticateToken = authenticateToken;
