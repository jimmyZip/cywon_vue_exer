const meetOrNot = false; //만남 성공, 만나지 못함에 대한 flag

const place = new Promise((resolve, reject) => {
  if(meetOrNot) {
    const placeDetails = {
      name: '롯데백화점',
      location: '소공동',
      time: '오후 2시'
    };
    resolve(placeDetails)
  } else {
    const errMessage = { error : '급한 일이 생겨서'}
    reject(errMessage)
  }
});

//console.log(place);
//simple promise에 promise.then()추가
  //Promise를 place변수에 담았기 때문에 place.then()으로 표현가능
/*
place.then( function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
  },
  function(reason) {
    console.log(reason);
    console.log(JSON.stringify(reason));
  }
)
*/

//promise.then(), promise.catch()메서드
place.then( function(data) {
  console.log(data);
  console.log(JSON.stringify(data));
}).catch( function(error) {
  console.log(error);
  console.log(JSON.stringify(error));
})
