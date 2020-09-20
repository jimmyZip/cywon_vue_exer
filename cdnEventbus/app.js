//EventBus 생성
const EventBus = new Vue();

//result-component 정의
Vue.component('result-component', {
  template: `<div>
              <h2>저희 은행을 방문해주셔서 감사합니다.</h2>
              <p>현재 대기자 수 : {{ waiting }}</p>
            </div>`,
  data() {
    return {
      waiting: 0
    }
  },
  created() {
    EventBus.$on('subtract', ()=> {
      //이벤트 구독 측에 대기자 수 빼기
      if(this.waiting >= 1) {
        this.waiting -= 1;
      }
    }),
    EventBus.$on('add', ()=> {
      //이벤트 구독 측에 대기자 수 더하기
      this.waiting += 1;
    })
  }
});

//cust-component 정의
Vue.component('cust-component', {
  template: `<button @click="add">대기표 뽑기</button>`,
  methods: {
    add() {
      EventBus.$emit('add');//대기자 수 더하기 발행
    }
  }
});

//teller-component 정의
Vue.component('teller-component', {
  template: `<button @click="subtract">서비스 처리 완료</button>`,
  methods: {
    subtract() {
      EventBus.$emit('subtract');//대기자 수 빼기 발행
    }
  }
});

//뷰 인스턴스 생성
new Vue({
  el: '#app'
});
