<template>
  <div class="edit-page">
      <!-- <div class="box" draggable="true" @dragstart="dragCmp" @drop="dropCmp" ref="box">
      </div>
      <div class="empty-box" draggable="true" @drop="dropCmp" @dragover="allowDrop"></div> -->
      <section class="header" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="header">
      <header-cmp :headerConfig="user.configElements.header" v-if="user.configElements.header.isActive" />
      </section>
      <section class="about" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="about">
      <about-cmp :workingHours="user.workingHours" :aboutConfig="user.configElements.about" 
                    v-if="user.configElements.about.isActive" /> 
      </section>
      <section class="schedule"  draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="schedule">
        <schedule-cmp :schedule="user.configElements.schedule" />
      </section>
      <section class="map" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="map">
        <edit-map-cmp :location="user.location" />
      </section>
  </div>
</template>

<script>
import headerCmp from '@/components/editPage/edit-header-cmp.vue'
import aboutCmp from '@/components/editPage/edit-about-cmp.vue'
import scheduleCmp from '@/components/editPage/edit-schedule-cmp.vue'
import editMapCmp from '@/components/editPage/edit-map-cmp.vue'


import { GETTER_USER } from '../store/userModule.js'

export default {
  name: 'home',
  data(){
      return {
          user: this.$store.getters[GETTER_USER],
      }
  },
  methods: {
      dragCmp(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
      },
      dropCmp(ev) {
          console.log(ev)
               ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(this.$refs.box);
      },
      allowDrop(ev) {
          ev.preventDefault()
      }
  },
  components: {
      headerCmp,
      aboutCmp,
      scheduleCmp,
      editMapCmp,

  }
}
</script>

<style lang="scss" scoped>
.edit-page {
    margin: 10px;
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
