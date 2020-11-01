const http = require('http');
const hostname = '127.0.0.1';
const port = 8001;

//http서버 생성하고, 클라이언트로부터 요청받은 정보(request)와 응답(response)를 인자로 하는
//콜백 구성
const server = http.createServer((req,res) => {
  res.status = 200;
  //HTTP 응답 헤더 설정
    // 클라이언트(브라우저)로 보내는 내용이 어떤 컨텐트 타입인지 정의.
      // text/plain으로 설정 시 write()로 내보낸 컨텐츠가 깨져보임
  res.setHeader('Content-Type', 'text/html');

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

server.listen(port, hostname, () => {
  console.log('서버 동작 중... 포트(port) : ' + port);
})
