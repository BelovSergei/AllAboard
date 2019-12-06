<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center align-center text-sm-center text-md-left>
      <v-flex sm12 md4 ma-5>
        <v-flex xs12 headline class="text-color-title"
          >Does your fleet contain Tesla cars?</v-flex
        >
        <v-flex xs12 class="text-color-subtitle"
          >Become a customer and immediately start improving the efficiency of
          your fleet cars!</v-flex
        >
      </v-flex>
      <div sm12>
        <v-btn color="orange">Find out more</v-btn>
      </div>
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

.text-color-subtitle {
  color: rgb(214, 214, 214);
}
</style>
