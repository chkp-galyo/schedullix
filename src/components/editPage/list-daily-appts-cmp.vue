<template>
  <div class="list-daily-appts" v-if="dateSelected">
      <h3>List Time:</h3>
      {{availableTimeList}}
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
    dateSelected: String
  },
  data() {
    return {};
  },
  computed: {
    availableTimeList() {
      var customersForDate = this.$store.getters[GETTER_CUSTOMERS_FOR_DATE](
        Date.parse(this.dateSelected)
      );
      console.log(customersForDate);
      console.log(
        this.$store.getters[GETTER_TIMES_FOR_DATE](
          Date.parse(this.dateSelected)
        )
      );

      return 111;
    }
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
