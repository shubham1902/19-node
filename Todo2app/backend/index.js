const express = require("express");
import { createTodo, updateTodo } from "./types";
const app = express();
app.use(express.json());
//body {

//}
app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const todo = createTodo.safeParse(createPayload);
  if (!todo.success) {
    res.status(400).send({ error: "invalid payload" });
    return;
  }
  //put it in mogo db
});

app.get("/todos", (req, res) => {});
app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const todo = updateTodo.safeParse(updatePayload);
  if (!todo.success) {
    res.status(400).send({ error: "invalid payload" });
    return;
  }
  //put it in mogo db
});
app.listen(3000, () => {
  console.log(" chalne lag gaya hai server");
});
