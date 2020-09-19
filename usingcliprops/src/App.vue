<template>
  <div id="app">
    <!-- 
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     -->
     {{ name }}
     <child-component v-bind:childmessage="message"></child-component>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    ChildComponent
  },
  data() {
    return {
      name: 'props를 이용한 데이터 전달',
      message: '부모 컴포넌트로부터 전달'
    }
  }
}
</script>

<style>
#app {
  background-color: blue;
  padding: 6px;
  color: #fff;
}
.box {
  background-color: teal;
  margin-top: 10px;
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
