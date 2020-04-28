<template>
  <div>

    <v-overlay :value="loader" color="#092245" opacity="1">
      <v-progress-circular color="white" indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-container>
      <v-row>
        <v-col cols="12" md="4">

        <v-card
          dark
          elevation='0'
          raised
          color="transparent">

          <!-- ANALISIAK -->
          <!-- <v-card-title class="card-title justify-center my-3">{{ $t('headers.analisiak') }}</v-card-title>
          <v-card-subtitle class="card-maindata justify-center" v-if="analisis">
            <difference :data1="analisis.total.totalCountEuskadi" :data2="totalRegion[0].totalCountEuskadi" type="positiboak"></difference>
          </v-card-subtitle> -->
          <!-- ANALISIAK -->

          <!-- HILDAKOAK -->
          <v-card-title class="card-title justify-center my-3">{{ $t('headers.positiboak') }}</v-card-title>
          <v-card-subtitle class="card-maindata justify-center" v-if="hildakoak">
            <difference :data1="hildakoak[0].total.positiveTotalCount" :data2="hildakoak[1].total.positiveTotalCount"></difference>
          </v-card-subtitle>
          <!-- HILDAKOAK -->

        </v-card>

      </v-col>

      <v-col cols="12" md="4">
        <v-card
          dark
          elevation='0'
          color="transparent">

          <!-- OSPITALERATUAK -->
          <v-card-title class="card-title justify-center my-3">{{ $t('headers.ospitaleratuak') }}</v-card-title>
          <v-card-subtitle class="card-maindata justify-center" v-if="ospitaleratuak">
            <difference :data1="ospitaleratuakCount[0].total.totalPeopleCount" :data2="ospitaleratuakCount[1].total.totalPeopleCount"></difference>

            <p>({{ $t('headers.uci.guztietatik') }}
              <strong>
              <number
              v-if="ospitaleratuakCount"
              :to="ospitaleratuakCount[0].total.icuPeopleCount"
              :duration="3"
              easing="Power1.easeOut"/>
            </strong> {{ $t('headers.uci.ucian') }})</p>

          </v-card-subtitle>
          <!-- OSPITALERATUAK -->

          <!-- ALTAN -->
          <v-card-title class="card-title justify-center my-3">{{ $t('headers.altan') }}</v-card-title>
          <v-card-subtitle class="card-maindata justify-center" v-if="ospitaleratuak">
            <difference :data1="altakCount" :data2="altakCountDiff + ospitaleratuakCount[1].total.releasedPeopleCount" type="alta" inverse="true"></difference>
          </v-card-subtitle>
          <!-- ALTAN -->

        </v-card>

      </v-col>

      <v-col cols="12" md="4">
        <v-card
          dark
          elevation='0'
          color="transparent">

          <!-- HILDAKOAK -->
          <v-card-subtitle class="card-maindata justify-center my-3" v-if="hildakoak">
            <v-chip
              class="ma-2 my-0"
              color="error"
              text-color="white"
              large>

              {{ $t('headers.hildakoak') }}
              <span style="margin-left: 10px;">
                <number
                  ref="number2"
                  :to="hildakoak[0].total.deathCount"
                  :duration="3"
                  easing="Power1.easeOut"/>
              </span>

            </v-chip>

            <difference :data1="hildakoak[0].total.deathCount" :data2="hildakoak[1].total.deathCount" type="hildakoak"></difference>
          </v-card-subtitle>
          <!-- HILDAKOAK -->

          <!-- HERIOTZA TASA -->
          <v-card-title class="card-title justify-center my-3">{{ $t('headers.heriotzaTasa') }} %</v-card-title>
          <v-card-subtitle class="card-maindata justify-center" v-if="hildakoak">
            <difference :data1="hildakoak[0].total.totalLethalityRate" :data2="hildakoak[1].total.totalLethalityRate" type="tasa"></difference>
          </v-card-subtitle>
          <!-- HERIOTZA TASA -->

        </v-card>

      </v-col>
    </v-row>
  </v-container>



  <!-- BILATZAILEA (formu, towns window, towns list...) -->
  <search :towns="herriak" :lastUpdate="lastUpdate"></search>


  <!-- LURRALDEKA -->
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-card
          dark
          elevation='0'
          color="transparent"
          class="header mt-10">
          <v-card-subtitle class="header-title pa-3">{{ $t('sections.lurraldeka') }}</v-card-subtitle>
          <v-card-subtitle class="header-subtitle pa-0">{{ $t('sections.lurraldekaText') }}</v-card-subtitle>
        </v-card>
      </v-col>

      <!-- REGIONS CHART -->
      <regions :graphData="[regions1, regions2]" v-if="regions2.series[0].data.length"></regions>

    </v-row>
  </v-container>
  <!-- LURRALDEKA -->


  <!-- OSPITALEAN -->
  <v-container>
    <v-row>
      <v-col
      cols="12"
      md="8"
      offset-md="2">
        <v-card
          dark
          elevation='0'
          color="transparent"
          class="header mt-10">
          <v-card-subtitle class="header-title pa-3">{{ $t('sections.ospitaleratuak') }}</v-card-subtitle>
          <v-card-subtitle class="header-subtitle pa-0">{{ $t('sections.ospitaleratuakText') }}</v-card-subtitle>
        </v-card>

        <!-- HOSPITAL CHART -->
        <hospital :graphData="hospital" v-if="hospital.series[0].data.length"></hospital>

      </v-col>
    </v-row>
  </v-container>
  <!-- OSPITALEAN -->




  <!-- ADINAREN ARABERA -->
  <v-container>
    <v-row>
      <v-col
      cols="12"
      md="8"
      offset-md="2">

        <v-card
          dark
          elevation='0'
          color="transparent"
          class="header mt-10">

          <v-card-subtitle class="header-title pa-3">{{ $t('sections.adinarenArabera') }}</v-card-subtitle>
          <v-card-subtitle class="header-subtitle pa-0">{{ $t('sections.adinarenAraberaText') }}</v-card-subtitle>
            <small class="header-notes" style="margin: 15px 0;">{{ $t('sections.hildakoakNotes') }}</small>
          </v-card>

          <!-- BY YEARS CHART -->
          <by-years :graphData="byYears"></by-years>

        </v-col>
      </v-row>
    </v-container>
    <!-- ADINAREN ARABERA -->


    <!-- EGUNEZ-EGUN -->
    <v-container>
      <v-row>
        <v-col
        cols="12"
        md="8"
        offset-md="2">
          <v-card
            dark
            elevation='0'
            color="transparent"
            class="header mt-10">
            <v-card-subtitle class="header-title pa-3">{{ $t('sections.egunezEgunekoa') }}</v-card-subtitle>
            <v-card-subtitle class="header-subtitle pa-0">{{ $t('sections.egunezEgunekoaText') }}</v-card-subtitle>
            <small class="header-notes" style="margin: 15px 0;">{{ $t('sections.herriakNotes') }}</small>
          </v-card>
        </v-col>

        <v-col
        cols="12"
        md="8"
        offset-md="2"
        class="pa-0">

        <!-- ALL DATA CHART -->
        <all-data :graphData="allData" v-if="allData.series[0].data.length"></all-data>
      </v-col>
      </v-row>
    </v-container>
    <!-- EGUNEZ-EGUN -->

    <!-- SNACK BAR -->
    <v-snackbar
      v-model="snackbar"
      color="primary">

      {{ $t('snackbar.text') }} {{ lastUpdate }}
      <v-btn
        color="secondary"
        light
        @click="snackbar = false">
        {{ $t('snackbar.close') }}
      </v-btn>
    </v-snackbar>

  </div>
