const zod = require("zod");
const createTodo = zod.object({
  title: zod.String(),
  description: zod.String(),
});
const updateTodo = zod.object({
  id: zod.String(),
});
module.exports = { createTodo, updateTodo };
