<template>
  <section class="edit-about" :style="aboutConfig.styleObj">

    <section class="about-text">
        <h1>{{aboutConfig.titleTxt}}</h1>
        <p>{{aboutConfig.mainTxt}}</p>
    </section>

    <section class="img-container">
        <img :src="aboutConfig.imgUrl">
    </section>

    <section class="working-hours">
        <workingHoursCmp :workingHours="workingHours" />
    </section>

  </section>
</template>

<script>
import workingHoursCmp from "./working-hours-cmp.vue";

export default {
  name: "edit-about-cmp",
  props: {
    aboutConfig: Object,
    workingHours: Array
  },
  data() {
    return {};
  },
  components: {
    workingHoursCmp
  }
};
</script>

<style scoped lang="scss">
.edit-about {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  max-height: 40vh;
}
.about-text {
  display: flex;
  flex-direction: column;
  width: 33%;
}
.img-container {
  width: 33%;
  margin: auto;
}
</style>
