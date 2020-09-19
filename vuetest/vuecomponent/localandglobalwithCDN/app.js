//전역 컴포넌트
/*
Vue.component('child-component', {
  template: `
  <div class="container">
    <p>ChildComponent 입니다.</p>
  </div>`
});
*/

//전역 컴포넌트
/*
Vue.component('comp-article', {
  template: `
    <div class="article">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      <child-component></child-component>
    </div>
  `
});
*/

/*
  전역 component 정의는 Vue instance를 정의하기 전에
  Vue.component() 메서드로 정의해야 한다.
*/


//Vue instance 정의
new Vue({
  el: '#app',
  //define local component
  components: {
    'child-component': {
      template: `
          <div class="container">
            <p>ChildComponent입니다.</p>
          </div>
        `
    },
    'comp-article': {
      template: `
          <div>
            <div class="article">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              <child-component></child-component>
            </div>
          </div>
        `
    }
  }
})
