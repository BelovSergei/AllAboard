<template>
  <v-img aspect-ratio="16:9" :src="require('@/assets/TeslaFront/tesla0.jpg')">
    <v-container grid-list-md fill-height fluid ma-0 pa-0 id="intro">
      <v-layout column align-center justify-center ma-12 pt-12>
        <v-flex xs12 text-md-center text-xs-center text-sm-center>
          <!-- <v-flex display-3 text-color-title font-weight-bold bold>All Aboard</v-flex> -->
            <v-img height="200px" width="450px" :src="require('@/assets/logo_transparent.png')" />
          <v-flex display-1 text-color-subtitle>Your Tesla parts distributor</v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style>
#intro {
  min-height: 100vh;
  min-width: 100vw;
}

img {
  height: 100%;
  width: 100%;
}

.text-color-title {
  color: white;
}

.text-color-subtitle {
  color: rgb(214, 214, 214);
}
</style>
