const express = require("express");
const router = express.Router();
const validateId = require("../middlewares/validateId");
const validateTask = require("../middlewares/validateTask");

const {
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getAllTasks,
} = require("../controllers/taskController");

router.get("/", getAllTasks);

router.post("/", validateTask, createTask);

router.get("/:id", validateId, getTaskById);

router.put("/:id", validateId, validateTask, updateTask);

router.delete("/:id", validateId, deleteTask);

module.exports = router;
