<template>
  <v-app>
    <Header />
    <router-view />
    <Footer id="footer" />
  </v-app>
</template>

<script>
import Header from "./views/standard/Header";
import Footer from "./views/standard/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
<style>
#footer {
  min-width: 100vw;
  background: #181818;
}
</style>
