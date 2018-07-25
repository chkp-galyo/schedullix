<template>
  <div class="edit-page">
      <header-cmp :headerConfig="user.configElements.header" v-if="user.configElements.header.isActive" />
      <about-cmp :aboutConfig="user.configElements.about" v-if="user.configElements.about.isActive" /> 
    {{user}}
  </div>
</template>

<script>
import headerCmp from '@/components/edit-header-cmp.js'
import aboutCmp from '@/components/edit-about-cmp.js'

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
