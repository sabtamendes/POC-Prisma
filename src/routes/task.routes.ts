import { Router } from "express";
import {  getAllTasks, getTasksById, postNewTask } from "../controllers/controllers";

const task = Router();

task
.post("/task", postNewTask)
.get("/task", getTasksById)
.get("/task",getAllTasks);

export default task;