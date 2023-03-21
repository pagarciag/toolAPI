import { Response, Request, NextFunction } from "express";
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export function authenticateToken(req:Request,res:Response,next:NextFunction){
    try{

        const secretKey:Secret = process.env.TOKEN_SECRET!;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(token == null) return res.sendStatus(401);
    
        const decoded = jwt.verify(token, secretKey);
        (req as CustomRequest).token = decoded;

        next();

    }catch(err){
        console.log(err);
        res.status(401).send('Authentication failed.')
    }
}