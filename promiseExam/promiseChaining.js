var fs = require("fs");

var data = ["김창수", "01077859923", 25000];

console.log("시작");

new Promise((resolve, reject) => {
  resolve(data[0]);
}).then((result) => {
  console.log(result);  //김창수
  return result+","+data[1];
}).then((result) => {
  console.log(result);  //김창수, 01077859923
  return result+","+data[2];
}).then((result) => {
  console.log(result);  //김창수, 01077859923, 25000
  fs.writeFile('paylist.csv', result, (error) => {
    if(error) {
      console.error(error);
    }
  })
}).catch((error) => {
  console.log(error);
})

console.log("종료");
