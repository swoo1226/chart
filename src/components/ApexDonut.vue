<template>
  <div>
      <apexchart width="380" type="donut" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
    name: 'ApexDonut',
    data: function() {
        return {

            series: [41, 55, 41, 17, 15]
        }
    }
}
</script>

<style>

</style>