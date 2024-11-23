const express = require("express");
const router = express.Router();
let roles = require("../data/roles");

router.get("/", (req, res) => res.json(roles));

router.post("/", (req, res) => {
  const { name, permissions } = req.body;
  const id = roles.length + 1;
  roles.push({ id, name, permissions });
  res.status(201).json({ message: "Role added", roles });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, permissions } = req.body;
  roles = roles.map((role) =>
    role.id === parseInt(id) ? { ...role, name, permissions } : role
  );
  res.json({ message: "Role updated", roles });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  roles = roles.filter((role) => role.id !== parseInt(id));
  res.json({ message: "Role deleted", roles });
});

module.exports = router;
