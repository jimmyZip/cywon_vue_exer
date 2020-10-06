<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li><router-link to="/admin/list">제품 리스트(Product List)</router-link> |</li>
      <li><router-link to="/admin/insert">제품 추가(New Product)</router-link> |</li>
    </ul>
    <!-- children route -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Admin 페이지'
    }
  },
  //navigation guard 추가
  //beforeRouteEnter()
  /*
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter : '+'to : ', to, 'from : ', from);
    //next();
    //next(false);//console출력은 그대로지만 페이지 이동은 하지 않음
    //next(url)
    //next('/login');//Admin을 클릭하면 console 출력은 동일하지만 Admin페이지가 아닌 Login페이지로 리다이렉트
    //next(object)
    next({name:'login',params: {id:'jimmy',pw:'1234'}});
  }
  */
  //beforeRouteUpdate()
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate : '+'to : ', to, ' from : ', from);
    next();
  }
}
</script>
<style scoped>
  li {
    display: inline-inline-block;
    padding: 5px;
  }
  li a {
    font-weight: bold;
    color: black;
  }
</style>
