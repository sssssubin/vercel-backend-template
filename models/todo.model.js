const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// TODO의 스키마 정의
const todoSchema = new Schema({
  task: { type: String, required: true },
});

// 모델 생성 및 내보내기
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
