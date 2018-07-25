<template>
  <div class="edit-page">
      <header-cmp :headerConfig="user.configElements.header" v-if="user.configElements.header.isActive" />
      <about-cmp :workingHours="user.workingHours" :aboutConfig="user.configElements.about" v-if="user.configElements.about.isActive" /> 
        <schedule-cmp :schedule="user.configElements.schedule" />
        <edit-map-cmp :location="user.location" />
  </div>
</template>

<script>
import headerCmp from '@/components/editPage/edit-header-cmp.vue'
import aboutCmp from '@/components/editPage/edit-about-cmp.vue'
import scheduleCmp from '@/components/editPage/edit-schedule-cmp.vue'
import editMapCmp from '@/components/editPage/edit-map-cmp.vue'


import { GETTER_USER } from '../store/userModule.js'

export default {
  name: 'home',
  data(){
      return {
          user: this.$store.getters[GETTER_USER]
      }
  },
  components: {
      headerCmp,
      aboutCmp,
      scheduleCmp,
      editMapCmp,

  }
}
</script>

<style lang="scss" scoped>
.edit-page {
    margin: 10px;
}
</style>
