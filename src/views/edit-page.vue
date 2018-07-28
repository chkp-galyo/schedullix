<template>
 

  <div class="edit-page">
      <div class="register-container" v-if="showRegisterMenu" @click="showRegisterMenu = false">
        <register-customer :timeCustomer="timeCustomerReg"></register-customer>
      </div>
      

      <section @click="toggleEdit" :class="{'cmp' : isAdmin}" class="header" style="order: 1" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop"  ref="header">
        <header-cmp :headerConfig="user.configElements.header" v-if="user.configElements.header.isActive" />
      </section>
      <section @click="toggleEdit" :class="{'cmp' : isAdmin}" class="about" style="order: 2" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop"  ref="about">
        <about-cmp :workingHours="user.workingHours" :aboutConfig="user.configElements.about" 
                    v-if="user.configElements.about.isActive" /> 
      </section>
      <section @click="toggleEdit" :class="{'cmp' : isAdmin}" class="schedule" style="order: 3" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop"  ref="schedule">
        <schedule-cmp :schedule="user.configElements.schedule" />
      </section>
      <section @click="toggleEdit" :class="{'cmp' : isAdmin}" class="map" style="order: 4" draggable="true" @dragstart="dragCmp" @drop="dropCmp"  @dragover="allowDrop"  ref="map">
        <edit-map-cmp :location="user.location" :mapConfig="user.configElements.map" />
      </section>

      <section>
          <toolbar-cmp v-show="isToolbarShow" :selectedCmp="selectedCmp"/>
      </section>
      <section v-if="isAdmin" class="edit-btns">
        <v-btn fab dark color="green" class="save-page" title="Save and Publish"
            @click="isAdmin = !isAdmin">
            <v-icon dark>save</v-icon>
        </v-btn>
        <v-btn fab dark color="indigo" class="open-toolbar" title="Open toolbar"
                @click="isToolbarShow = !isToolbarShow">
            <v-icon dark>edit</v-icon>
        </v-btn>
        <v-btn fab dark color="blue" class="open-toolbar" title="Add area">
            <v-icon dark>add</v-icon>
        </v-btn>
      </section>
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
import dragService from "@/services/dragService.js";
import toolbarCmp from "@/components/editPage/edit-toolbar-cmp.vue";
import toolbarService from "@/services/toolbarService.js";

import registerCustomer from "@/components/register-customer-cmp.vue";

import {
  eventBus,
  EVENT_TOGGLE_REG_MENU,
  EVENT_ADD_CUSTOMER,
  EVENT_SELECTED_CMP
} from "@/services/event-bus-service.js";
import { GETTER_USER } from "../store/userModule.js";

export default {
  name: "edit-page",
  data() {
    return {
      modePage: "edit",
      showRegisterMenu: false,
      timeCustomerReg: null,
      user: this.$store.getters[GETTER_USER],
      dragOriginOrderCmp: null,
      dragDestOrderCmp: null,
      draggedCmp: null,
      isToolbarShow: false,
      cmps: [],
      selectedCmp: null,
      isAdmin: true
    };
  },
  created() {
    eventBus.$on(EVENT_TOGGLE_REG_MENU, _ => {
      this.showRegisterMenu = !this.showRegisterMenu;
    });
    eventBus.$on(EVENT_ADD_CUSTOMER, time => {
      this.timeCustomerReg = time;
    });
  },
  mounted() {
    // console.log("headerTop:", this.$refs.header.offsetTop);
    // console.log("headerHeight:", this.$refs.header.offsetHeight);
    // console.log("aboutTop:", this.$refs.about.offsetTop);
    // console.log("aboutHeight:", this.$refs.about.offsetHeight);

    // console.log("scheduleTop:", this.$refs.schedule.offsetTop);
    // console.log("scheduleHeight:", this.$refs.schedule.offsetHeight);
    // console.log("mapTop:", this.$refs.map.offsetTop);
    // console.log("mapHeight:", this.$refs.map.offsetHeight);
    this.cmps.push(
      this.$refs.header,
      this.$refs.about,
      this.$refs.schedule,
      this.$refs.map
    );
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
      this.cmps.forEach((cmp) => {
          cmp.classList.remove('edit-cmp')
      })
      this.selectedCmp = ev.target.parentNode;
      var isEdit = this.selectedCmp.classList.contains("edit-cmp");
      if (!isEdit) this.selectedCmp.classList.add("edit-cmp");
      else this.selectedCmp.classList.remove("edit-cmp");
      eventBus.$emit(EVENT_SELECTED_CMP, this.selectedCmp);      
    }
    // dragCmp(ev) {
    //   console.log(
    //     "Top>",
    //     ev.target.offsetTop,
    //     "Height>",
    //     ev.target.offsetHeight
    //   );
    //   console.log(ev.target);
    //   let cmpsPos = dragService.setNotesPos(this.cmps)
    //   dragService.dragElement(ev.target, cmpsPos);
    // console.log('orderrrrrrrrrrrrr',ev.target.parentNode.style.order)
    // this.selectedCmp = ev.target
    // },
    // dropCmp(ev) {
    //   console.log(ev);
    // }
  },
  components: {
    headerCmp,
    aboutCmp,
    scheduleCmp,
    editMapCmp,
    toolbarCmp,
    registerCustomer
  }
};
</script>

<style lang="scss" scoped>
.edit-page {
  margin: 0px;
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
  margin: 5px;
  cursor: pointer;
  background-color: #fff;
}
.edit-btns {
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 5%;
  z-index: 100000;
}
.edit-cmp {
  outline: 5px dashed blue;
}
.register-container {
  width: 100vw;
  height: 120vh;
  background-color: #39373799;
  position: fixed;
  z-index: 10000;
  top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
