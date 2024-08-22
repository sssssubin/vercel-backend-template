const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // CORS 미들웨어 가져오기

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 할 일 스키마 및 모델 정의
const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
});

const Todo = mongoose.model("Todo", todoSchema);

app.use(cors()); // CORS 미들웨어 사용
app.use(express.json()); // JSON 요청 본문 파싱

// API 핸들러
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const newTodo = new Todo({ task: req.body.task });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: "Failed to create todo" });
  }
});

app.delete("/api/todos", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.query.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Failed to delete todo" });
  }
});

app.put("/api/todos", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.query.id,
      { task: req.body.task },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ error: "Failed to update todo" });
  }
});

module.exports = app;
