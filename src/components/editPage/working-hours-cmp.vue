<template>
    <section class="working-hours">
        <h2>Working hours</h2>
        <table>
            <tr v-for="workDay in workingHours" :key="workDay.day">
                <td>{{workDay.day}} : </td>
                <td>From : {{workDay.hours.from}}</td>
                <td>To : {{workDay.hours.to}}</td>                
            </tr>
        </table>
  </section>
</template>

<script>
export default {
  name: 'working-hours-cmp',
  props: {
    workingHours: Array
  },
  data() {
      return {

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table tr td {
    border: 1px solid black;
    padding: 2px;
}
.working-hours {
    margin: auto;
}

</style>
