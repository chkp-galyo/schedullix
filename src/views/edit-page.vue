<template>
  <div class="edit-page">
      <div class="register-container" v-if="showRegisterMenu" @click="showRegisterMenu = false">
        <register-customer :timeCustomer="timeCustomerReg"></register-customer>
      </div>
      

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
import registerCustomer from "@/components/register-customer-cmp.vue";
import {
  eventBus,
  EVENT_TOGGLE_REG_MENU,
  EVENT_ADD_CUSTOMER
} from "@/services/event-bus-service.js";
import { GETTER_USER } from "../store/userModule.js";

export default {
  components: {
    headerCmp,
    aboutCmp,
    scheduleCmp,
    editMapCmp,
    registerCustomer
  },
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
      cmps: [headerCmp, aboutCmp, scheduleCmp, editMapCmp]
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
