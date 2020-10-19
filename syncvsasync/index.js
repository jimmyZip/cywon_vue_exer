/*
  node.js에서 파일을 동기적, 비동기적으로 읽으려면
  readFileSync(), readFile() 메서드 이용

  fs.readFileSync(path, [options])
  fs.readFile(path, [options], callback)

  path :: 읽을 파일 이름
  options :: 인코딩 설정(utf-8등), 읽기모드 등의 설정
  callback :: 콜백함수
*/
var fs = require("fs");
console.log("시작 : " + new Date().toISOString());

// 동기 파일읽기 시작
//var data = fs.readFileSync('movies.json');
//console.log("동기 파일읽기 : " + new Date().toISOString() + " " + data.toString());
// 동기 파일읽기 마침

// 비동기 파일 읽기 시작
fs.readFile('movies.json', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log("비동기 파일 읽기 : " + new Date().toISOString() + " " + data.toString());
});
//비동기 파일 읽기 마침

console.log("종료 : " + new Date().toISOString());
