import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { private_key } from "./createjwt.js";
dotenv.config();
const secret_key = private_key;
export function verifyjwt(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json("Unauthorized Access");
    }
    else {
        try {
            const decodedToken = jwt.verify(token, secret_key);
            req.decodedToken = decodedToken;
            next();
        }
        catch (error) {
            console.error(error);
        }
    }
}
//# sourceMappingURL=verifyjwt.js.map