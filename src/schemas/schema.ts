import Joi from "joi";
import { Task, TaskId } from "../protocols/protocols";

export const listSchema = Joi.object<Task>({
    task: Joi.string().min(5).required(),
    notes: Joi.string().min(5).required
});

export const taskIdSchema = Joi.object<TaskId>({
    id: Joi.number().strict().min(1).required()
});