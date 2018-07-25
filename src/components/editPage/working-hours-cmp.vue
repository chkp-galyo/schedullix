<template>
    <section class="working-hours">
        <h2>Working hours</h2>
        <table>
            <tr v-for="workDay in workingHours" :key="workDay.day">
                <td>{{workDay.day}} : </td>
                <td>{{workDay.hoursOpen.startTime.hours}}:{{workDay.hoursOpen.startTime.minutes}}
                    -
                    {{workDay.hoursOpen.endTime.hours}}:{{workDay.hoursOpen.endTime.minutes}} 
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
  padding: 3px;
}
table {
  border: 1px solid black;
  border-radius: 6px;
}
.working-hours {
  margin: auto;
}
</style>
