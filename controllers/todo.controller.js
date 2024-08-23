const Todo = require("../models/todo.model"); // TODO 모델 파일 임포트

// 공통 에러 핸들링 함수
const handleError = (res, error, statusCode = 400) => {
  console.error(error); // 서버 로그에 오류 출력
  res.status(statusCode).json({ status: "fail", error: error.message });
};

// 모든 TODO 가져오기(GET)
const getAllItems = async (req, res) => {
  try {
    const todos = await Todo.find(); // 모든 TODO 조회
    res.status(200).json({ status: "success", data: todos });
  } catch (error) {
    handleError(res, error);
  }
};

// 특정 TODO 가져오기(GET)
const getItemById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id); // ID로 TODO 조회
    if (!todo) {
      return res
        .status(404)
        .json({ status: "fail", message: "Todo not found" });
    }
    res.status(200).json({ status: "success", data: todo });
  } catch (error) {
    handleError(res, error);
  }
};

// TODO 추가하기(POST)
const createItem = async (req, res) => {
  try {
    const newTodo = new Todo(req.body); // 새로운 TODO 생성
    await newTodo.save(); // 데이터베이스에 저장
    res.status(201).json({ status: "success", data: newTodo });
  } catch (error) {
    handleError(res, error);
  }
};

// TODO 수정하기(PUT)
const updateItem = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // 새로 업데이트된 항목 반환, 유효성 검사 수행
    );
    if (!updatedTodo) {
      return res
        .status(404)
        .json({ status: "fail", message: "Todo not found" });
    }
    res.status(200).json({ status: "success", data: updatedTodo });
  } catch (error) {
    handleError(res, error);
  }
};

// TODO 삭제하기(DELETE)
const deleteItem = async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id); // ID로 TODO 삭제
    if (!result) {
      return res
        .status(404)
        .json({ status: "fail", message: "Todo not found" });
    }
    res.status(204).json({ status: "success", data: null }); // 삭제 성공
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
