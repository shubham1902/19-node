/*
todo {
title 
description 
copmpleted}
*/

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shubhamjoshi1902:01234@cluster0.8wxhw7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todoModel = mongoose.model("todos", todoSchema);
console.log(typeof todoModel);
module.exports = { todoModel };
