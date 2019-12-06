<template>
  <v-container grid-list-xs>
    <v-divider color="grey"></v-divider>
    <v-layout column wrap align-center justify-center>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 headline white--text mt-5>
          Connect with us
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <div xs12 style="margin-bottom: 20px;">
          <v-btn color="white" icon outlined>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn color="white" icon outlined>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn color="white" icon outlined>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn color="white" icon outlined>
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
        </div>
      </v-layout>
    </v-layout>
    <v-divider color="grey"></v-divider>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
