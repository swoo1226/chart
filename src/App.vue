<template>
  <div id="app">
    <apexchart width="550" type="bar" :options="chartOptions" :series="series"></apexchart>
     <div>
       <button @click="updateChart">Update!</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 81]
          },
          {
          name: 'series-2',
          data: [2,19,34,75,12,45,65,22]
          },
        ],
      }
    },
    methods: {
      updateChart() {
        const max = 90;
        const min = 20;
        let i = 0;
        while(i < this.series.length) {
          this.series[i].data = this.series[i].data.map(() => {
            return Math.floor(Math.random() * (max - min + 1)) + min
          })
          i++;
        }
        let colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
        // let shuffledColors = this._.shuffle(colors)
        // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
        this.chartOptions = {
          colors: colors
        };
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
