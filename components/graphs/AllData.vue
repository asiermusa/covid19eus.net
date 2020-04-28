<template>
    <v-container>

      <v-row>

        <v-col cols="12">
          <apexchart v-if="this.options.xaxis.categories.length" height="500" :options="options" :series="series"></apexchart>
        </v-col>

      </v-row>

    </v-container>

</template>

<script>
  export default{
    props: [
      'graphData'
    ],
    created() {
      this._getData()
    },
    data(){
      return{
        ready: false,
        series: [{
          name: 'Positiboak',
          data: [],
          type: 'column'
        },  {
          name: 'Ospitaleratuak',
          data: [],
          type: 'column'
        },
        {
          name: 'Hildakoak',
          data: [],
          type: 'line'
        },
        {
          name: 'Altak',
          data: [],
          type: 'line'
        }],
        options: {

          colors: ["#092245", "#ddde9a", "#ff5252", '#3c9052'],
          chart: {
            height: 400,
            type: 'line',
            stacked: false,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '70%',
            },
          },
          stroke: {
            width: [0,0,3,3],
            curve: 'smooth',
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
              legend: {
                fontSize: '8px',
              },
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
                fontSize: '8px',
              }
            }
          },
          yaxis: [{
            seriesName: 'Positiboak',
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
            },
            labels: {
              style: {
                 colors: '#c5dbeb',
                fontSize: '10px',
              }
            },
            title: {
              text: "Positibo eta ospitaleratuak"
            }
          },
          {
            seriesName: 'Positiboak',
            show: false
          }, {
            opposite: true,
            seriesName: 'Hildakoak',
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
            },
            labels: {
              style: {
                colors: '#c5dbeb',
                fontSize: '10px',
              }
            },
            title: {
              text: "Hildakoak eta altak"
            }
          },
          {
            seriesName: 'Hildakoak',
            show: false
          }
        ],
      },
    }
  },
  methods: {
    _getData(){
      this.series[0].data = this.graphData.series[0].data.reverse()
      this.series[1].data = this.graphData.series[1].data.reverse()
      this.series[2].data = this.graphData.series[2].data.reverse()
      this.series[3].data = this.graphData.series[3].data.reverse()
      this.series[0].name = this.$t('sections.egunezGraph.positiboak')
      this.series[1].name = this.$t('sections.egunezGraph.ospitaleratuak')
      this.series[2].name = this.$t('sections.egunezGraph.hildakoak')
      this.series[3].name = this.$t('sections.egunezGraph.altak')
      this.options.yaxis[0].title.text = this.$t('sections.egunezGraph.yaxis1')
      this.options.yaxis[2].title.text = this.$t('sections.egunezGraph.yaxis2')
      this.options.xaxis.categories = this.graphData.options.xaxis.categories.reverse()

      //yaxis
      this.options.yaxis[0].seriesName = this.$t('sections.egunezGraph.positiboak')
      this.options.yaxis[1].seriesName = this.$t('sections.egunezGraph.positiboak')
      this.options.yaxis[2].seriesName = this.$t('sections.egunezGraph.hildakoak')
      this.options.yaxis[3].seriesName = this.$t('sections.egunezGraph.hildakoak')
    }
  }
}
</script>
