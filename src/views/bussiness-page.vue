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
export default {};
</script>

<style lang="scss" scoped>
h3.display-4{
    font-size: 5em !important;
}
</style>

