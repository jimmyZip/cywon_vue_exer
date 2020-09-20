<template>
  <div id="app">
    <travel-list :items="cities">
      <!--
      단순히 자식컴포넌트에서 부모컴포넌트로 데이터 전달 버전
      <template slot-scope="{ childitems }">
      -->
      <template slot-scope="{ items }">
        <!--
        단순히 자식컴포넌트에서 부모컴포넌트로 데이터 전달 버전
        <p v-for="item in childitems" :key="item">
        -->
        <p v-for="item in items" :key="item">
          {{ item }}
        </p>
      </template>
    </travel-list>
  </div>
</template>

<script>
import TravelList from './components/TravelList'

export default {
  name: 'App',
  components: {
    TravelList
  },
  data() {
    return {
      cities: ['Paris','Budapest','Seattle','Vancouver','Prague']
    }
  }
}
</script>

<style>

</style>
