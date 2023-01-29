// import { Task } from "../protocols/protocols";
// import { findAllTasks, createTask } from "../repositories/repositores";

// export async function postNewTask(req: Request, res: Response) {
//     const { task, notes } = req.body as Task;
//     try {
//         await createTask(task, notes);
//        return res.send("Tarefa criada com sucesso!").status(201);
//     } catch (error) {
//         console.error(error);
//        return res.sendStatus(500);
//     }
// };


import { Request, Response } from "express";
import { Task, TaskId } from "../protocols/protocols";
import tasksServices from "../services";

export async function postNewTask(req: Request, res: Response) {
    const { task, notes } = req.body as unknown as Task;
    const newTask = {
        task, notes
    };
    try {
        await tasksServices.postNewTask(newTask);
        return res.sendStatus(200);
    } catch (error) {
        return res.status(400).send({ message: "Os campos task e/ou notes estão vázios!" });
    }
}

export async function getTasksById(req: Request, res: Response) {
    const taskId = Number(req.query.taskId) as unknown as TaskId;

    try {
        const allTasks = await tasksServices.getTasksById(taskId);
        return res.status(200).send(allTasks);

    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.status(404).send({ message: "Essa tarefa não foi encontrada!" })
        }
        return res.status(400).send({ message: "Informação inválida!" });
    }
}

export async function getAllTasks(req: Request, res: Response) {
     try {
        const data = await tasksServices.getAllTasks();
       return res.status(200).send(data);
     } catch (error) {
        console.error(error);
       return res.sendStatus(500);
     }
}