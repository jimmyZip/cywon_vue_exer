<template>
  <div id="app">
    <!-- 
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     -->
     {{ name }}
     <child-component v-on:sendmessage="receivemessage"></child-component>
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
      name: 'emit을 이용한 데이터 전달'
    }
  },
  methods: {
    receivemessage(msg) {
      this.name = msg;
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
    margin-top:10px;
}
.box button {
    margin: 4px;
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
