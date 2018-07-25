<template>
  <div class="list-daily-appts">
      <h3>List Time:</h3>
      {{availableTimeList}}
  </div>
</template>

// <script>
// import { GETTER_AVAILABLE_TIME_LIST } from "../store/userModule.js";

<<<<<<< HEAD
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
=======
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
      console.log("logggggggg", this.dateSelected);
      return "111111";
    //   return this.$store.getters[GETTER_AVAILABLE_TIME_LIST](dateSelected);
    }
  },
  created() {},
  methods: {}
};
</script>
>>>>>>> a4e1f358bdb0032b108f993978b75c93e99f4e5c

<style scoped lang="scss">
</style>
