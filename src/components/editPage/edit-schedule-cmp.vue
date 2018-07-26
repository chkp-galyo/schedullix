<template>
<section class="schedule" :style="schedule.styleObj">
<v-date-picker @input="handleInput" :color="schedule.styleDate.colorHeader" 
:landscape="schedule.styleDate.landscape" :light="schedule.styleDate.light"
:dark="schedule.styleDate.dark" :width="350" v-model="dateSelected"/>


<<<<<<< HEAD
    <v-date-picker @input="handleInput" :color="schedule.styleDate.colorHeader" 
                    :landscape="schedule.styleDate.landscape" :light="schedule.styleDate.light"
                      :dark="schedule.styleDate.dark" :width="200" show-current="2017-02-04"/>
=======
  <div class="edit-schedule" :style="schedule.styleObj">
>>>>>>> c57d466061f1dcb758972c36519fd3e4031464e6

    <list-daily-appts :dateSelected="Date.parse(dateSelected)" />

  </div>
</section>
</template>
 
<script>
import listDailyAppts from "./list-daily-appts-cmp.vue";

export default {
  props: {
    schedule: Object
  },
  data() {
    return {
      dateSelected: ""
    };
  },
  methods: {
    handleInput(ev) {
      this.dateSelected = ev;
    }
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
