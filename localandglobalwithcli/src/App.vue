<template>
  <div id="app">
    <!-- 
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     -->
    <child-component />
    <comp-article />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import to use ChildComponent and CompArticle as local component
import ChildComponent from './components/ChildComponent'
import CompArticle from './components/CompArticle'


export default {
  name: 'App',
  /*
  ,components: {
    HelloWorld
  }
  */
 //registering local component
  components: {
    'child-component': ChildComponent,
    'comp-article': CompArticle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
