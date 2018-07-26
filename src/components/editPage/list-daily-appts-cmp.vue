<template>
  <div class="list-daily-appts" v-if="dateSelected">
      <h3>List Time:</h3>
      <ul>
          <li v-for="timeDay in availableTimeList" :key="timeDay.timestamp">
              {{timeDay.hours}}:{{timeDay.minutes}}
              <button>+</button>
          </li>
      </ul>

      <h3 v-if="availableTimeList.length<=0 && dateSelected">There is no space available at the selected time! </h3>
  </div>
</template>

<script>
import {
  GETTER_CUSTOMERS_FOR_DATE,
  GETTER_TIMES_FOR_DATE
} from "@/store/userModule.js";

export default {
  name: "listDailyAppts",
  components: {},
  props: {
    dateSelected: Number
  },
  data() {
    return {};
  },
  computed: {
    availableTimeList() {
      var customersForDate = this.$store.getters[GETTER_CUSTOMERS_FOR_DATE](
        this.dateSelected
      );
      var freeTimeInDay = this.$store.getters[GETTER_TIMES_FOR_DATE](
        this.dateSelected
      );

      customersForDate.forEach(customer => {
        var idx = freeTimeInDay.findIndex(freeTime => {
          return freeTime.timestamp === customer.time;
        });

        if (idx !== -1) {
          freeTimeInDay.splice(idx, 1);
        }
      });
      return freeTimeInDay;
    }
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.list-daily-appts ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
li {
  border: 1px solid black;
  margin: 3px;
}
</style>
