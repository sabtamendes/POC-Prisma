import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import task from "../src/routes/task.routes";
const server = express();
server.use(express.json())
server.use(cors());

server
.get("/health", async(req, res) => {
   try {
      const data = await prisma.list.findMany();
      res.send(data) 
   } catch (error) {
      console.log(error)
      process.exit(1);
   }
    
})
.use(task)

server.listen(4000, () => console.log('Running on port 4000'));