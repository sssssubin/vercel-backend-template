const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // CORS 미들웨어 가져오기

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 할 일 스키마 및 모델 정의
const testSchema = new mongoose.Schema({
  task: { type: String, required: true },
});

const Test = mongoose.model("Test", testSchema);

app.use(cors()); // CORS 미들웨어 사용
app.use(express.json()); // JSON 요청 본문 파싱

// API 핸들러
app.get("/api/tests", async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/tests", async (req, res) => {
  try {
    const newTest = new Test({ task: req.body.task });
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(400).json({ error: "Failed to create Test" });
  }
});

app.delete("/api/tests", async (req, res) => {
  try {
    await Test.findByIdAndDelete(req.query.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Failed to delete Test" });
  }
});

app.put("/api/tests", async (req, res) => {
  try {
    const updatedTest = await Test.findByIdAndUpdate(
      req.query.id,
      { task: req.body.task },
      { new: true }
    );
    res.status(200).json(updatedTest);
  } catch (error) {
    res.status(400).json({ error: "Failed to update Test" });
  }
});

module.exports = app;
