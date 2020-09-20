<template>
  <div id="app">
    <child-com>
      <p>파리(Paris)에 가면 이른 저녁 에펠탑 구경을 추천한다.</p>
    </child-com>
  </div>
</template>

<script>
  import ChildCom from './components/Child'
  export default {
    name: 'app',
    components: {'child-com':ChildCom}
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
