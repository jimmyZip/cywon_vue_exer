var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('메모 홈(home) 페이지');
})

router.get('/login', function(req, res) {
  res.send('login 페이지');
})

//생성한 라우터를 export해서 외부에서 import 가능하게 함
module.exports = router;
