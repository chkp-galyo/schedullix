<template>
  <div class="edit-header" :style="headerConfig.styleObj">
    <h1>{{headerConfig.titleTxt}}</h1>
  </div>
</template>

<script>
export default {
  name: "editHeader",
  components: {},
  props: {
    headerConfig: Object
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.edit-header {
  margin: 5px 0 !important;
  border: 1px solid black;
  height: 50vh;
  margin: 15px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
}
</style>
