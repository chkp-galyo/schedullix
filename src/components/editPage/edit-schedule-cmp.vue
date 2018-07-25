<template>
<section>
<v-date-picker @input="handleInput" :color="schedule.styleDate.colorHeader" event-color="orange" />
<appts-list />
{{schedule}}
</section>
</template>
 
<script>
import ApptsList from "./list-daily-appts-cmp.vue";

export default {
    props: {
        schedule: Object
    },
  data() {
    return {};
  },
  methods: {
    handleInput(ev) {
      console.log(typeof ev, ev);
    }
  },
  components: {
    ApptsList
  }
};
</script>