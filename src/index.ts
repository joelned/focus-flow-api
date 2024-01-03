import express, {Request, Response} from "express"
import taskRouter from "./Controllers/TaskController.js"
import authRouter from "./Controllers/AuthController.js"
const app = express()
app.use(express.json())


app.use("/api/task", taskRouter)
app.use('/api/auth', authRouter)


app.listen(8080, ()=> {
    console.log("App is runnning on port 8080")
})