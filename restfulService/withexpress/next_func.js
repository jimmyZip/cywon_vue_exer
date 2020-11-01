const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 1377;

app.get("/", function(req, res, next) { console.log("step 1"); next(); });
app.get("/", function(req, res, next) { console.log("step 2"); next(); });
app.get("/", function(req, res, next) { console.log("step 3"); res.end(); });

app.listen(port, hostname, () => {
  console.log('서버 동작 중... 포트(port) : ' + port);
})

// localhost:1377/ 호출 시 터미널에 app.get의 콜백 내용인 콘솔 로그가 찍힘
  // app.get() 메서드를 통한 라우트 경루로 next()를 호출하면
  // 다음 app.get()이 호출되는 방식이며 라우트 path가 같아야 한다.
    // res.end()를 가지고 있는 다음 app.get()까지 호출
    // 순차적으로 라우트 경로와 일치하는 다음 라우터 처리 루틴 작성에 유용
