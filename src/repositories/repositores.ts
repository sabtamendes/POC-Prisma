import { list } from "@prisma/client";
import prisma from "../config/database";
import { Task, TaskId } from "../protocols/protocols";

async function createNewTask(data: Task): Promise<list> {
    return await prisma.list.create({ data });
}

async function findAllTasks(taskId: TaskId) {
    return await prisma.list.findFirst({ where: { id: taskId } });
}

async function findManyTasks() {
    return await prisma.list.findMany();
}

const taskRepository = {
    createNewTask,
    findAllTasks,
    findManyTasks
}

export default taskRepository;
