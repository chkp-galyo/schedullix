<template>
  <div class="flex column login">
            <h1 class="black-text mb-5 display-4 text-xs-center">Sign In</h1>

      <form class="mb-5">
        <v-text-field
          v-validate="'required'"
          v-model="loginInfo.email"
          :error-messages="errors.collect('email')"
          label="Email"
          data-vv-name="email"
          required
        ></v-text-field>
          <v-text-field
          v-validate="'required'"
          type='password'
          v-model="loginInfo.password"
          :error-messages="errors.collect('password')"
          label="Password"
          data-vv-name="password"
          required
        ></v-text-field>
        <v-btn @click="login">login</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form >
      <h3>Don't have an account yet? <a href="#/signup">Get an account</a></h3>
 </div>   
</template>

<script>
import { ACT_LOAD_USER } from "@/store/userModule.js";

export default {
  name: "login",
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      slider: 45,
      volume: 10,
      price: [110, 440],
      loginInfo: {
        email: "",
        password: ""
      },
      dictionary: {
        attributes: {
          email: "E-mail Address"
          // custom attributes
        }
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch({ type: ACT_LOAD_USER, loginInfo: this.loginInfo })
        .then(user => {
          this.$router.push(`/app/${user._id}/editPage`);
        })
        .catch();
    },
    clear() {
      this.loginInfo.email = "";
      this.loginInfo.password = "";
      this.$validator.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.login form {
  width: 70vw;
  margin: 0 auto;
}
</style>