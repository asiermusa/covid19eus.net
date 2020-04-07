<template>
  <div>

    <!-- TASA -->
    <div v-if="type == 'tasa'">

      {{ data1 }}%

      <div v-if="!negative">

        <p>Aurreko egunean baino <span>{{parseFloat(diff).toFixed(1)}}%</span> gehiago <v-icon color="error">mdi-menu-up</v-icon></p>

      </div>

      <div v-else>

        <p>Aurreko egunean baino <span>{{parseFloat(diff).toFixed(1)}}%</span> gutxiago <v-icon color="success">mdi-menu-down</v-icon></p>

      </div>

    </div>
    <!-- TASA -->


    <!-- POSITIBOAK -->
    <div v-else-if="type == 'positiboak'">

      <number
        :to="data1"
        :duration="3"
        easing="Power1.easeOut"/>

        <p>Aurreko egunean baino <span>
          <number
          ref="number2"
          :to="data2"
          :duration="3"
          easing="Power1.easeOut"/>
        </span> gehiago
          <v-icon color="success" v-if="inverse">mdi-menu-up</v-icon>
          <v-icon color="error" v-else>mdi-menu-up</v-icon>
        </p>

    </div>
    <!-- POSITIBOAK -->


    <!-- BESTEAK -->
    <div v-else>
      <number
        v-if="type != 'hildakoak' && type != 'tasa'"
        :to="data1"
        :duration="3"
        easing="Power1.easeOut"/>

      <div v-if="!negative">

        <p>Aurreko egunean baino <span>
          <number
          ref="number2"
          :to="diff"
          :duration="3"
          easing="Power1.easeOut"/>
        </span> gehiago
          <v-icon color="success" v-if="inverse">mdi-menu-up</v-icon>
          <v-icon color="error" v-else>mdi-menu-up</v-icon>
        </p>
      </div>

      <div v-else>

        <p>Aurreko egunean baino <span>
          <number
          ref="number2"
          :to="diff"
          :duration="3"
          easing="Power1.easeOut"/>
        </span> gutxiago
        <v-icon color="error" v-if="inverse == true">mdi-menu-up</v-icon>
        <v-icon color="success" v-else>mdi-menu-down</v-icon>
      </p>

      </div>

    </div>
    <!-- BESTEAK -->

  </div>
</template>

<script>
  export default {
    props: [
      'data1',
      'data2',
      'type',
      'inverse'
    ],
    data(){
      return {
        diff: 0,
        negative: false
      }
    },
    created(){
      var total = 0
      total = this.data1 - this.data2
      if(total < 0){
        this.diff = Math.abs(total)
        this.negative = true
      }else{
        this.diff = total
      }
    }
  }
</script>
