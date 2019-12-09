<template>
  <v-container grid-list-xs ma-0 pa-0>
    <v-row class="column wrap align-center">
      <v-row class="align-center justify-center">
        <v-col class="ma-2" cols="12" sm="10" md="5">
          <v-card elevation-20 height="100%">
            <v-col cols="12" class="offset-md-2 offset-sm-1">
              <v-col cols="10" md="5" class="headline mb-5 mt-5"
                >Free text</v-col
              >
              <v-col cols="10" class="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis beatae dolorem earum dolorum quae optio magni
                voluptates excepturi, architecto sint minima fuga voluptatibus,
                aut ipsam enim ex praesentium reiciendis nesciunt!
              </v-col>
              <v-btn color="black" style="color: white" class="margin-button"
                >CTA text</v-btn
              >
            </v-col>
          </v-card>
        </v-col>
        <v-col class="ma-2" cols="12" md="5" sm="10">
          <v-card class="elevation-20" height="100%">
            <v-img
              max-height="280px"
              min-height="280px"
              aspect-ratio="16:9"
              :src="require('@/assets/TeslaFront/part0.png')"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
      <!-- new row -->
      <v-row class="justify-center">
        <v-col class="ma-2" cols="12" sm="10" md="5">
          <v-card height="100%" class="elevation-20">
            <v-img
              max-height="280px"
              min-height="280px"
              aspect-ratio="16:9"
              :src="require('@/assets/TeslaFront/part0.png')"
            />
          </v-card>
        </v-col>
        <v-col class="ma-2" cols="12" sm="10" md="5">
          <v-card elevation-20 height="100%">
            <v-col md="10" class="offset-md-1 offset-sm-1" sm="12">
              <v-col cols="10" class=" headline mb-5 mt-5">Free text</v-col>
              <v-col cols="10" class="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis beatae dolorem earum dolorum quae optio magni
                voluptates excepturi, architecto sint minima fuga voluptatibus,
                aut ipsam enim ex praesentium reiciendis nesciunt!
              </v-col>
              <v-btn color="black" style="color: white" class="margin-button"
                >CTA text</v-btn
              >
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.margin-button {
  margin-bottom: 5%;
}
</style>
