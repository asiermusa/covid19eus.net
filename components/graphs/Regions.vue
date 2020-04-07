<template>
    <v-container>

      <v-row>

        <v-col cols="12" md="6">
          <apexchart type="bar" height="400" :options="columns.options" :series="columns.series"></apexchart>
        </v-col>

        <v-col cols="12" md="6">
            <apexchart type="line" height="400" :options="lines.options" :series="lines.series"></apexchart>
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
        totalRegion: [],
        //regions charts (1)
        columns: {
          series: [{
            name: 'Bizkaia',
            data: []
          }, {
            name: 'Araba',
            data: []
          }, {
            name: 'Gipuzkoa',
            data: []
          }],
          options: {
            colors: ["#34538a", "#ddde9a", "#7b2f5d"],
            labels: [],
            chart: {
              type: 'bar',
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '70%',
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 0,
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
          }
        },

        lines: {
          series: [{
            name: 'Bizkaia',
            data: []
          }, {
            name: 'Araba',
            data: []
          }, {
            name: 'Gipuzkoa',
            data: []
          }],
          options: {
            colors: ["#476db0", "#ddde9a", "#7b2f5d"],
            labels: [],
            chart: {
              type: 'line',
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 3,
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
          }
        }
    }
  },
  methods: {
    async _getData(){
      let type = this.columns
      this.graphData.filter((res, index) => {
        if(index == 1) type = this.lines

        type.series[0].data = res.series[0].data.reverse()
        type.series[1].data = res.series[1].data.reverse()
        type.series[2].data = res.series[2].data.reverse()
        type.options.xaxis.categories = res.options.xaxis.categories.reverse()

      })
    }
  }
}
</script>
