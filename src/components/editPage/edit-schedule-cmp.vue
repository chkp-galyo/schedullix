<template>
  <section class="edit-schedule" :style="schedule.styleObj">

    <v-date-picker @input="handleInput" :color="schedule.styleDate.colorHeader" 
                    :landscape="schedule.styleDate.landscape" :light="schedule.styleDate.light"
                      :dark="schedule.styleDate.dark" :width="350" v-model="dateSelected"
                       :min="minDate"/>

    <list-daily-appts :dateSelected="Date.parse(dateSelected)" />
  </section>
</template>
 
<script>
import listDailyAppts from "./list-daily-appts-cmp.vue";
import moment from 'moment'

export default {
  props: {
    schedule: Object
  },
  data() {
    return {
      dateSelected: "",
    };
  },
  computed: {
          minDate(){
            return moment().format().split('T')[0].toString()
          },
  },
  methods: {
    handleInput(ev) {
      console.log(ev)
      this.dateSelected = ev;
    },
  },
  components: {
    listDailyAppts
  }
};
</script>

<style lang="scss" scoped>
.edit-schedule {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

.list-daily-appts {
  border: 1px solid black;
  border-radius: 6px;
  width: 20%;
}
</style>
