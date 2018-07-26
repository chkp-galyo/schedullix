<template>
  <div class="home">
<home-header></home-header>
<v-app light>
    <v-content>
    <home-main></home-main>
<home-footer></home-footer>
      
    </v-content>
  </v-app>
 </div>
      

</template>

<script>
// @ is an alias to /src
import homeHeader from '@/components/homePage/home-header-cmp.vue'
import homeMain from '@/components/homePage/home-main-cmp.vue'
import homeFooter from '@/components/homePage/home-footer-cmp.vue'
export default {
  name: "home",
  components: {
    homeHeader,
    homeMain,
    homeFooter
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

</style>