<template>
    <div id="app">

        <div id="nav" class="">
            <v-app  style="min-height:0vh">

            <v-toolbar dark   tabs style="min-height:0vh">
                <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

                <v-toolbar-title>Schedullix</v-toolbar-title>

                <!-- <v-spacer></v-spacer> -->

                <!-- <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn> -->

                <v-tabs slot="extension" color="transparent" fixed-tabs slider-color="white">
                    <v-tab @click="changeLoction('/')">
                        Home
                    </v-tab>
                    
                    <v-menu v-if="user" color="white" offset-y open-on-hover activator lazy class="v-tabs__div">
                        <a slot="activator" class="v-tabs__item">
                            Bussiness
                            <v-icon>arrow_drop_down</v-icon>
                        </a>

                        <v-list>
                            <v-list-tile v-for="(item, index) in items" :key="index" @click="changeLoction(`/${loggedInUser._id}/${item.route}`)">
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>

                    <v-tab v-if="!loggedInUser" @click="changeLoction('/login')">
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
export default {
  data() {
    return {
        user:'',
        items:[{title:'Bussiness Calender', route:'bussinessCalender'}, {title:'Bussiness Profile' , route:'bussinessProfile'}, {title:'Bussiness Page' , route:'editPage'}],
    };
  },
  created() {
    var user;
    user = userService.getLoggedInUser();
    if (user) {
      console.log("user", user);
      this.user = user
    }
  },
  methods: {
    changeLoction(url) {
      this.$router.push(`${url}`);
    }
  },
  computed: {
    loggedInUser() {
      return userService.getLoggedInUser();
    }
  }
};
</script>

<style lang="scss">
a.v-list__tile, a .v-list__tile--link{
    color: #2c3e50!important
}
.application, .theme--light{
background-color: rgba(0, 0, 0, 0.3)!important;
}
.v-toolbar, .v-toolbar--extended ,.theme--darkr{
background-color: rgba(0, 0, 0, 0.3)!important;
}
.application--wrap{
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
    color:white;
    font-size: 1.2em;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:hover{
      color: #e23c52
  }
}
</style>
