const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 1377;

function checkLogin() { return true; }
function logRequest() { console.log('새로운 요청'); }

app.get("/*", (req, res, next) => {
  logRequest();
  next();
})
app.get("/*", (req, res, next) => {
  if(checkLogin()) {
    next();
  } else {
    const msg = "로그인 하지 않았습니다. 로그인 하세요.";
    console.log(msg);
    res.send(msg);
  }
})

app.get("/dashboard", (req, res, next) => {
  res.send("dashboard 페이지");
})

app.listen(port, hostname, () => {
  console.log('서버 동작 중... 포트(port) : ' + port);
})
