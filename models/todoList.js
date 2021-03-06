const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  name: { type: String, required: true },
  isDone: { type: Boolean, default: false },
});

const TodoList = mongoose.model("TodoList", todoListSchema);

module.exports = TodoList;
