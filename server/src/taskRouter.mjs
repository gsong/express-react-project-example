import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

router.get("/", async (request, response) => {
  const tasks = await db.getTasks();
  response.json(tasks);
});

router.use(express.json());
router.post("/", async (request, response) => {
  const task = await db.addTask(request.body.name);
  response.status(201).json(task);
});

export default router;
