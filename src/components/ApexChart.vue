<template>
  <div>
      <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
Vue.component(apexchart)
export default {

}
</script>

<style>

</style>