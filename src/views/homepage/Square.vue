<template>
  <v-container grid-list-xs ma-0 pa-0>
    <v-layout column wrap align-center>
      <v-layout row wrap align-center justify-center>
        <v-flex ma-2 sm10 md5>
          <v-card elevation-20 height="100%">
            <v-flex xs12 offset-md4 offset-sm1>
              <v-flex xs10 md5 headline mb-5 mt-5>Free text</v-flex>
              <v-flex xs10 mb-5>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis beatae dolorem earum dolorum quae optio magni
                voluptates excepturi, architecto sint minima fuga voluptatibus,
                aut ipsam enim ex praesentium reiciendis nesciunt!
              </v-flex>
              <v-btn color="black" style="color: white" class="margin-button"
                >CTA text</v-btn
              >
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex ma-2 md5 sm10>
          <v-card elevation-20 height="100%">
            <v-img
              max-height="280px"
              min-height="280px"
              aspect-ratio="16:9"
              :src="require('@/assets/TeslaFront/part0.png')"
            >
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- new row -->
      <v-layout row wrap justify-center>
        <v-flex ma-2 sm10 md5>
          <v-card height="100%" elevation-20>
            <v-img
              max-height="280px"
              min-height="280px"
              aspect-ratio="16:9"
              :src="require('@/assets/TeslaFront/part0.png')"
            />
          </v-card>
        </v-flex>
        <v-flex ma-2 sm10 md5>
          <v-card elevation-20 height="100%">
            <v-flex md10 offset-md1 offset-sm1 sm12>
              <v-flex xs10 headline mb-5 mt-5>Free text</v-flex>
              <v-flex xs10 mb-5>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis beatae dolorem earum dolorum quae optio magni
                voluptates excepturi, architecto sint minima fuga voluptatibus,
                aut ipsam enim ex praesentium reiciendis nesciunt!
              </v-flex>
              <v-btn color="black" style="color: white" class="margin-button"
                >CTA text</v-btn
              >
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
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
