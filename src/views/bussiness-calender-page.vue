<template>
    <section class="bussiness-calender">  
        <div v-if="showRegisterMenu" class="register-container">
            <register-customer :timeCustomer="timeCustomer" />
        </div>
        <h3 class="black-text mb-5 mt-5 display-4 text-xs-center">My Bussniess Calender</h3> 
        <v-btn v-if="apptSelected" color="success" @click="addCustomer">Add Appointment</v-btn>

        <v-btn v-if="apptSelected" @click="removeAppt" color="error">Remove Appointment</v-btn>

        <full-calendar ref="calendar" class="full-calendar"
                      :events="events" @event-selected="eventSelected" @event-created="eventCreated"></full-calendar>
    </section>         
</template>

<script>
import { GETTER_USER, ACT_LOAD_USER_CUSTOMER,
        ACT_REMOVE_CUSTOMER } from "@/store/userModule.js";
import {
  eventBus,
  EVENT_TOGGLE_REG_MENU,
  EVENT_UPDATE_NEW_CUSTOMER
} from "@/services/event-bus-service.js";
import moment from "moment";
import { FullCalendar } from "vue-full-calendar";
import registerCustomer from "@/components/register-customer-cmp.vue";

export default {
  data() {
    return {
      events: [],
      config: {
        locale: "en",
      },
      apptSelected: null,
      showRegisterMenu: false,
      timeCustomer: null
    };
  },
  computed: {},
  created() {
    eventBus.$on(EVENT_TOGGLE_REG_MENU, _ => {
      this.showRegisterMenu = !this.showRegisterMenu;
    // this.renderCustomers();
        this.refreshEvents()

    });
    this.renderCustomers();
  },
  methods: {
    renderCustomers() {
      this.$store.dispatch({ type: ACT_LOAD_USER_CUSTOMER }).then(userData => {
        console.log(userData);
        userData.customers.forEach(ev => {
          var newEvent = {
            title: ev.name,
            start: moment(ev.time).format(),
            end: moment(
              ev.time + userData.timePerCustomer * 60 * 1000
            ).format(),
            allDay: false
          };
          this.events.push(newEvent);
        });
      });
    },

    eventSelected(ev) {
      console.log("seleceted", ev);
      console.log("$refs", this.$refs.removeAppt);
      console.log("$refs", this.$refs.calender);

      this.apptSelected = ev;
      var cuurAppt = this.apptSelected;
      var cal = this.$refs.calender;
    },
    removeAppt() {
    //   console.log(Date.parse(this.apptSelected.start._d));
      if (this.apptSelected._id){
          this.$refs.calendar.$emit("remove-event", this.apptSelected._id);
            this.$store.dispatch({ type: ACT_REMOVE_CUSTOMER, time: this.apptSelected.start._d})
          this.apptSelected = {};
      }
    },
    eventCreated(ev) {
      var currTime = ev.start._d;
      this.timeCustomer = currTime.setHours(currTime.getHours()-3);
      this.apptSelected = ev;
    },
    addCustomer() {
      this.showRegisterMenu = true;
    },

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
          console.log("Fail to add customer");
        });
    }
  },
  components: {
    FullCalendar,
    registerCustomer
  }
};
</script>

<style lang="scss" scoped>
@import "~fullcalendar/dist/fullcalendar.css";
h3.display-4 {
  font-size: 5em !important;
  margin: 25px !important;
}
.full-calendar {
  width: 100%;
  float: right;
  padding: 1em;
}

.register-container {
  width: 100vw;
  height: 120vh;
  background-color: #39373799;
  position: fixed;
  z-index: 10000;
  top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>