<template>
  <div class="flex column login">
<div class="login-container">
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
        <v-btn color="primary"  @click="login">login</v-btn>
        <v-btn color="primary" @click="clear">clear</v-btn>
      </form >
      <h3>Don't have an account yet? <a href="#/signup">Get an account</a></h3>
</div>
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
      if(this.loginInfo.email || this.loginInfo.password){
        this.$store
        .dispatch({ type: ACT_LOAD_USER, loginInfo: this.loginInfo })
        .then(user => {
          this.$router.push(`/${user._id}/editPage`);
        })
        .catch();
      } else{
        console.log('inavlid user name');
        
      }
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
h1{
  // padding-top: 2em;
  font-size: 4em!important;
  font-weight: normal;
  //  background-color: white;
  // padding: 1em;
}
.login form {
  width: 50vw;
  margin: 0 auto;
}
.login-container{
  background-color: rgba(255, 255, 255, 0.507);
  padding: 3em;
  width: 60vw;
  margin: 0 auto;
}
.login{
  padding:6em; 
  height: 100vh;
  background-image: url('https://c.pxhere.com/photos/0f/1e/collaborate_collaboration_creative_design_designer_group_groupware_hands-911060.jpg!d');
  background-size:100vw 100vh; 
}
</style>