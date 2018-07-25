<template>
  <div class="edit-page">
      <header-cmp v-if="user.header.isActive" />
      <about-cmp />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
      return {
          user: this.$store.getters.getUserById
      }
  },
  components: {
    HelloWorld
  }
}
</script>
