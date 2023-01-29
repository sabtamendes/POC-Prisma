import { number } from "joi";

export type Task = {
    task: string,
    notes: string,
}
export type RequestError = {
    status: number,
    data: object | null,
    statusText: string,
    name: string,
    message: string,
  };

  export type ApplicationError = {
    name: string;
    message: string;
  };
  
  export type TaskId = number;