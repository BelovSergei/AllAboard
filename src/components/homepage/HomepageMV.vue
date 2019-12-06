<template>
  <div fill-height ma-0 pa-0>
    <v-container grid-list-xs fluid ma-0 pa-0>
      <Start />
      <Search id="background-search" />
      <Square id="background-square" />
      <Banner id="background-banner" />
      <SocialMedia id="background-socialmedia" />
    </v-container>
  </div>
</template>

<script>
import Start from "../../views/homepage/Start";
import Search from "../../views/homepage/Search";
import Square from "../../views/homepage/Square";
import Banner from "../../views/homepage/Banner";
import SocialMedia from "../../views/homepage/SocialMedia";
export default {
  components: {
    Start,
    Search,
    Square,
    Banner,
    SocialMedia
  }
};
</script>

<style>
#background-search {
  min-width: 100vw;

  background: black; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    black,
    #181818
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    black,
    #181818
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#background-square {
  min-width: 100vw;
  max-height: max-content;

  background: #181818; /* fallback for old browsers */
}

#background-banner {
  min-width: 100vw;
  max-height: max-content;

  background: #181818; /* fallback for old browsers */
}

#background-socialmedia {
  min-width: 100vw;
  max-height: max-content;

  background: #181818;
}
</style>
