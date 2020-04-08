<template>
    <v-container>

      <v-row>

        <v-col cols="12">
          <apexchart v-if="this.graphData.options.xaxis.categories.length" height="500" :options="options" :series="series"></apexchart>
        </v-col>

      </v-row>

    </v-container>

</template>

<script>
  export default{
    props: [
      'graphData'
    ],
    created(){
      this._getData()
    },
    data(){
      return{
        series: [{
          name: 'Positiboak',
          data: [],
        }, {
          name: 'Hildakoak',
          data: []
        }],
        options: {

          colors: ["#28426f", "#b1262d"],
          stroke: {
            width: [1, 1]
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
          legend: {
            labels: {
              colors: '#c5dbeb',
              useSeriesColors: false
            },
            itemMargin: {
              horizontal: 10,
              vertical: 20
            },
          },
          grid: {
            show: true,
            borderColor: '#5a90b5',
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
                 colors: '#c5dbeb',
                fontSize: '11px',
              }
            }
          },
          yaxis: {
            labels: {
              style: {
                 colors: '#c5dbeb',
                 fontSize: '11px',
              }
            },
            axisTicks: {
              show: false,
            },
          }
        },

    }
  },
  methods: {
    _getData(){
      this.series[0].data = this.graphData.series[0].data.reverse()
      this.series[1].data = this.graphData.series[1].data.reverse()
      this.series[0].name = this.$t('sections.adinaGraph.positiboak')
      this.series[1].name = this.$t('sections.adinaGraph.hildakoak')
      this.options.xaxis.categories = this.graphData.options.xaxis.categories.reverse()
    }
  }
}
</script>
