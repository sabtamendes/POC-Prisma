import { list } from "@prisma/client";
import { notFoundError } from "../errors/not-found-error";
import { RequestError } from "../errors/request-error";
import { Task, TaskId } from "../protocols/protocols";
import taskRepository from "../repositories/repositores";

async function postNewTask(data: Task): Promise<list> {
  if (!data) throw RequestError(400, "");
  return await taskRepository.createNewTask(data);
}

async function getTasksById(taskId: TaskId) {
  if (!taskId) throw RequestError(400, "");

  const task = await taskRepository.findAllTasks(taskId);
  if (!task) throw notFoundError();

  return task;
}

async function getAllTasks() {
  const allTasks = await taskRepository.findManyTasks();

  return allTasks;
}
const tasksServices = {
  postNewTask,
  getTasksById,
  getAllTasks
};

export default tasksServices;
