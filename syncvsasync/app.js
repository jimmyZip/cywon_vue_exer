function step1() {
  console.log('step1');
}
//비동기 처리 확인을 위해 step2 내부에 setTimeout()메서드 활용
  //setTimeout 메서드의 콜백함수 표현1
// function step2() {
//   //console.log('step2');
//   setTimeout(()=>{
//     console.log('step2');
//   },2000);
// }

//비동기 처리 확인을 위해 step2 내부에 setTimeout()메서드 활용
  //setTimeout 메서드의 콜백함수 표현2
// function step2() {
//   setTimeout(function() {
//     console.log('step2');
//   },2000);
// }

//비동기 처리 확인을 위해 step2 내부에 setTimeout()메서드 활용
  //setTimeout 메서드의 콜백함수 표현3
function step2() {
  setTimeout(callbackfunc, 2000);
}

function callbackfunc() {
  console.log('step2');
}

function step3() {
  console.log('step3');
}
step1();
step2();
step3();
