import Vue from 'vue'
import App from './App.vue'
import {Bar} from 'vue-chartjs'

Vue.config.productionTip = false
export default {
  extends: Bar,
}
new Vue({
  render: h => h(App),
}).$mount('#app')
