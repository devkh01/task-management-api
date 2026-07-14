require("dotenv").config();
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Task Management API");
  console.log("console is printing");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