</template>

<script>
import Difference from '~/components/Difference'
import Search from '~/components/Search'
import Regions from '~/components/graphs/Regions'
import Hospital from '~/components/graphs/Hospital'
import ByYears from '~/components/graphs/ByYears'
import AllData from '~/components/graphs/AllData'

export default {
  components: {
    Difference,
    Search,
    Regions,
    Hospital,
    ByYears,
    AllData
  },
  head() {
    return {
      title: this.$t('seo.title') + ' | ' +this.$t('seo.desc'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.desc')
        }
      ]
    }
  },
  data(){
    return {
      overlay: true,
      snackbar: false,
      lastUpdate: false,
      snackbar: false,
      loader: true,
      herriak: null,
      ospitaleratuak: null,
      hildakoak: null,
      analisis: null,
      analisisReverse: [],
      herriDatuak: [],
      ospitaleratuakCount: [],
      altakCount: 0,
      altakCountDiff: 0,
      totalRegion: [],
      herriakComputed: [],

      // Charts
      regions1: {
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
          xaxis: {
            categories: []
          }
        }
      },
      regions2: {
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
          xaxis: {
            categories: []
          }
        }
      },
      hospital: {
        series: [{
          name: 'Plantan',
          data: [],
        }, {
          name: 'UCIan',
          data: []
        }],
        options: {
          xaxis: {
            categories: []
          }
        }
      },
      byYears: {
        series: [{
          name: 'Positiboak',
          data: [],
        }, {
          name: 'Hildakoak',
          data: []
        }],
        options: {
          xaxis: {
            categories: [],
          }
        }
      },
      allData: {
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
          xaxis: {
            categories: []
        },
      }
      }
    }
  },
  async created(){
    this._getData()
  },
  watch: {
    herriak(val){
      // NOTHING TO DO
    },
    ospitaleratuak(val){
      this._hospitalsCount()
    },
    hildakoak(val){
      //main chart (allChart)
      this._getAllChart()
    },
    analisis(val){
      this.loader = false
      //this._getRegions()
    },

    // Get the towns/city names from JSON
    herriakComputed(val){
      //
      var townsArray = this.herriakComputed
      this.herriak.byDate.filter((res, index) => {
        if(index == 0){
          return res.items.map(res2 => {
            if(res2.positiveCount > 0){
              return townsArray.filter((res3, index) => {

                let oid = 0
                // sometimes oid.id is empty...
                if(res2.geoMunicipality.oid.id){
                  oid = res2.geoMunicipality.oid.id
                }else{
                  oid = res2.geoMunicipality.oid
                }

                if(oid == res3.territorycode.slice(0,2) + '' + res3.municipalitycode.slice(0,3)){
                  // change the name of de city

                  //DONOSTIA
                  if(oid == '20069'){
                    res2.geoMunicipality.nameByLang.BASQUE = 'Donostia'
                  }else{
                    res2.geoMunicipality.nameByLang.BASQUE = res3.documentName
                  }
                }

              })
            }
          })
        }
      })

    }
  },
  methods: {
    //return formatted date
    _customDate(date){
      var dt = new Date(date)

      var MyDateString = dt.getFullYear() + '/'
             + ('0' + (dt.getMonth()+1)).slice(-2) + '/'
             + ('0' + dt.getDate()).slice(-2)

      return MyDateString // 2020-03-31T22:00:00Z
    },

    // total people count (hospitals)
    _hospitalsCount(){
      if(this.ospitaleratuak){
        var response = [],
          altak = 0,
          altakDiff = 0

        this.ospitaleratuak.byDate.map(e => {
          var floorPeopleCount = 0,
            icuPeopleCount = 0,
            totalPeopleCount = 0,
            icuReleasedPeopleCount = 0,
            releasedPeopleCount = 0

            e.items.filter((res, index) => {

              if(res.floorPeopleCount > 0)
                floorPeopleCount = floorPeopleCount + res.floorPeopleCount
              if(res.icuPeopleCount > 0)
                icuPeopleCount = icuPeopleCount + res.icuPeopleCount

              if(res.totalPeopleCount > 0)
                totalPeopleCount = totalPeopleCount + res.totalPeopleCount

              if(res.icuReleasedPeopleCount > 0)
                icuReleasedPeopleCount = icuReleasedPeopleCount + res.icuReleasedPeopleCount

              if(res.releasedPeopleCount > 0){
                releasedPeopleCount = releasedPeopleCount + res.releasedPeopleCount
                altak = altak + res.releasedPeopleCount //icuReleadedpeople removed
                if(index != 0) altakDiff = altakDiff + res.releasedPeopleCount
              }
            })

            response.push({'date' : this._customDate(e.date), 'total': {
              'floorPeopleCount' : floorPeopleCount,
              'icuPeopleCount': icuPeopleCount,
              'totalPeopleCount': totalPeopleCount,
              'icuReleasedPeopleCount': icuReleasedPeopleCount,
              'releasedPeopleCount': releasedPeopleCount
            }})

            this.ospitaleratuakCount = response
            this.hospital.series[0].data.push(floorPeopleCount)
            this.hospital.series[1].data.push(icuPeopleCount)
            this.hospital.options.xaxis.categories.push(this._customDate(e.date))
        })
        this.altakCount = altak
        this.altakCountDiff = altakDiff
      }
    },

    // get regions data
    _getRegions(){
      if(this.analisis){
        let i = 0,
          bi = 0,
          biTotal = [],
          ar = 0,
          arTotal = [],
          gi = 0,
          giTotal = [],
          dates = [],
          biTotal10000 = [],
          arTotal10000 = [],
          giTotal10000 = [],
          reversedArray = this.analisis.byDate

        reversedArray.reverse()

        reversedArray.filter(e => {

            bi = bi + e.positiveCountBizkaia
            ar = ar + e.positiveCountAraba
            gi = gi + e.positiveCountGipuzkoa
            this.totalRegion.push({
              'date': this._customDate(e.date),
              'prob': {bi, ar, gi},
              'positiveCountEuskadi': e.positiveCountEuskadi,
              'totalCountEuskadi': e.totalCountEuskadi
            })
        })

        this.totalRegion.reverse().filter((e, index) => {
          if(index <= 9){
            biTotal.push(e.prob.bi)
            arTotal.push(e.prob.ar)
            giTotal.push(e.prob.gi)
            dates.push(e.date)

            biTotal10000.push(parseFloat(10000*e.prob.bi/1135000).toFixed(2))
            arTotal10000.push(parseFloat(10000*e.prob.ar/325739).toFixed(2))
            giTotal10000.push(parseFloat(10000*e.prob.gi/710281).toFixed(2))
          }
        })

        this.regions1.series[0].data = biTotal
        this.regions1.series[1].data = arTotal
        this.regions1.series[2].data = giTotal
        this.regions1.options.xaxis.categories = dates.reverse()

        this.regions2.series[0].data = biTotal10000
        this.regions2.series[1].data = arTotal10000
        this.regions2.series[2].data = giTotal10000
        this.regions2.options.xaxis.categories = dates
      }
    },

    // main chart data ALL DATA
    _getAllChart(){
      if(this.hildakoak){
        this.hildakoak.filter((e, index) => {
          if(index == 0){
            e.items.filter((res, j) => {
              this.byYears.series[0].data.push(res.positiveTotalCount)
              this.byYears.series[1].data.push(res.deathTotalCount)
              if(j != 9){
                this.byYears.options.xaxis.categories.push(res.ageRange.slice(0, -5).concat(this.$t('sections.adinaGraph.urte')))
              }else{
                this.byYears.options.xaxis.categories.push(res.ageRange.slice(0, -11).concat(this.$t('sections.adinaGraph.urteGehiago')))
              }
            })
          }
        })
        this.hildakoak.filter(e => {
          this.allData.series[0].data.push(e.total.positiveTotalCount)
          this.allData.series[2].data.push(e.total.deathCount)
        })
        if(this.ospitaleratuakCount){
          this.ospitaleratuakCount.filter(osp => {
            this.allData.series[1].data.push(osp.total.totalPeopleCount)
            this.allData.series[3].data.push(osp.total.releasedPeopleCount)
            this.allData.options.xaxis.categories.push(this._customDate(osp.date))
          })
        }
      }
    },
    async _getData(){

      //get all data
      var herriak = await this.$axios.$get('https://opendata.euskadi.eus/contenidos/ds_informes_estudios/covid_19_2020/opendata/aggregated/json/udalerriak-municipios.json')
      this.herriak = herriak

      var ospitaleratuak = await this.$axios.$get('https://opendata.euskadi.eus/contenidos/ds_informes_estudios/covid_19_2020/opendata/aggregated/json/ospitaleratuak-hospitalizados.json')
      this.ospitaleratuak = ospitaleratuak

      var hildakoak = await this.$axios.$get('https://opendata.euskadi.eus/contenidos/ds_informes_estudios/covid_19_2020/opendata/aggregated/json/hildakoak-fallecidos.json')
      this.hildakoak = hildakoak.byDate

      var analisis = await this.$axios.$get('https://opendata.euskadi.eus/contenidos/ds_informes_estudios/covid_19_2020/opendata/aggregated/json/analisiak-analisis.json')
      this.analisis = analisis
      this.analisisReverse = analisis.byDate.reverse()

      var herriakComputed = await this.$axios.$get('https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/pueblos_euskadi_turismo/opendata/pueblos.json')
      this.herriakComputed = herriakComputed.slice(13,-2)
      this.herriakComputed = JSON.parse(this.herriakComputed)

      this.lastUpdate = this._customDate(this.herriak.lastUpdateDate)
      this.snackbar = true
    }
  }
}
</script>

<style lang="scss">

$color: #4ea6e4;
$blue: #092245;
$yellow: #f7cc5c;
$turkish: #138484;

// cards styles override
.card-title {
  font-size: 16px !important;
  text-transform:uppercase !important;
  letter-spacing: 1px !important;
  font-weight: 300 !important;
}

.small-title {
  font-size: 13px !important;
  overflow: hidden;
  white-space: nowrap;
}

.card-maindata {
  font-size: 28px !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  font-weight: 900 !important;
  text-align: center;

  p{
    font-size: 13px !important;
    color: rgba(white, .7) !important;
    text-transform: none !important;
    font-weight: 300 !important;
    margin: 10px 0;
    span {
      font-weight: 900;
    }
  }
}

// main headers
.header {
  &-title {
    font-size: 22px !important;
    line-height: 30px !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    font-weight: 300 !important;
    text-align: center;
  }
  &-subtitle {
    font-size: 14px !important;
    text-align: center;
  }
  &-notes {
    color: rgba(white, .6);
    display: block;
    text-align: center;
  }
}

// graphs options disabled
.apexcharts-toolbar {
  display: none !important;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none;
}
</style>
