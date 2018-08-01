<template>
    <section class="register-customer"  @click.stop >
        <h1>Register Oppintment</h1>

        <div v-if="!isRegisterComplited">
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
                    <button :disabled="modePage === 'edit'" type="submit">Confirm</button>
                    <button @click.prevent="cancelRegisterCustomer">Cancel</button>
                    <h4 v-if="modePage === 'edit'">This part works only after uot publish your page!</h4>
                </section>
            </form>
        </div>

        <successCheck v-if="isRegisterComplited"></successCheck>

  </section>
</template>

<script>
import {
  eventBus,
  EVENT_ADD_CUSTOMER,
  EVENT_TOGGLE_REG_MENU
} from "@/services/event-bus-service.js";
import { ACT_ADD_CUSTOMER, GETTER_USER_ID } from "@/store/userModule.js";

import successCheck from "@/components/success-check-cmp.vue";

export default {
  name: "register-customer-cmp",
  props: {
    timeCustomer: Number,
    modePage: String
  },
  components: {
    successCheck
  },
  data() {
    return {
      customer: {
        name: "",
        phone: "",
        time: this.timeCustomer,
        isDone: false
      },
      isRegisterComplited: false
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

      this.isRegisterComplited = true;


      setTimeout(() => {
        eventBus.$emit(EVENT_TOGGLE_REG_MENU);
        // eventBus.$emit(EVENT_UPDATE_NEW_CUSTOMER, 'hello')

        this.customer = null;
      }, 2000);
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
  margin-bottom: 10px;
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

h4 {
  // margin-top: 10px;
  color: red;
  font-size: 10px;
}
</style>
