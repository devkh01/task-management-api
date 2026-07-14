const express = require("express");
const router = express.Router();
const validateId = require("../middlewares/validateId");
const validateTask = require("../middlewares/validateTask");
const verifyToken = require("../middlewares/verifyToken");

const {
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getAllTasks,
} = require("../controllers/taskController");

router.get("/",verifyToken, getAllTasks);

router.post("/",verifyToken,  validateTask, createTask);

router.get("/:id",verifyToken, validateId, getTaskById);

router.put("/:id",verifyToken, validateId, validateTask, updateTask);

router.delete("/:id",verifyToken, validateId, deleteTask);

module.exports = router;
