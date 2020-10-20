new Vue({
  el: '#app',
  data: {
    employees: [],
    //POST 메서드를 이용한 예제 용도로 employee 객체를 뷰 인스턴스의 data 객체에 추가
    employee: { id: 0, name: '', email: ''},
    isUpdate: false,
    show: false,
    send: false
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
  },
  methods: {
    showForm(emp) {
      this.show = true;
      //PUT 메서드 수정 처리 위해 추가
      if((emp !== undefined)) {
        this.employee.id = emp.id;
        this.employee.name = emp.name;
        this.employee.email = emp.email;
        this.isUpdate = true;
      }
    },
    btnOk() {
      this.send = true;
      // if(this.isUpdate == false) {
      //   this.addEmployee();
      // }
      (this.isUpdate == false)? this.addEmployee() : this.updateEmployee(this.employee.id);
    },
    btnCancel() {
      this.show = false;
      this.send = false;
    },
    addEmployee() {
      if(this.send == true) {
        axios.post('http://localhost:3000/employees',
        {
          "id": this.employee.id,
          "name": this.employee.name,
          "email": this.employee.email
        }).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
        this.show = false;
        this.send = false;
      }
    },
    updateEmployee(id) {
      axios.put('http://localhost:3000/employees/'+id, {
        "id": this.employee.id,
        "name": this.employee.name,
        "email": this.employee.email
      }).then((res) => {
        console.log(res);
        this.isUpdate = false;
      }).catch((err) => {
        console.log(err);
      })
    },
    deleteEmp(id) {
      axios({method:'delete', url:'http://localhost:3000/employees/'+id})
      .then((res) => {
        this.employees.splice(id, 1);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
})
