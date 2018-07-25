<template>
  <div class="list-daily-appts" v-if="availableTime">
      <h3>List Time:</h3>
      {{availableTimeList}}
  </div>
</template>

// <script>
// import { GETTER_AVAILABLE_TIME_LIST } from "../store/userModule.js";

// export default {
//   name: "listDailyAppts",
//   components: {},
//   props: {
//     dateSelected: String
//   },
//   data() {
//     return {};
//   },
//   computed: {
//     availableTimeList() {
//       return this.$store.getters[GETTER_AVAILABLE_TIME_LIST](dateSelected);
//     }
//   },
//   created() {},
//   methods: {}
// };
// </script>

<style scoped lang="scss">
</style>
