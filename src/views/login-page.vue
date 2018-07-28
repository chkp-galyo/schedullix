<template>
  <div class="login">
      <form @submit="login">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
      <button type="submit"></button>
      </form>
 </div>   
</template>

<script>
export default {
  name: "login",
  methods: {
      login(ev){
          console.log(ev)
      }
  }
};
</script>

<style lang="scss" scoped>

</style>