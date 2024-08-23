const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/todo.controller"); // TODO 컨트롤러 임포트

router.get("/todos", getAllItems); // 모든 항목 조회
router.get("/todos/:id", getItemById); // 특정 항목 조회
router.post("/todos", createItem); // 항목 추가
router.put("/todos/:id", updateItem); // 항목 수정
router.delete("/todos/:id", deleteItem); // 항목 삭제

module.exports = router;
