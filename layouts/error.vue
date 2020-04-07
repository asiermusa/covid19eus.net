<template>
  <v-app light>
    <v-container>
      <v-row>
        <v-col class="justify-center">
          <h1 v-if="error.statusCode === 500">
            Errore bat gertatu da...
          </h1>
          <h1 v-else>
            Errore bat gertatu da...
          </h1>
          <p>Ziurtatu ezazu internetara konexioa duzula.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
