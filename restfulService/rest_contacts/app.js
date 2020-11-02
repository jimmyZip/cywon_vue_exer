const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
// express app 생성
const app = express();

//json 형식 parsing
app.use(bodyparser.json());
//cors 적용
app.use(cors());

const dbconfig = require("./db.js");
const mongoose = require('mongoose');

//database connection 및 상태 로깅
  //클라이언트에서 Express 서버에 REST 요청 시 Mongoose로 MongoDB에 요청해
  //요청 처리 결과를 클라이언트에 전달
mongoose.connect(dbconfig.url, {useNewUrlParser:true})
.then(() => {
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.");
}).catch( err => {
  console.log("MongoDB에 연결되지 않았습니다.", err);
});

app.get('/', (req, res) => {
  console.log(req);
  res.json({"message":"여러분들을 환영합니다."});
})

require('./router.js')(app);

//서버 포트 설정
var port = process.env.PORT || 8000;

//클라이언트로부터 요청 듣기
app.listen(port, () => {
  console.log("포트 : " + port + " 을 열고 서버 동작 중...");
});
