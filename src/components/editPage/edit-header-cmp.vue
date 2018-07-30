<template>
  <div class="edit-header animated bounceInRight" :style="headerConfig.styleObj" ref="divHeader">
    <v-btn fab dark color="indigo" class="open-toolbar" title="Open toolbar"
        @click.stop="openToolbar">
        <v-icon dark>edit</v-icon>
    </v-btn>
    <input type="text" disabled="isEditHeaderTxt" class="header-text" :value="headerConfig.titleTxt">

    <!-- <h1 contenteditable="true">{{headerConfig.titleTxt}}</h1> -->
  </div>
</template>

<script>
import { MUT_UPDATE_HEADER_IMG } from '@/store/userModule.js'
import {eventBus,
        EVENT_OPEN_TOOL_BAR} from '@/services/event-bus-service.js'

export default {
  name: "editHeader",
  components: {},
  props: {
    headerConfig: Object
  },
  data() {
    return {
      isEditHeaderTxt: false
    };
  },
  methods: {
    openToolbar(){
      eventBus.$emit(EVENT_OPEN_TOOL_BAR, 'header')
    },
  }
};
</script>

<style scoped lang="scss">
.edit-header {
  border: 1px solid black;
  height: 50vh;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
}
.open-toolbar{
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 1%;
    z-index: 10;
  }

  .header-text {
    background-color: transparent;
  }

</style>
