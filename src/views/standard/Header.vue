<template>
  <div>
    <v-navigation-drawer v-model="sidebar" class="hidden-md-and-up" app>
      <v-list>
        <span v-if="user == null" class="hidden-sm-and-up">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-car</v-icon>
            </v-list-item-icon>
            <v-list-item-content>My fleet</v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>My profile</v-list-item-content>
          </v-list-item>
        </span>
        <v-list-item v-else>
          <v-btn outlined color="black" rounded>
            <v-icon>mdi-account</v-icon>Register / Login
          </v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="menu in menuItems" :key="menu.title" link>
          <v-list-item-content>{{ menu.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="#181818" justify-center align-center>
      <v-toolbar-items class="hidden-md-and-up">
        <v-app-bar-nav-icon
          color="white"
          @click="sidebar = !sidebar"
        ></v-app-bar-nav-icon>
      </v-toolbar-items>
      <v-flex md1 xs1 offset-md1>
        <v-img width="125px" :src="require('@/assets/logo_transparent.png')" />
      </v-flex>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-for="menu in menuItems"
        :key="menu.title"
      >
        <v-btn text color="white">{{ menu.title }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <span v-if="user != null" class="hidden-xs-only">
        <v-btn outlined color="white" rounded>
          <v-icon>mdi-car</v-icon>&nbsp; My fleet
        </v-btn>
        <v-btn outlined color="white" rounded>
          <v-icon>mdi-account</v-icon>My profile
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </span>
      <span class="hidden-xs-only" v-else>
        <v-btn outlined color="white" rounded>
          <v-icon>mdi-account</v-icon>Register / Login
        </v-btn>
      </span>
      <v-spacer class="hidden-sm-only"></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
// import GlobalVarService from "@/services/global_var/GlobalVarService.js";

export default {
  data: function() {
    return {
      user: null,
      sidebar: false,
      menuItems: [
        { title: "Catalog", path: "/home", icon: "null" },
        { title: "Become our partner", path: "/signup", icon: "null" },
        { title: "Contact us", path: "/signup", icon: "null" },
        { title: "Customer service", path: "/signin", icon: "null" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
