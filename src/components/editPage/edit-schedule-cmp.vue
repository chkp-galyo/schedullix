<template>
  <div class="edit-schedule" :style="schedule.styleObj">

    
    <v-date-picker @input="handleInput" :color="schedule.styleDate.colorHeader" 
                    :landscape="schedule.styleDate.landscape" :light="schedule.styleDate.light"
                      :dark="schedule.styleDate.dark" :width="200" show-current="2017-02-04"/>

    <list-daily-appts :dateSelected="Date.parse(dateSelected)" />

  </div>
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
}

.list-daily-appts {
  max-height: 200px;
}
</style>
