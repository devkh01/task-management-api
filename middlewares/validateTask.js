function validateTask(req, res, next) {
  const { title } = req.body;
  if (
    title === undefined ||
    typeof title !== "string" ||
    title.trim().length === 0
  ) {
    return res.status(400).send("Invalid title");
  }
  next();
}

module.exports = validateTask;
