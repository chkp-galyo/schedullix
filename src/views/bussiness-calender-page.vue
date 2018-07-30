<template>
    <section class="bussiness-calender">  
        <h3 class="black-text mb-5 mt-5 display-4 text-xs-center">My Bussniess Calender</h3> 
        <full-calendar class="full-calendar" :events="events"></full-calendar>
    </section>         
</template>

<script>
import { GETTER_USER } from '@/store/userModule.js';
import moment from 'moment'
import { FullCalendar } from "vue-full-calendar";
export default {
  data() {
    return {
        events: [],
        timePerCustomer: null,
        config: {
        locale: 'en',
      },
    };
  },
  created() {
          var user = JSON.parse(JSON.stringify(this.$store.getters[GETTER_USER]))
          this.timePerCustomer = user.timePerCustomer
          user.customers.forEach(ev => {
              var newEvent = {title:ev.name, start:moment(ev.time).format() ,end: moment((ev.time + (this.timePerCustomer *60*1000))).format() , allDay:false}
          this.events.push(newEvent)
      });
      
  },
  components: {
    FullCalendar
  }
};
</script>

<style lang="scss" scoped>
@import "~fullcalendar/dist/fullcalendar.css";
h3.display-4{
    font-size: 5em !important;
}
.full-calendar{
    width:100%;
    float: right;
    padding: 1em
} 
</style>