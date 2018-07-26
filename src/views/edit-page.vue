<template>
  <div class="edit-page">
      <section class="cmp header" @click="toggleEdit" style="order: 1" draggable="false" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="header">
      <header-cmp :headerConfig="user.configElements.header" v-if="user.configElements.header.isActive" />
      </section>
      <section class="cmp about" @click="toggleEdit" style="order: 2" draggable="false" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="about">
      <about-cmp :workingHours="user.workingHours" :aboutConfig="user.configElements.about" 
                    v-if="user.configElements.about.isActive" /> 
      </section>
      <section class="cmp schedule" @click="toggleEdit" style="order: 3" draggable="false" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="schedule">
        <schedule-cmp :schedule="user.configElements.schedule" />
      </section>
      <section class="cmp map" @click="toggleEdit" style="order: 4" draggable="false" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop" ref="map">
        <edit-map-cmp :location="user.location" :mapConfig="user.configElements.map" />
      </section>

      <section>
          <toolbar-cmp v-show="isToolbarShow"/>
      </section>
        <v-btn fab dark color="indigo" class="open-toolbar" 
                @click="isToolbarShow = !isToolbarShow">
            <v-icon dark>edit</v-icon>
        </v-btn>

      <!-- <section>
       <ul ref="cmps">
           <li v-for="cmp in cmps">
                <component :is="cmp" :user="user"></component>
           </li>
        </ul> 
      </section> -->
  </div>
</template>

<script>
import headerCmp from "@/components/editPage/edit-header-cmp.vue";
import aboutCmp from "@/components/editPage/edit-about-cmp.vue";
import scheduleCmp from "@/components/editPage/edit-schedule-cmp.vue";
import editMapCmp from "@/components/editPage/edit-map-cmp.vue";
import dragService from '@/services/dragService.js'
import toolbarCmp from '@/components/editPage/edit-toolbar-cmp.vue'

import { GETTER_USER } from "../store/userModule.js";

export default {
  name: "edit-page",
  data() {
    return {
      user: this.$store.getters[GETTER_USER],
      dragOriginOrderCmp: null,
      dragDestOrderCmp: null,
      draggedCmp: null,
      isToolbarShow: false,
      cmps: [headerCmp, aboutCmp, scheduleCmp, editMapCmp ]
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
    },
    toggleEdit(ev) {
        var currCmp = ev.target.classList
        var isEdit = currCmp.contains('edit-cmp')
        if (!isEdit) currCmp.add('edit-cmp')
        else currCmp.remove('edit-cmp')
    }
  },
  components: {
    headerCmp,
    aboutCmp,
    scheduleCmp,
    editMapCmp,
    toolbarCmp
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
.cmp {
    margin-bottom: 5px;
    cursor: pointer;
    background-color: #fff;
}
.open-toolbar {
    position: fixed;
    right: 5%;
    z-index: 100000;
}
.edit-cmp {
    outline: 5px dashed blue;
}
</style>
