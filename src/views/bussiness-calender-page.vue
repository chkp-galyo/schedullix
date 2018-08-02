<template>
    <section class="bussiness-calender">  
      <div class="calender-container">
        <div v-if="showRegisterMenu" class="register-container">
            <register-customer :timeCustomer="timeCustomer" />
        </div>
        <h3 class="black-text mb-5 mt-5 display-4 text-xs-center">My Bussniess Calender</h3> 
        <v-btn v-if="newAppt" color="success" @click="addCustomer">Add Appointment</v-btn>

        <v-btn v-if="apptSelected" @click="removeAppt" color="error">Remove Appointment</v-btn>

        <full-calendar ref="calendar" class="full-calendar"
                      :events="events" @event-selected="eventSelected" @event-created="eventCreated"></full-calendar>
      </div>
    </section>         
</template>

<script>
import {
  GETTER_USER,
  ACT_LOAD_USER_CUSTOMER,
  ACT_REMOVE_CUSTOMER
} from "@/store/userModule.js";
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
        locale: "en"
      },
      apptSelected: null,
      showRegisterMenu: false,
      timeCustomer: null,
      newAppt: null
    };
  },
  computed: {},
  created() {
    eventBus.$on(EVENT_TOGGLE_REG_MENU, _ => {
      this.showRegisterMenu = !this.showRegisterMenu;
      // this.renderCustomers();
      this.refreshEvents();
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
      this.newAppt = false
      this.apptSelected = ev;
      var cuurAppt = this.apptSelected;
      var cal = this.$refs.calender;
            var currTime = ev.start._d;
      this.timeCustomer = currTime.setHours(currTime.getHours() - 3);
    },
    removeAppt() {
      if (this.apptSelected._id) {
        this.$refs.calendar.$emit("remove-event", this.apptSelected._id);
        this.$store.dispatch({
          type: ACT_REMOVE_CUSTOMER,
          time: this.timeCustomer
        });
        this.apptSelected = {};
      }
    },
    eventCreated(ev) {
      var currTime = ev.start._d;
      this.timeCustomer = currTime.setHours(currTime.getHours() - 3);
      this.newAppt = true
      // this.apptSelected = ev;
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
.bussiness-calender{
   height: 100%;
   width: 100%;
  background-image: url('https://c.pxhere.com/photos/0f/1e/collaborate_collaboration_creative_design_designer_group_groupware_hands-911060.jpg!d');
  background-size:100% 100%; 
  padding: 3em;
  padding-top:6em; 
  // margin-bsottom: 5em;
}
.calender-container{
background-color: rgba(255, 255, 255,0.9);
  padding: 1em;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
h3.display-4 {
  font-size: 4em !important;
  margin-top: 25px !important;
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
@media only screen and (min-width: 700px) {
  
}
</style>