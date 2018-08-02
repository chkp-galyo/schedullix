<template>
<!-- <v-app class="app"> -->
    <v-app id="app">
            <nav-bar></nav-bar>
        <router-view />
    </v-app>
<!-- </v-app> -->
</template>

<script>
import userService from "@/services/userService.js";
import {
  ACT_CHECK_USER_LOGIN,
  GETTER_IS_LOGIN,
  GETTER_USER_ID
} from "./store/userModule";
import navBar from '@/components/nav-bar-cmp.vue'
import {
  eventBus,
  EVENT_TOGGLE_HEADER_PAGE
} from "@/services/event-bus-service.js";

export default {
  
  components:{
    navBar,
  }
};
</script>

<style lang="scss">
.app{
  background-color: transparent;
  width:100%;
}
#app {
  min-height: 0vh !important;
  height: 0vh !important;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

</style>
