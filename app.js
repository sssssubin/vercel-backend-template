// 모듈 임포트 및 환경 설정 로드
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // CORS 미들웨어 가져오기

// 라우터 임포트
const router = require("./routes/index");

// 애플리케이션 초기화
const app = express();
dotenv.config();

// MongoDB URL 설정
const MONGODBURL = process.env.MONGODB_URI;

// MongoDB 연결 설정
mongoose.connect(MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 미들웨어 설정
app.use(cors()); // CORS 미들웨어 사용
app.use(express.json()); // JSON 요청 본문 파싱

// 라우터 설정
app.use("/", router);

module.exports = app; // Express 앱을 내보냄
