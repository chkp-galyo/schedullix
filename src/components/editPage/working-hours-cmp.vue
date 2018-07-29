<template>
    <section class="working-hours">
        <h2>Working hours</h2>
        <table>
            <tr v-for="workDay in workingHours" :key="workDay.day">
                <td>{{workDay.day}} : </td>
                <td>{{workDay.hoursOpen.startTime.hours | validTime}}:{{workDay.hoursOpen.startTime.minutes | validTime}}
                    -
                    {{workDay.hoursOpen.endTime.hours | validTime}}:{{workDay.hoursOpen.endTime.minutes | validTime}} 
                </td>         
            </tr>
        </table>
  </section>
</template>

<script>
export default {
  name: "working-hours-cmp",
  props: {
    workingHours: Array
  },
  methods: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 10px;
}
table tr td {
  padding: 10px 20px;
  margin: 5px;
  border-bottom: 1px solid black;
}
table {
  border: 1px solid black;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
}
.working-hours {
  // margin: auto;
}
</style>
