import Vue from 'vue'
import App from './App.vue'
//vuetify가 모든 컴포넌트에서 사용되도록 추가됨
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
