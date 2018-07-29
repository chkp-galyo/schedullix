<template>
    <section class="bussiness-calender">  
        <h3 class="black-text mb-5 mt-5 display-4 text-xs-center">My Bussniess Calender</h3> 
        <full-calendar class="full-calendar" ></full-calendar>
    </section>         
</template>

<script>
import { FullCalendar } from "vue-full-calendar";
export default {
  data() {
    return {};
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
    width:80vw;
    float: right;
    padding: 1em
} 
</style>