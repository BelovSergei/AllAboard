<template>
  <v-img aspect-ratio="16:9" :src="require('@/assets/TeslaFront/tesla0.jpg')">
    <v-container
      class="grid-list-md grid-list-xs fill-height ma-0 pa-0 align-start "
      id="intro"
    >
      <v-row class="align-center text-center justify-center mx-auto">
        <v-col class="text-md-center text-center">
          <v-img
            class="ma-auto imgSize"
            :src="require('@/assets/logo_transparent.png')"
          />
          <v-col class="display-1 text-color-subtitle hidden-xs-only"
            >Your Tesla parts distributor</v-col
          >
          <v-col class="title text-color-subtitle hidden-sm-and-up"
            >Your Tesla parts distributor</v-col
          >
        </v-col>
      </v-row>
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

.imgSize {
  height: 210px;
  width: 500px;
}

@media only screen and (max-width: 600) {
  .imgSize {
    height: 75px;
    width: 200px;
  }
}
</style>
