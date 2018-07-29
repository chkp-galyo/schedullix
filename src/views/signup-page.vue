<template>
    <section class="sign-up">
        <h1 class="black-text mb-5 display-4 text-xs-center">Sign Up</h1>
        <form class="sign-up-form" >
           
            <v-text-field
            v-validate="'required|email'"
            v-model="user.email"
            :error-messages="errors.collect('email')"
            label="E-mail"
            data-vv-name="email"
            required
            ></v-text-field>

            <v-text-field
            v-validate="'required'"
            type="password"
            v-model="user.password"
            :error-messages="errors.collect('password')"
            label="Password"
            data-vv-name="password"
            required
            ></v-text-field>
           

            <v-text-field
            v-validate="'required'"
            type="phone"
            v-model="user.phone"
            :error-messages="errors.collect('phone')"
            label="Phone"
            data-vv-name="phone"
            required
            ></v-text-field>
           
            <v-text-field
            v-validate="'required|max:30'"
            v-model="user.businessName"
            :counter="30"
            :error-messages="errors.collect('businessName')"
            label="Business Name"
            data-vv-name="businessName"
            required
            ></v-text-field>
            <!-- <v-checkbox
              v-validate="'required'"

              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Do you agree?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox> -->
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </form>
    </section>
</template>

<script>
0;
import { ACT_ADD_USER } from "@/store/userModule.js";
import userService from "@/services/userService.js";
export default {
  $_veeValidate: {
    validator: "new"
  },

  data() {
    return {
      user: userService.getDefaultUser(),
      checkbox: false,
      dictionary: {
        attributes: {
          email: "E-mail Address"
          // custom attributes
        },
        custom: {
          name: {
            required: () => "Name can not be empty",
            max: "The name field may not be greater than 10 characters"
            // custom messages
          }
        }
      }
    };
  },

  mounted() {
    this.$validator.localize("he", this.dictionary);
  },
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.required && errors.push("You must agree to continue!");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$validator.validateAll().then(res => {
        // if (!this.checkbox) return;
        console.log(res);
        if (res) {
          this.phone = this.phone;
          this.$store.dispatch({ type: ACT_ADD_USER, user: { ...this.user } });
        }
      });
    },
    clear() {
      this.user = { ...this.getEmptyUser() };
      console.log(this.user);
    },
    getEmptyUser() {
      return userService.getDefaultUser()
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-up {
  margin: 0;
  padding: 0;
  width: 100%;
}
.sign-up-form {
  //   flex-direction: column;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   margin: 0px;
  width: 70vw;
  margin: 0 auto;
}
</style>
