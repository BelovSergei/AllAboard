<template>
  <v-container grid-list-xs ma-0 pa-0>
    <v-layout column wrap align-center>
      <v-layout
        row
        wrap
        align-center
        justify-center
        text-sm-center
        text-xs-center
      >
        <v-flex md1 ma-0 mt-5 pa-0 sm12 cols="12">
          <v-icon color="white" size="90">mdi-magnify</v-icon>
        </v-flex>
        <v-flex md5 sm12 mr-5 cols="12">
          <v-flex d-inline xs12 headline class="text-color-title"
            >Search over 150,000 Tesla parts</v-flex
          >
          <br />
          <v-flex d-inline cols="12" class="text-color-subtitle"
            >Find the right parts and products you need for your Tesla
            vehicle(s)!</v-flex
          >
        </v-flex>
        <div sm-12>
          <v-btn color="orange" class="ma-2 sm-5">Search parts</v-btn>
          <v-btn color="orange" class="ma-2 sm-5">Search products</v-btn>
        </div>
      </v-layout>
      <v-layout row wrap align-center>
        <div mb-5>
          <span style="color: white; margin-right: 25px;" ma-5 sm12 cols12
            >Or browse by model:</span
          >
          <v-btn color="grey" rounded>Model X</v-btn>
          <v-btn color="grey" rounded>Model S</v-btn>
          <v-btn color="grey" rounded>Model 3</v-btn>
          <v-btn color="grey" rounded>Roadster</v-btn>
        </div>
      </v-layout>
    </v-layout>
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
