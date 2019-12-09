<template>
  <v-container grid-list-xs ma-0 pa-0>
    <v-col class="align-center">
      <v-row class="align-center justify-center text-sm-center text-center md6">
        <v-col
          cols="12"
          md="1"
          sm="cols=12"
          class="md1 ma-0 mt-5 pa-0 sm12 cols12"
        >
          <v-icon color="white" size="90">mdi-magnify</v-icon>
        </v-col>
        <v-col cols="12" md="5">
          <v-col class="d-inline-flex cols12 headline text-color-title"
            >Search over 150,000 Tesla parts</v-col
          >
          <br />
          <v-col class="text-color-subtitle d-inline-flex">
            Find the right parts and products you need for your Tesla
            vehicle(s)!
          </v-col>
        </v-col>
        <div class="sm-12" cols="12">
          <v-btn color="orange" class="ma-2 sm-5">Search parts</v-btn>
          <v-btn color="orange" class="ma-2 sm-5">Search products</v-btn>
        </div>
      </v-row>
      <v-row class="row align-center justify-center">
        <div class="mb-5" cols="12">
          <span
            style="color: white; margin-right: 25px;"
            class="ma-5 sm12 cols12"
            sm="cols=12"
            cols="12"
            >Or browse by model:</span
          >
          <div cols="12" sm="cols=12">
            <v-btn color="grey" rounded>Model X</v-btn>
            <v-btn color="grey" rounded>Model S</v-btn>
            <v-btn color="grey" rounded>Model 3</v-btn>
            <v-btn color="grey" rounded>Roadster</v-btn>
          </div>
        </div>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.text-color-title {
  color: white;
}

.text-color-subtitle {
  color: rgb(214, 214, 214);
}

button {
  margin: 10px;
}
</style>
