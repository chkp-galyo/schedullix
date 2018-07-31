<template>
    <section class="edit-schedule animated bounceInRight" :style="schedule.styleObj">
        <section>
            <v-btn fab dark color="indigo" class="open-toolbar" v-if="modePage === 'edit'" 
                    title="Open toolbar" @click.stop="openToolbar">
                <v-icon dark>edit</v-icon>
            </v-btn>
        </section>

        <section class="schedule-container">
            <v-date-picker @input="handleInput" :color="schedule.styleDate.colorHeader" 
                              :landscape="schedule.styleDate.landscape" :light="schedule.styleDate.light"
                                :dark="schedule.styleDate.dark" :width="400"  v-model="dateSelected"
                                :min="minDate"/>

            <list-daily-appts class="list-cmp" :dateSelected="Date.parse(dateSelected)" :bgButtons="schedule.styleApptsList.background"/>
        </section>
    </section>
</template>
 
<script>
import listDailyAppts from "./list-daily-appts-cmp.vue";
import moment from "moment";
import { eventBus, EVENT_OPEN_TOOL_BAR } from "@/services/event-bus-service.js";

export default {
  props: {
    schedule: Object,
    modePage: String
  },
  data() {
    return {
      dateSelected: ""
    };
  },
  computed: {
    minDate() {
      return moment()
        .format()
        .split("T")[0]
        .toString();
    }
  },
  methods: {
    openToolbar() {
      eventBus.$emit(EVENT_OPEN_TOOL_BAR, "schedule");
    },
    handleInput(ev) {
      this.dateSelected = ev;
    }
  },
  components: {
    listDailyAppts
  },
  mounted() {
    this.dateSelected = this.minDate;
  }
};
</script>

<style lang="scss" scoped>
.edit-schedule {
  display: block;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  height: 50vh;
  border: 1px solid black;
}

.open-toolbar {
  position: absolute;
  right: 1%;
  z-index: 10;
}

.schedule-container {
  display: flex;
  justify-content: space-around;
  height: 80%;
}

.list-cmp {
  height: 100%;
  width: 30vw;
}
</style>
