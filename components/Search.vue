<template>
  <div>

    <!-- SINGLE CHART LOADER -->
    <v-overlay :value="chartLoader">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <!-- SINGLE CHART LOADER -->

    <!-- SINGLE DIALOG READY... -->
    <v-dialog v-model="singleDialog" scrollable max-width="700px">
      <v-card>
        <div v-if="townData.length">
          <v-card-title class="small-title" v-if="townData.length">Positiboen bilakaera {{ townData[0].res.geoMunicipality.nameByLang.BASQUE}}(e)n</v-card-title>
          <single-town-chart :graph="graphData"></single-town-chart>
        </div>
      </v-card>
    </v-dialog>
    <!-- SINGLE DIALOG END... -->

    <!-- TOTAL LIST DIALOG -->
    <v-dialog v-model="totalListDialog" scrollable max-width="400px">
      <v-card>
        <v-card-title class="small-title">Positiboen zerrenda ({{lastUpdate}})</strong></v-card-title>
        <v-divider></v-divider>

        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Herria</th>
                <th class="text-left">Positiboak</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in backList[0]" v-if="towns && item.positiveCount > 0">
                <td>{{ item.geoMunicipality.nameByLang.BASQUE }}</td>
                <td><strong style="color: #ff5252">{{ item.positiveCount }}</strong></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-dialog>
    <!-- TOTAL LIST DIALOG -->


    <v-container class="py-0 my-0 towns">
      <v-row class="py-0 my-0">

        <!-- BACKLIST (places css effect...) -->
        <v-col cols="12" class="list-container">
          <ul class="places hidden-sm-and-down">
            <li v-for="(item, index) in backList[0]" v-if="index < 25">
              {{ item.geoMunicipality.nameByLang.BASQUE }}
            </li>
          </ul>
          <ul class="places hidden-md-and-up"></ul>
          <!-- BACKLIST (places css effect...) -->

          <!-- SEARCH FORM -->
          <div class="main-list">

            <v-col
              md="6"
              offset-md="3">

              <v-row>
                <v-col cols="12">
                  <v-card
                    dark
                    elevation='0'
                    color="transparent"
                    class="header">

                    <v-card-subtitle class="header-title pa-3">Herrikako bilaketa</v-card-subtitle>
                    <v-card-subtitle class="header-subtitle pa-0">Herri bakoitzean eman diren positiboak. Herriaren gainean klikatu dezakezu bilakaera osoa ikusteko.
                    Herri bat agertzen ez bada, positiborik ez duelako da.</v-card-subtitle>
                    </v-card>
                </v-col>
                <v-col
                  cols="8"
                  md="9">

                  <v-text-field
                    v-model="searchInput"
                    label="Bilaketa egin..."
                    solo
                    color="white"
                    height="52"></v-text-field>

                </v-col>

                <v-col
                  cols="4"
                  md="3">

                  <v-btn color="primary" block x-large @click="_search()">Bilatu</v-btn>

                </v-col>

              </v-row>

          <v-row>

            <v-col cols="12" class="m-0 py-0">
              <small v-if="towns" class="towns__notes">{{ towns.notes.BASQUE }}</small>
            </v-col>
            <v-col cols="12" class="list-container ma-0 py-0">
              <p class="towns__list-dialog">Herrien zerrenda oso ikusteko <span @click="totalListDialog = true">egin klik hemen</span></p>
            </v-col>

          </v-row>

        </v-col>

        </div>

        </v-col>

      </v-row>

    </v-container>
    <!-- SEARCH FORM -->



    <!-- SEARCH LIST  -->
    <v-container
      class="my-0 py-0 towns">

      <v-row class="my-0 py-0">
        <v-col>
          <v-list
          dense
          rounded
          color="transparent"
          width="100%"
          style="overflow-x: hidden; overflow-y: auto">

            <v-list-item-group color="primary">
              <v-list-item
                v-for="(item, index) in search"
                :key="index"
                center>

                  <v-list-item-content>
                    <v-list-item-title @click="_townData(item.geoMunicipality)">

                      {{item.geoMunicipality.nameByLang.BASQUE}}

                      <v-chip
                        class="ma-2 my-0"
                        color="error"
                        text-color="white"
                        small>

                        <number
                          ref="number2"
                          :to="item.positiveCount"
                          :duration="1"
                          easing="Power1.easeOut"/>
                      </v-chip>

                    </v-list-item-title>

                  </v-list-item-content>

                </v-list-item>

              </v-list-item-group>

            </v-list>

          </v-col>

        </v-row>
      </v-container>
      <!-- SEARCH LIST  -->

    </div>

