<template lang="html">
  <div>
    <h3>Login 페이지</h3>
  </div>
</template>

<script>
export default {
  //beforeRouteEnter()
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter : '+'to : ', to, 'from : ',from);
    next();
  },
  //beforeRouteLeave()
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave : '+'to : ', to, 'from : ',from);
    next();
  },
  //Per-Route Guard beforeEnter()메서드가 컴포넌트보다 먼저 실행되는지 확인용
  created() {
    console.log('Login 컴포넌트 created');
  }
}
</script>

<style lang="css" scoped>
</style>
