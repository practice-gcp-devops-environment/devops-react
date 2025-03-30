const express = require('express');
const path = require('path');
const app = express();

// ✅ 로그 찍기
// app.use(morgan('combined'));
// 또는
app.use(morgan('dev')); // 개발환경에 더 보기 쉬운 포맷

// React 빌드된 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'build')));

// React 앱 진입점
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 실행
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`🚀 Express 서버가 ${PORT}번 포트에서 실행 중`);
});
