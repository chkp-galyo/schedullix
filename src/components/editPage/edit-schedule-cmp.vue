<template>
  <section class="edit-schedule" :style="schedule.styleObj">
    <section>
    <v-btn fab dark color="indigo" class="open-toolbar" title="Open toolbar"
        @click.stop="openToolbar">
        <v-icon dark>edit</v-icon>
    </v-btn>
    </section>
    <section class="schedule-container">
    <v-date-picker @input="handleInput" :color="schedule.styleDate.colorHeader" 
                    :landscape="schedule.styleDate.landscape" :light="schedule.styleDate.light"
                      :dark="schedule.styleDate.dark" :width="350" v-model="dateSelected"
                       :min="minDate"/>

    <list-daily-appts :dateSelected="Date.parse(dateSelected)" />
    </section>
  </section>
</template>
 
<script>
import listDailyAppts from "./list-daily-appts-cmp.vue";
import moment from "moment";
import { eventBus, EVENT_OPEN_TOOL_BAR } from "@/services/event-bus-service.js";

export default {
  props: {
    schedule: Object
  },
  data() {
    return {
      dateSelected: ""
    };
  },
  computed: {
    minDate() {
      return moment().format().split("T")[0].toString();
    }
  },
  methods: {
    openToolbar() {
      eventBus.$emit(EVENT_OPEN_TOOL_BAR, "schedule");
    },
    handleInput(ev) {
      console.log(ev);
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
  display: block;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

.list-daily-appts {
  border: 1px solid black;
  border-radius: 6px;
  width: 20%;
}

.open-toolbar{
    position: absolute;
    right: 1%;
    z-index: 10;
}

.schedule-container {
  display: flex;
  justify-content: space-around;
}
</style>
