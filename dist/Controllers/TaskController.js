import express, { Router } from "express";
import { AppDataSource } from "../datasource.js";
import { Task } from "../Models/Task.js";
import { verifyjwt } from "../Middleware/verifyjwt.js";
const app = express();
const taskRouter = Router();
const repository = AppDataSource.getRepository(Task);
app.use(express.json());
taskRouter.post("/add-task", verifyjwt, async (req, res) => {
    const newTask = {
        taskName: req.body.taskName,
        description: req.body.description
    };
    try {
        const repository = AppDataSource.getRepository(Task);
        await repository.save(newTask);
        res.status(201).json("New Task Added");
    }
    catch (error) {
        console.error("Error adding new task: " + error);
        res.status(500).json("Internal Server Error");
    }
});
taskRouter.get("/", verifyjwt, async (req, res) => {
    const products = await repository.find();
    try {
        res.status(200).send(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
});
export default taskRouter;
//# sourceMappingURL=TaskController.js.map