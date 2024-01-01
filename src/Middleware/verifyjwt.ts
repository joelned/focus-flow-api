import jwt from "jsonwebtoken"
import express, {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
import { private_key } from "./createjwt.js"

dotenv.config()
const secret_key = private_key;

interface DecodedToken{
    id?: string, 
    username?: string
}

declare global {
    namespace Express{
        interface Request{
            decodedToken?: DecodedToken
        }
    }
}

export function verifyjwt(req: Request, res:Response, next: NextFunction){
    const token = req.headers.authorization?.split(" ")[1]; 
    if(!token){
        res.status(401).json("Unauthorized Access");
    }
    else{
        try{
            const decodedToken = jwt.verify(token, secret_key) as DecodedToken;
            req.decodedToken = decodedToken;
            next();
        }
        catch(error){
            console.error(error)
        }
    }
}