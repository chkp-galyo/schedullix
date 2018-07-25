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
  border: 1px solid black;
  height: 40vh;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
}
</style>
