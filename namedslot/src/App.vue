<template>
  <div id="app">
    <child-comp :ran_city="randomCity">
      <div slot="best">
        <figure>
          <img src="@/assets/imgs/vienna.jpg"/>
          <figcaption>비엔나(Vienna)</figcaption>
        </figure>
      </div>
      <div slot="footer">
        <footer>
          <p>&copy; All right reserved</p>
        </footer>
      </div>
    </child-comp>
  </div>
</template>

<script>
  import ChildComp from './components/ChildComp'
  export default {
    name: 'app',
    components: {'child-comp': ChildComp},
    data() {
      return {
        cities: [
          {cityname: 'paris', pic:require('@/assets/imgs/paris.jpg')},
          {cityname: 'amsterdam', pic:require('@/assets/imgs/amsterdam.jpg')},
          {cityname: 'dresden', pic:require('@/assets/imgs/dresden.jpg')}
        ]
      }
    },
    computed: {
      randomCity() {
        return this.cities[Math.floor(Math.random() * this.cities.length)]
      }
    }
  }

</script>

<style>

</style>
