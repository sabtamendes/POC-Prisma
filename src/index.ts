import express from "express";

const server = express();
server.use(express.json());
server.get("/health", (req, res) => {
    res.send("ok")
})

server.listen(4000, () => console.log('Running on port 4000'));