<template>
    <div id="app">
        <div id="nav" class="" v-if="isShowHeader">
            <v-app  style="min-height:0vh">
                <v-toolbar dark tabs style="min-height:0vh">

                    <v-toolbar-title>Schedullix</v-toolbar-title>

                    <v-tabs slot="extension" color="transparent" fixed-tabs slider-color="white">
                        <v-tab @click="changeLoction('/')">
                            Home
                        </v-tab>

                        <v-menu v-if="loggedInUserId" color="white" offset-y open-on-hover activator lazy class="v-tabs__div">
                            <a slot="activator" class="v-tabs__item">
                                Bussiness
                                <v-icon>arrow_drop_down</v-icon>
                            </a>

                            <v-list>
                                <v-list-tile v-for="(item, index) in items" :key="index" @click="changeLoction(`/${loggedInUserId}/${item.route}`)">
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>

                        <v-tab v-if="!loggedInUserId" @click="changeLoction('/login')">
                            login
                        </v-tab>
                    </v-tabs>
                </v-toolbar>
            </v-app>
        </div>
        <router-view />
    </div>
</template>

<script>
import userService from "@/services/userService.js";
import {
  ACT_CHECK_USER_LOGIN,
  GETTER_IS_LOGIN,
  GETTER_USER_ID
} from "./store/userModule";

import {
  eventBus,
  EVENT_TOGGLE_HEADER_PAGE
} from "@/services/event-bus-service.js";

export default {
  data() {
    return {
      user: "",
      items: [
        { title: "Bussiness Calender", route: "bussinessCalender" },
        { title: "Bussiness Profile", route: "bussinessProfile" },
        { title: "Bussiness Page", route: "editPage" }
      ]
    };
  },
  created() {
    eventBus.$on(EVENT_TOGGLE_HEADER_PAGE, _ => {
      this.isShowHeader = !this.isShowHeader;
    });

    this.$store.dispatch({ type: ACT_CHECK_USER_LOGIN }).then(user => {
      this.user = user;
    });
  },
  methods: {
    changeLoction(url) {
      this.$router.push(url);
    }
  },
  computed: {
    loggedInUserId() {
      return this.$store.getters[GETTER_IS_LOGIN];
    },
    isShowHeader() {
      if (!this.loggedInUserId && this.$route.name === "publishPage") {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss">
a.v-list__tile,
a .v-list__tile--link {
  color: #2c3e50 !important;
}
.application,
.theme--light {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
.v-toolbar,
.v-toolbar--extended,
.theme--darkr {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
.application--wrap {
  min-height: unset;
}
.v-tabs__item {
  color: white;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 100vw;
  // margin: 0;
  padding: 0;
  // text-decoration: ;
  a {
    font-weight: bold;
    color: white;
    font-size: 1.2em;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:hover {
    color: #e23c52;
  }
}
</style>
