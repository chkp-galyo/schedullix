<template>
  <div class="edit-page">
      <section class="header" style="order: 1" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="header">
      <header-cmp :headerConfig="user.configElements.header" v-if="user.configElements.header.isActive" />
      </section>
      <section class="about" style="order: 2" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="about">
      <about-cmp :workingHours="user.workingHours" :aboutConfig="user.configElements.about" 
                    v-if="user.configElements.about.isActive" /> 
      </section>
      <section class="schedule" style="order: 3" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="schedule">
        <schedule-cmp :schedule="user.configElements.schedule" />
      </section>
      <section class="map" style="order: 4" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="map">
        <edit-map-cmp :location="user.location" :mapConfig="user.configElements.map" />
      </section>
  </div>
</template>

<script>
import headerCmp from "@/components/editPage/edit-header-cmp.vue";
import aboutCmp from "@/components/editPage/edit-about-cmp.vue";
import scheduleCmp from "@/components/editPage/edit-schedule-cmp.vue";
import editMapCmp from "@/components/editPage/edit-map-cmp.vue";

import { GETTER_USER } from "../store/userModule.js";

export default {
  name: "edit-page",
  data() {
    return {
      user: this.$store.getters[GETTER_USER],
      dragOriginOrderCmp: null,
      dragDestOrderCmp: null,
      draggedCmp: null,
      cmps: [headerCmp, aboutCmp, scheduleCmp, editMapCmp]
    };
  },
  created() {
      console.log('smps:',this.cmps)
  },
  methods: {
    dragCmp(ev) {        
      this.dragOriginOrderCmp = ev.target.style.order;
      this.draggedCmp = ev.target;
    },
    dropCmp(ev) {
      ev.preventDefault();
      this.dragDestOrderCmp = ev.target.parentNode.style.order;
      ev.target.parentNode.style.order = this.dragOriginOrderCmp;
      this.draggedCmp.style.order = this.dragDestOrderCmp;
    },
    allowDrop(ev) {
      ev.preventDefault();
    }
  },
  components: {
    headerCmp,
    aboutCmp,
    scheduleCmp,
    editMapCmp
  }
};
</script>

<style lang="scss" scoped>
.edit-page {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.box {
  display: inline-block;
  margin: 10px;
  width: 150px;
  height: 150px;
  background-color: black;
}
.empty-box {
  display: inline-block;
  width: 160px;
  height: 160px;
  border: 1px solid black;
}
</style>
