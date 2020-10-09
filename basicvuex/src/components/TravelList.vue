<template lang="html">
  <div id="travel-list">
    <p>유럽여행</p>
    <ul>
      <li
        v-for="item in items"
        :key="item.attraction"
        @click="goCountry(item.country)"
      >
        <span>국가 : {{ item.country }}</span>&nbsp;
        <span>도시 : {{ item.city }}</span>&nbsp;
        <span>명소 : {{ item.attraction }}</span>&nbsp;
        <span>요금 : {{ item.entrance_fee | currency }}</span>
      </li>
    </ul>
    <!-- mutation 적용위해 추가 -->
    <button @click="reducePrice">특별 입장료 할인</button><br />
    <travellist-details></travellist-details>
  </div>
</template>

<script>
import TravelListDetails from './TravelListDetails'

export default {
  components: {
    'travellist-details': TravelListDetails
  },
  methods: {
    goCountry(inValue) {
      //this.$store.state.selectedCountry = inValue
      this.$store.commit('goCountry', inValue)
      console.log(inValue)
    },
    reducePrice() {
      // this.$store.state.items.forEach(item => {
      //   item.entrance_fee = (item.entrance_fee * 0.8)
      // });
      this.$store.commit('reducePrice')
    }
  },
  filters: {
    currency(value) { // 화폐 단위를 표시하기 위한 기능
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat 참조
    return new Intl.NumberFormat("de-DE", {style:'currency', currency: 'EUR'}).format(value)
    }
  },
  computed: {
    items() {
      //return this.$store.state.items
      //Vuex getters 적용
      return this.$store.getters.items
    }
  }
}
</script>

<style lang="css" scoped>
  #travel-list {
    color: #fff;
    background: #00f;
    padding: 10px 20px;
  }
  #travel-list ul {
    padding: 0;
    list-style-type: none;
  }
  #travel-list li {
    margin: 10px;
    padding: 20px;
    background: #1565c0;
  }
</style>
