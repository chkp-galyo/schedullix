<template>
  <div class="edit-page">
      <header-cmp :headerConfig="user.configElements.header" v-if="user.configElements.header.isActive" />
      <about-cmp :aboutConfig="user.configElements.about" v-if="user.configElements.about.isActive" /> 
    {{user}}
  </div>
</template>

<script>
<<<<<<< HEAD
import headerCmp from '@/components/editPage/edit-header-cmp.vue'
import aboutCmp from '@/components/editPage/edit-about-cmp.vue'
=======
import headerCmp from '../components/editPage/edit-header-cmp.vue'
import aboutCmp from '../components/editPage/edit-about-cmp.vue'
>>>>>>> a1b4d3e0c2673740bea54f0a00d350f91c8d1d4f

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
