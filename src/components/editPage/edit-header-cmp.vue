<template>
  <div class="edit-header" :style="headerConfig.styleObj">
    <h1>{{headerConfig.titleTxt}}</h1>
  </div>
</template>

<script>
export default {
  name: "editHeader",
  components: {},
  props: ["headerConfig"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