</template>

<script>
import SingleTownChart from '~/components/graphs/SingleTown'

  export default{
    props: [
      'towns',
      'lastUpdate'
    ],
    components: {
      SingleTownChart
    },

    data(){
      return{
        totalListDialog: false,
        singleDialog: false,
        chartLoader: false,

        search: [],
        searchInput: '',

        backList: [],

        townData: [],

        graphData: {
          townSeries: [{
            name: 'Positiboak',
            data: [],
          }],
          townChartOptions: {
            xaxis: {
              categories: []
            }
          }
        }
      }
    },
    watch: {
      towns(val){
        this._backList()
      }
    },
    methods: {
      _search(){
        if(this.searchInput.length >= 3 ){
          this.search = []

          if(this.towns){
            this.towns.byDate.filter((e, index) => {
              if(index == 0){
                e.items.filter(res => {
                  if(res.positiveCount > 0 && res.geoMunicipality.nameByLang.BASQUE.toLowerCase().includes(this.searchInput.toLowerCase())){
                    this.search.push(res)
                  }
                })
              }
            })
          }
        }
      },
      _townData(val){ // e.oid
        if(this.towns){
          this.chartLoader = true
          this.townData = []
          this.graphData.townSeries[0].data = []
          this.graphData.townChartOptions.xaxis.categories = []

          setTimeout(() => {
            this.towns.byDate.filter(e => {

              e.items.filter(res => {

                let oid = 0
                // sometimes oid.id is empty...
                if(res.geoMunicipality.oid.id){
                  oid = res.geoMunicipality.oid.id
                }else{
                  oid = res.geoMunicipality.oid
                }

                let valOid = 0
                // sometimes oid.id is empty...
                if(val.oid.id){
                  valOid = val.oid.id
                }else{
                  valOid = val.oid
                }

                if(oid == valOid){
                  this.townData.push({'date': e.date, res})
                  this.graphData.townSeries[0].data.push(res.positiveCount)
                  this.graphData.townChartOptions.xaxis.categories.push(this._customDate(e.date))
                }
              })
            })

            setTimeout(() => {
              this.chartLoader = false
            }, 500)

            this.singleDialog = true

          }, 1000)
        }
      },
      _backList(){
        if(this.towns){
          this.towns.byDate.filter((e, index) => {
            if(index == 0) this.backList.push(e.items)
          })
        }
      },
      _customDate(date){
        var dt = new Date(date)

        var MyDateString = dt.getFullYear() + '/'
               + ('0' + (dt.getMonth()+1)).slice(-2) + '/'
               + ('0' + dt.getDate()).slice(-2)

        return MyDateString // 2020-03-31T22:00:00Z
      }
    }
  }
</script>

<style lang="scss">





.towns {

  // single list (search)
  .list-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-list {
    position: absolute;
    width: 100%;
  }

  .v-list-item {
    text-align: center;

    &__title{
      font-size: 16px !important;
      color: white !important;
      animation-name: listSingle;
      animation-duration: 5s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }
  }

  @keyframes listSingle {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(.8);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  // backlist (css effect)
  .places {
    position: relative;
    height: 300px;
    width: 100%;

    @for $i from 1 through 25 {
      $randomNumber: random(100);
      $duration: random(7) + 3;

      li:nth-child(#{$i}) {
        position: absolute;
        opacity: 0;
        list-style: none;
        text-transform: lowercase;
        animation-name: list;
        text-shadow: 0 0 12px #fff;
        color: white;
        left: #{1% * $randomNumber};
        top: #{1% * $randomNumber};
        animation-duration: #{$duration}s;
        animation-timing-function: ease-in-out;
        animation-delay: #{$duration}s;
        animation-iteration-count: infinite;
      }

    }
  }

  @keyframes list {
    0% {
      transform: scale(0);
      opacity: 0.3;
    }
    100% {
      transform: scale(5);
      opacity: 0;
    }
  }


  // notes
  &__notes {
    color: rgba(white, .6);
    display: block;
    text-align: center;
  }


  // towns dialog
  &__list-dialog {
    font-size: 15px;
    margin-top: 20px;
    color: rgba(#092245, .8);
    span {
      font-weight: bolder;
      cursor: pointer;
    }
  }
}

</style>
