<template>
    <section class="register-customer"  @click.stop >
        <h1>Register Oppintment</h1>

        <section>
          <p>Your oppintment will be scheduled at :</p>
          
          <h3>{{customer.time | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</h3>
        </section>

        <form @submit.prevent="registerCustomer">
            <section class="inputs-container">
                <v-text-field v-validate="'required'" v-model="customer.name"
                                 :error-messages="errors.collect('name')"
                                  label="Full Name" data-vv-name="name" required>
                </v-text-field>

                <v-text-field v-validate="'required|max:10'" v-model="customer.phone"
                                :counter="10" :error-messages="errors.collect('phone')"
                                  label="Phone Number" data-vv-name="phone" required>
                </v-text-field>
            </section>
            
            <section>
                <button type="submit">Confirm</button>
                <button @click.prevent="cancelRegisterCustomer">Cancel</button>
            </section>
        </form>

  </section>
</template>

<script>
import {
  eventBus,
  EVENT_ADD_CUSTOMER,
  EVENT_TOGGLE_REG_MENU
} from "@/services/event-bus-service.js";

import { ACT_ADD_CUSTOMER, GETTER_USER_ID } from "@/store/userModule.js";

export default {
  name: "register-customer-cmp",
  props: {
    timeCustomer: Number
  },
  data() {
    return {
      customer: {
        name: "",
        phone: "",
        time: this.timeCustomer,
        isDone: false
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    registerCustomer() {
      this.$store
        .dispatch({
          type: ACT_ADD_CUSTOMER,
          customer: this.customer,
          userId: this.$store.getters[GETTER_USER_ID]
        })
        .then(_ => {
          console.log("success to add customer");
        })
        .catch(_ => {
          onsole.log("Fail to add customer");
        });
      eventBus.$emit(EVENT_TOGGLE_REG_MENU);
      this.customer = null;
    },
    cancelRegisterCustomer() {
      eventBus.$emit(EVENT_TOGGLE_REG_MENU);
      this.customer = null;
    }
  }
};
</script>

<style scoped lang="scss">
.register-customer {
  border-radius: 6px;
  background-color: white;
  width: 50vw;
  height: 50vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
button {
  background-color: lightsteelblue;
  width: 70px;
  height: 35px;
  border: 1px solid black;
  border-radius: 6px;
  margin-left: 10px;
}
form {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.inputs-container {
  display: flex;
  flex-direction: column;
}

input {
  padding: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
}

input:focus {
  border-bottom: 2px solid rgb(38, 8, 145);
  outline: none;
}

h1 {
  font-size: 30px;
}
</style>
