import express, {Request, Response} from "express"
import taskRouter from "./Controllers/TaskController.js"
import authRouter from "./Controllers/AuthController.js"
import dotenv from "dotenv"
const app = express()
app.use(express.json())
dotenv.config()
console.log(process.env.PRIVATE_KEY)

app.use("/api/task", taskRouter)
app.use('/api/auth', authRouter)


app.listen(8080, ()=> {
    console.log("App is runnning on port 8080")
})