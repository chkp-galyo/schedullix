<template>
<section class="bussiness-page" >
    <v-tabs centered light icons-and-text>
        <v-tabs-slider color="black"></v-tabs-slider>

        <v-tab @click="changeState('calender')">
          My Bussiness
          <v-icon large>event</v-icon>
        </v-tab>

        <v-tab @click="changeState('page')">
          My Page
          <v-icon large>home</v-icon>
        </v-tab>

        <v-tab @click="changeState('profile')">
          My Profile
          <v-icon large>account_box</v-icon>
        </v-tab>
  </v-tabs>

    <bussiness-calender :event="user.customers" :timePerCustomer="user.timePerCustomer" v-if="calender"></bussiness-calender>
    <bussiness-profile v-if="profile"></bussiness-profile>
    <bussiness-page v-if="page"></bussiness-page>
    
</section>
    
</template>

<script>
import { GETTER_USER } from '@/store/userModule.js';
import bussinessCalender from '@/components/bussinessPage/bussiness-calender.vue';
import bussinessProfile from '@/components/bussinessPage/bussiness-profile.vue';
import bussinessPage from '@/components/bussinessPage/bussiness-page.vue';
export default {
  data() {
    return {
        profile: false,
        calender:true,
        page:false
    };
  },
  components: {
    bussinessCalender,
    bussinessProfile,
    bussinessPage
  },
  methods:{
      changeState(stateDisplay){
          this.profile = false,
          this.page = false,
          this.calender = false,
          this[stateDisplay] = true
      },  
  },
  computed:{
      user(){
           return JSON.parse(JSON.stringify(this.$store.getters[GETTER_USER]))
      }
  },

};
</script>

<style lang="scss" scoped>
.bussiness-page{
    margin:0 !important;
}
</style>
