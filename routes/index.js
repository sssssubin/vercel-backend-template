const express = require("express");
const router = express.Router();
const todoRouter = require("./todo.router"); // TODO 라우터 파일 임포트

router.use("/api", todoRouter); // API 엔드포인트 설정

module.exports = router;
