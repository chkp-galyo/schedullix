<template>
<section>
<v-date-picker @input="handleInput" :color="schedule.styleDate.colorHeader" />
<list-daily-appts :dateSelected="dateSelected" />

</section>
</template>
 
<script>
import listDailyAppts from './list-daily-appts-cmp.vue';

export default {
    props: {
        schedule: Object
    },
  data() {
    return {
        dateSelected: ''
    };
  },
  methods: {
    handleInput(ev) {
      this.dateSelected = ev
    }
  },
  components: {
    listDailyAppts
  }
};
</script>