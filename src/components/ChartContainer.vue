<template>
  <div class="container">
      <line-chart
        v-if="loaded"
        :chartdata="chartdata"
        :options="options"/>
  </div>
</template>

<script>
//차트 컴포넌트가 렌더되기 전에, 컨테이너 격의 컴포넌트에서 필요한 정보를 fetch
//async를 사용하여, 필요한 정보가 모두 돌아온 뒤, 정보를 props로 차트 컴포넌트에 넘긴다.
//넘겨진 정보를 통하여 차트를 그린다.
import LineChart from './Chart.vue'

export default {
    name: 'LineChartContainer',
    components: { LineChart },
    data: () => ({
        loaded: false,
        chartdata: null
    }),
    async mounted () {
        this.loaded = false
        try {
            const { userlist } = await fetch('/api/userlist')
            this.chartdata = userlist
            this.loaded = true
        } catch (e) {
            console.error(e)
        }
    }
}
</script>

<style>

</style>