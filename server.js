const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let nextId = 1;

app.get("/", (req, res) => {
  res.send("Welcome to the Task Management API");
  console.log("console is printing");
});

app.post("/tasks", (req, res) => {
  const task = {
    id: nextId,
    title: req.body.title,
    completed: req.body.completed,
  };
  nextId++;
  tasks.push(task);
  res.status(201).send(task);
});

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return res.status(404).send("Task not found");
  }
  res.send(task);
});

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return res.status(404).send("Task not found");
  }
  task.title = req.body.title;
  task.completed = req.body.completed;
  res.status(200).send(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).send("Task not found");
  }
  tasks = tasks.filter((task) => task.id !== id);
  res.send(task);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
