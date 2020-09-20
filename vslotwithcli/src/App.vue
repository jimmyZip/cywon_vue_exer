<template>
  <div id="app">
    <travel-list v-slot="{ items }" :items="cities">
    <!-- 단축형 -->
    <!-- <travel-list #default="{ items }" :items="cities"> -->
      <p v-for="item in items" :key="item">
        {{ item }}
      </p>
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
