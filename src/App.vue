<template>
    <div id="app">

        <div id="nav" class="">
            <v-toolbar  light tabs>
                <v-toolbar-side-icon></v-toolbar-side-icon>

                <v-toolbar-title>Page title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>

                <v-tabs slot="extension" color="transparent" fixed-tabs slider-color="grey">
                    <v-tab @click="changeLoction('/')">
                        Home
                    </v-tab>
                    <v-tab @click="changeLoction(`/app/${loggedInUser._id}/editPage`)">
                        Edit Page
                    </v-tab>
                    <v-tab v-if="loggedInUser" @click="changeLoction('/login')">
                        login
                    </v-tab>
                    <v-tab v-if="loggedInUser" @click="changeLoction(`/${loggedInUser._id}/bussinessPage`)">
                        Bussiness Page
                    </v-tab>
                    
                    <v-menu bottom class="v-tabs__div" left>
                        <a slot="activator" class="v-tabs__item">
                            more
                            <v-icon>arrow_drop_down</v-icon>
                        </a>

                        <v-list class="grey lighten-3">
                            <v-list-tile>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-tabs>
            </v-toolbar>
        </div>
        <router-view class="mt-5"/>
    </div>
</template>

<script>
import userService from '@/services/userService.js'
export default {
  data(){
    return {

    }
  },
  created() {
    var user 
    user = userService.getLoggedInUser()
    if(user){
      console.log('user', user)
    }
  },
  methods:{
    changeLoction(url){
      this.$router.push(`${url}`)
    }
  },
  computed:{
    loggedInUser(){
      return userService.getLoggedInUser()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
