const pool = require("../db");

const createTask = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO tasks(title, completed) VALUES($1, $2) RETURNING *",
      [req.body.title, req.body.completed]
    );
    return res.status(201).send(result.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const getTaskById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const result = await pool.query("select * from tasks where id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).send("Task not found");
    }
    return res.send(result.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

const updateTask = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const result = await pool.query(
      "update tasks set title = $1 , completed = $2 where id = $3 returning *",
      [req.body.title, req.body.completed, id],
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Task not found");
    }
    return res.send(result.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};

const deleteTask = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const result = await pool.query(
      "delete from tasks where id = $1 returning *",
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Task not found");
    }
    return res.status(200).send(result.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};

const getAllTasks = async (req, res) => {
  try {
    const result = await pool.query("select * from tasks");
    return res.send(result.rows);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getAllTasks,
};
