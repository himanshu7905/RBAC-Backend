const express = require("express");
const router = express.Router();
let users = require("../data/users");

router.get("/", (req, res) => res.json(users));

router.post("/", (req, res) => {
  const { name, role, status } = req.body;
  const id = users.length + 1;
  users.push({ id, name, role, status });
  res.status(201).json({ message: "User added", users });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, role, status } = req.body;
  users = users.map((user) =>
    user.id === parseInt(id) ? { ...user, name, role, status } : user
  );
  res.json({ message: "User updated", users });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.json({ message: "User deleted", users });
});

module.exports = router;
