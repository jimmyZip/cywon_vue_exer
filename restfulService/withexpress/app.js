// express module 가져오기
const express = require('express');
// express 모듈을 app 변수에 할당
const app = express();
const hostname = '127.0.0.1';
const port = 1337;

//memo.js 모듈 import
const memo = require('./memo.js');
//app.use메서드로 라우터를 추가
app.use('/memo', memo);


// 클라이언트로부터의 HTTP 요청을 처리하기 위해 app.get() 메서드 사용
app.get('/', (req, res) => {  // path(라우트 경로 정의), (req, res)
  res.status = 200;

  //응답형식이 html인 HTTP응답헤더 설정
  res.set('Content-Type', 'text/html');

  //응답
  res.write('<html></html>' +
            '<head>' +
            ' <title>Test</title>' +
            ' <meta charset="utf-8" />' +
            '</head>' +
            '<body>' +
            ' <div>안녕하세요.</div>' +
            '</body>'
  );

  //응답종료
  res.end();
});

app.get('/test', (req, res) => {
  res.status = 200;

  res.set('Content-Type', 'text/html');

  res.write('<html></html>' +
            '<head>' +
            ' <title>Test</title>' +
            ' <meta charset="utf-8" />' +
            '</head>' +
            '<body>' +
            ' <div>app.get() method 테스트입니다~</div>' +
            '</body>'
  );

  res.end();
});

app.listen(port, hostname, () => {
  console.log('서버 동작 중... 포트(port) : ' + port);
})
