<template>
<section class="bussiness-page" >
    <v-tabs
    centered
    color="cyan"
    dark
    icons-and-text
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab @click="changeState('calender')">
      My Bussiness
      <v-icon>phone</v-icon>
    </v-tab>

    <v-tab @click="changeState('page')">
      My Page
      <v-icon>favorite</v-icon>
    </v-tab>

    <v-tab @click="changeState('profile')">
      My Profile
      <v-icon>account_box</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 3"
      :id="'tab-' + i"
      :key="i"
    >
      <v-card flat>
        <!-- <v-card-text>{{ text }}</v-card-text> -->
      </v-card>
    </v-tab-item>
  </v-tabs>
    <bussiness-calender v-if="calender"></bussiness-calender>
    <bussiness-profile v-if="profile"></bussiness-profile>
    <bussiness-page v-if="page"></bussiness-page>
</section>
    
</template>

<script>
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
          return ''
      }
  },

};
</script>

<style lang="scss" scoped>
</style>
