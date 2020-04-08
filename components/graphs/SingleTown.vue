<template>
  <div>
    <apexchart v-if="this.townSeries[0].data.length" type="area" height="350" width="95%" :options="townChartOptions" :series="townSeries"></apexchart>
  </div>
</template>

<script>
  export default{
    props: [
      'graph'
    ],
    created(){
      this.townSeries[0].data = this.graph.townSeries[0].data.reverse()
      this.townSeries[0].name = this.$t('sections.positiboak')
      this.townChartOptions.xaxis.categories = this.graph.townChartOptions.xaxis.categories.reverse()
    },
    data(){
      return{
        //single town chart
        townSeries: [{
          name: '',
          data: [],
        }],
        townChartOptions: {
          colors: ["#20bafc"],
          stroke: {
            width: 1
          },
          chart: {
            height: 400,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          tooltip: {
            enabled: true
          },
          legend: {
            labels: {
              colors: '#ccc',
              useSeriesColors: false
            },
          },
          grid: {
            show: true,
            borderColor: '#f2f2f2',
            strokeDashArray: 0,
            position: 'back'
          },
          responsive: [{
            breakpoint: 480,
            options: {
              xaxis: {
                labels: {
                  style: {
                    fontSize: '8px',
                  }
                }
              },
            }
          }],
          xaxis: {
            type: 'category',
            categories: [],
            labels: {
              style: {
                 colors: '#ccc',
                fontSize: '11px',
              }
            }
          },
          yaxis: {
            labels: {
              style: {
                 colors: '#ccc',
                 fontSize: '11px',
              }
            },
            axisTicks: {
              show: false,
            },
          }
        }
      }
    }
  }
</script>
