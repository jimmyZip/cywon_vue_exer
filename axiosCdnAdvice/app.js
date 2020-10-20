new Vue({
  el: '#app',
  data: {
    advice: 'loading data ...'
  },
  created() {
    axios.get('https://api.adviceslip.com/advice')  //request on server
    .then((res) => {
      console.log(res); //성공 확인용
      this.advice = res.data.slip.advice
    }).catch((err) => {
      console.log(err);//rejected :: 에러발생 확인용
    })
  }
})
