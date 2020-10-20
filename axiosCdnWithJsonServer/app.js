new Vue({
  el: '#app',
  data: {
    employees: []
  },
  created() {
    axios.get('http://localhost:3000/employees')
      .then((res) => {
        console.log(res);//요청 성공
        this.employees = res.data;
      })
      .catch((err) => {
        console.log(err);//에러 발생 시
      })
  }
})
