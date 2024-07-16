import express from "express";
import { createTodo, updateTodo } from "./types.js";
import { todoModel } from "./db.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
//body {

//}
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const todo = createTodo.safeParse(createPayload);
  if (!todo.success) {
    res.status(400).send({ error: "invalid payload" });
    return;
  }
  //put it in mogo db
  const newUser = new todoModel({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  await newUser
    .save()
    .then((result) => {
      res.send({
        success: "todo created",
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/todos", async function (req, res) {
  const todos = await todoModel.find({});
  res.json({ todos });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;

  const todoId = req.body.id;
  const updateFields = {
    completed: true,
  };

  try {
    const updatedTodo = await todoModel.findByIdAndUpdate(
      todoId,
      updateFields,
      {
        new: true,
      }
    );
    res.json({
      success: "Todo updated",
      updatedTodo: updatedTodo,
    });
  } catch (error) {
    res.status(400).send({ error: "Failed to update todo" });
  }
});
app.listen(3000, () => {
  console.log(" chalne lag gaya hai server");
});
