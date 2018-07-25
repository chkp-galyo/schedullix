<template>
  <div class="edit-page">
      <header-cmp v-if="user.header.isActive" />
      <about-cmp />

  </div>
</template>

<script>


export default {
  name: 'home',
  data(){
      return {
          user: this.$store.getters.getUserById
      }
  },
  components: {
  }
}
</script>
