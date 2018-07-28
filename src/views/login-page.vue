<template>
  <div class="flex column login">
      <form @submit.prevent="login">
      <input type="text" placeholder="username" v-model="loginInfo.email">
      <input type="password" placeholder="password" v-model="loginInfo.password">
      <button type="submit">Submit</button>
      </form>
 </div>   
</template>

<script>
import { ACT_LOAD_USER } from "@/store/userModule.js";

export default {
  name: "login",
  data() {
    return {
      loginInfo: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login(ev) {
      //   console.log(ev)
      this.$store.dispatch({ type: ACT_LOAD_USER, loginInfo: this.loginInfo });
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  border: 1px solid black;
  background-color: lightgreen;
}
</style>