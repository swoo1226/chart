import Vue from 'vue'
import App from './App.vue'
import {Bar} from 'vue-chartjs'
import VueApexCharts from 'vue-apexcharts'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false
export default {
  extends: Bar,
}
new Vue({
  render: h => h(App),
}).$mount('#app')
