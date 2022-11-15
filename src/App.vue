<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from "./components/SiteMain.vue";
import LoadingMessage from "./components/LoadingMessage.vue"

import { store } from './store.js';
import axios from 'axios'

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    LoadingMessage
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          this.store.characters = response.data
        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
    console.log(this.store)
  }
}

</script>

<template>

  <div v-if="store.characters.length === 62">

    <SiteHeader />

    <SiteMain />

  </div>

  <div v-else>

    <LoadingMessage :defaultMessage="store.defaultMessage" />


  </div>



</template>

<style lang="scss" scoped>

</style>
