import { Response, Request, NextFunction } from "express";
import create from "../middleware/create";

     function login(req:Request, res:Response, next:NextFunction){
        const username = req.query.username as string;
        const newToken = create.generateToken(username);
        res.send(newToken);
    }
    function verifyToken(req:Request, res:Response, next:NextFunction){
        res.send("Valid Token!")
    }

export default{login, verifyToken};
