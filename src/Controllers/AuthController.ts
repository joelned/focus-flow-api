import express, {Request, Router, Response} from "express";
import { User } from "../Models/User.js";
import{createjwt} from "../Middleware/createjwt.js"
import { AppDataSource } from "../datasource.js";
import * as bcrypt from "bcrypt"



const authRouter= Router();
const app = express();
const repository = AppDataSource.getRepository(User)
app.use(express.json())

authRouter.post("/signup", async(req: Request, res:Response)=>{
  
    try{
        const newUser ={
            username: req.body.username, 
            password: req.body.password
        }

        const isPresent = await repository.findOne(
            {
                where:{
                    username: newUser.username
                }
            }
        )
        if(isPresent){
            return res.status(409).send("Username already taken");
        }
        else{
            const hashedPassword = await bcrypt.hash(newUser.password,10);
            newUser.password = hashedPassword;
            await repository.save(newUser);
            res.status(201).json("New User Added");
        }
       
    }

    catch(error){
        console.error("Error creating user: "+ error)
        res.status(500).json("Internal Server Error")
    }
    
})

authRouter.post("/login", async (req:Request, res:Response)=>{
    try{
        const User={
            username: req.body.username,
            password: req.body.password
        };
        const existingCustomer = await repository.findOne({
            where:{
                username: User.username
            }
        }); 
        if(existingCustomer){
            const isMatched = await bcrypt.compare(User.password, existingCustomer.password)
            if(isMatched){
                const token = createjwt({id: existingCustomer.userId});
                res.status(200).json({message: "Login Successful", accessToken: token})
            }
            else{
                res.status(401).json("Invalid Credentials");
            }
        }
        else{
            res.status(401).json("Invalid Credentials");
        }
    }
    catch(error){
        console.log(error); 
        res.status(500).json("Internal Server Error");
    }
 
})

export default authRouter