var express = require('express');
var app = express();
app.use(express.urlencoded({extended: true}))
  //express.urlencoded :: Express 내장함수
    //body-parser를 기반으로 클라이언트 요청을 파싱하는 역할
app.post('/', function (req, res) {
  //vue basic validation exam
  //app.post() :: express.js의 Route라우트 메서드 중 포스트 메서드
    // '/'는 경로, 콜백함수의 파라미터는 순서대로 요청과 응답을 나타냄
  //console.log('클라이언트로부터 온 요청 : '+ req.body.userId);
  //console.log('클라이언트로부터 온 요청 : '+ req.body.password);
  //console.log('클라이언트로부터 온 요청 : '+ req.body.food);

  //vuetify validation exam
  console.log('클라이언트로부터 온 요청 : '+ req.body.email);
  console.log('클라이언트로부터 온 요청 : '+ req.body.password);
  res.json({
    "message" : "정상적으로 서버에 전달되었습니다."
  });//클라이언트로 전송
})

var port = process.env.PORT || 8080; //configure server PORT
app.listen(port, () => {
  console.log('포트 : ' + port + '을(를) 열고 서버 동작 중...')
});
