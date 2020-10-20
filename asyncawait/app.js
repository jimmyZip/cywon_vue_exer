//같은 리턴값을 반환하는 두 함수 작성
function func() {
  return 7;
}
async function asyncFunc() {
  return 7;
}

console.log(func());
console.log(asyncFunc());

//asyncFunc는 promise 형태로 반환하기 때문에 then()메서드 사용가능
asyncFunc().then(result => {
  console.log(result);
})

//async 키워드 적용한 함수 내에 await 키워드 적용
async function asyncAwait() {
  let promise = new Promise( (resolve, reject) => {
    setTimeout( () => { resolve(7) }, 1500);
  });
  let result = await promise;
  console.log(result);
}

asyncAwait();

//예외처리 경우 상정
async function asyncAwaitException() {
  let promise = new Promise( (resolve, reject) => {
    setTimeout( () => { reject("Error") }, 1500);
  });
  let result = await promise.catch(err => {
    console.error(err);
    return err;
  });
  console.log(result);
    //result가 await promise의 catch메서드의 리턴값을 기다리므로
    //아무것도 리턴하지 않으면, 즉 return err;이 없다면 undefined
}

asyncAwaitException();
