<template>
  <div class="edit-header" :style="headerConfig.styleObj">
    <h1>{{headerConfig.titleText}}</h1>
    <img :src="headerConfig.imgUrl"/>

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
