<template>
  <v-container grid-list-xs>
    <v-layout row wrap text-md-center text-sm-center class="text-color">
      <v-flex md3 ma-5>
        <div md3 sm4>
          <v-flex xs12 title class="text-color-title">For customers</v-flex>
          <v-flex xs12>Customer terms & conditions</v-flex>
          <v-flex xs12>All Aboard Q & A</v-flex>
          <v-flex xs12>Privacy & Cookie policy</v-flex>
          <v-flex xs12>Customers data request form</v-flex>
        </div>
      </v-flex>

      <v-flex md3 sm4>
        <div md3>
          <v-flex xs12 title class="text-color-title">Text</v-flex>
          <v-flex xs12>Car dealer terms & conditions</v-flex>
          <v-flex xs12>Our approved dealers (trade)</v-flex>
          <v-flex xs12>Advertise with us</v-flex>
        </div>
      </v-flex>

      <v-flex md2 sm4>
        <div md3>
          <v-flex xs12 title class="text-color-title">Others</v-flex>
          <v-flex xs12>About us</v-flex>
          <v-flex xs12>Sitemap</v-flex>
          <v-flex xs12>Contact us</v-flex>
        </div>
      </v-flex>

      <v-flex md3 sm12>
        <div md3>
          <v-flex xs12 title class="text-color-title"
            >Tesla official parts distributor</v-flex
          >
          <v-flex xs12>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at
            aliquid qui nemo incidunt velit deleniti fugiat modi, vitae numquam
            culpa sequi quas et, consectetur, perspiciatis autem explicabo
            dolores voluptatem?
          </v-flex>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-color-title {
  color: white;
}

.text-color {
  color: rgb(214, 214, 214);
}
</style>
