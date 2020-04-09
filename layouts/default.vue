<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      right
      color="white"
      class="pa-8 mt-15">

      <div>
        <p class="text-left" style="color: #3f3f3f">
          {{ $t('nav.mainText1') }}
        </p>
        <v-divider class="my-4"></v-divider>
        <p class="text-left" style="color: #3f3f3f">
          {{ $t('nav.mainText2') }}
        </p>
      </div>

      <template v-slot:append>
        <div class="py-2" style="color: #ababab;">
          <p class="text-left">
            <v-icon style="font-size: 20px">mdi-github</v-icon>
            {{ $t('nav.code') }} <a href="https://github.com/asiermusa/covid19eus.net" target="_blank" style="font-weight: bold;">{{ $t('nav.codeLink') }}</a>
          </p>
          <p class="text-left">
            <v-icon style="font-size: 20px">mdi-email</v-icon> asiermusa@gmail.com
          </p>
        </div>
      </template>

    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      flat
      color="transparent"
      dark>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />

      <v-spacer></v-spacer>

      <nuxt-link
        class="langs"
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">
          <v-btn icon>{{ locale.name }}</v-btn>
      </nuxt-link>

    </v-app-bar>
    <v-content>

      <!-- css background effect -->
      <div class="background">
        <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </div>
      <!-- css background effect -->

      <!-- page content -->
      <nuxt />

    </v-content>

    <v-footer
      app
      color="secondary"
      dark
      class="mt-8"
      padless>

      <v-container>
        <v-row class="py-0">
          <v-col cols="12" class="py-0">
           <p class="text-center font-weight-light pa-0" style="padding: 0; font-size: 13px">
              {{ $t('footer.credits') }}
           </p>
        </v-col>
      </v-row>
    </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      collapseOnScroll: true,
      clipped: false,
      drawer: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      title: 'COVID-19 EUS'
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss">

html, body {
  overflow-x: hidden;
}
.background{
  position: fixed;
  display: flex;
  top: 0;
  height: 100vh;
  width: 100%;
}

.context {
  width: 100%;
  position: absolute;
  top:50vh;
}

.context h1{
  text-align: center;
  color: #fff;
  font-size: 50px;
}

.area{
  background: #4ea6e4;
  background-image: linear-gradient(60deg, #4ea6e4, #033064);
  width: 100%;
  height:100vh;
}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.v-navigation-drawer {
  background: white;
}

.v-toolbar__title {
  font-weight: bolder !important;
}

.smaller {
  font-size: 11px;
  color: rgba(#092245, .6);
}

.v-footer {
  position: relative !important;
}

.langs {
  text-decoration: none;
  font-size: 16px;
}
</style>
