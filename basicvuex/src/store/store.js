import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,//Vuex 상태가 mutation 핸들러 밖에서 변할 때 에러를 나타내며 모든 상태변화를 트래킹
  state: {
    items: [
      { country: "France", city: "Paris", attraction: "에펠탑", entrance_fee: 10 },
      { country: "Italy", city: "Venezia", attraction: "산마르코 대성당", entrance_fee: 0 },
      { country: "Aistroa", city: "Salzburg", attraction: "호엔잘츠부르크성", entrance_fee: 15.20 },
      { country: "Germany", city: "Frankfurt", attraction: "뢰머광장", entrance_fee: 0 },
      { country: "Netherland", city: "Amsterdam", attraction: "국립미술관", entrance_fee: 17.50 },
    ],
    selectedCountry: ''
  },
  //getters: {},
  //mutations: {},
  //actions: {}
})