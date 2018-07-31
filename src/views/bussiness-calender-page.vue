<template>
    <section class="bussiness-calender">  
        <h3 class="black-text mb-5 mt-5 display-4 text-xs-center">My Bussniess Calender</h3> 
        <full-calendar class="full-calendar" :events="events"></full-calendar>
    </section>         
</template>

<script>
import { GETTER_USER , ACT_LOAD_USER_CUSTOMER } from '@/store/userModule.js';
import moment from 'moment'
import { FullCalendar } from "vue-full-calendar";
export default {
  data() {
    return {
        events: [],
        config: {
        locale: 'en',
      },
    };
  },
  created() {
          this.$store.dispatch({type:ACT_LOAD_USER_CUSTOMER})
            .then(userData =>{
                console.log(userData)
                userData.customers.forEach(ev => {
                var newEvent = {title:ev.name, start:moment(ev.time).format() ,end: moment((ev.time + (userData.timePerCustomer *60*1000))).format() , allDay:false}
                this.events.push(newEvent)
            })
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