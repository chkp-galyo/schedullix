<template>
  <div class="edit-page">
      <header-cmp :headerConfig="user.configElements.header" v-if="user.configElements.header.isActive" />
      <about-cmp :workingHours="user.workingHours" :aboutConfig="user.configElements.about" v-if="user.configElements.about.isActive" /> 
    {{user}}
  </div>
</template>

<script>
<<<<<<< HEAD
import headerCmp from '../components/editPage/edit-header-cmp.vue'
import aboutCmp from '../components/editPage/edit-about-cmp.vue'
=======
import headerCmp from '@/components/editPage/edit-header-cmp.vue'
import aboutCmp from '@/components/editPage/edit-about-cmp.vue'
>>>>>>> 2d61530f0f60aaa761a65c996eed4f317bccd6c9

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
      aboutCmp
  }
}
</script>
