<template>
<div>
    <section class="toolbar"  >
        <!-- <div class="header"></div>
      <div class="btn">✎</div>
      <div class="btn drag">⁞</div>
      <div class="btn">🗑</div> -->
            <input type="file" class="hidden" ref="upload" accept="image/*" @input="onInputFile" />
            <input type="color" class="hidden" ref="bgColor" @input="onInputBgColor">
            <input type="color" class="hidden" ref="txtColor" @input="onInputTxtColor">            

      <section class="header" @mousedown="dragToolbar">
          <button>X</button>
          Style your page {{selectedCmp}}
      </section>
        <section class="btns">
            <!-- <v-overflow-btn :items="fonts" label="Select font" hide-details></v-overflow-btn> -->
            <v-btn fab dark small color="white" title="Edit text">
                <v-icon dark>text_fields</v-icon>
            </v-btn>
            <v-btn v-if="selectedCmp === 'about'" fab dark small color="purple" title="Change working hours" @click.stop="openWorkingHoursEditor">
               <v-icon dark>access_time</v-icon>
               <input type="file">
            </v-btn>
            <v-btn fab dark small color="orange" title="Text color" @click.stop="openInputTxtColor">
                <v-icon dark>format_color_text</v-icon>
            </v-btn>
            <v-btn v-if="selectedCmp !== 'header'" fab dark small color="blue" title="Background color" @click.stop="openInputBgColor">
                <v-icon dark>format_color_fill</v-icon>
            </v-btn>
            <v-btn v-if="selectedCmp === 'schedule'" fab dark small color="green" title="Change calender style">
               <v-icon dark>event</v-icon>
               <input type="file">
            </v-btn>
            <v-btn v-if="selectedCmp === 'about' || selectedCmp === 'header'" fab dark small color="pink" title="Upload image" @click.stop="openInputFile">
               <v-icon dark>add_photo_alternate</v-icon>
               <input type="file">
            </v-btn>
            <v-btn fab dark small color="red" title="Delete area" @click.stop="hideCmp">
                <v-icon dark>delete</v-icon>
            </v-btn>

            <section class="calender-edit" v-if="selectedCmp === 'schedule'">
                <section class="calender" @mousedown="dragToolbar">
                 Style your calender
                </section>
            <v-btn fab dark small color="orange" title="Text color" @click.stop="openInputTxtColor">
                <v-icon dark>format_color_text</v-icon>
            </v-btn>
            <v-btn fab dark small color="blue" title="Background color" @click.stop="openInputCalenderColor">
                <v-icon dark>format_color_fill</v-icon>
            </v-btn>
            <v-btn fab dark small color="yellow" title="Text color" @click.stop="openInputTxtColor">
                <v-icon dark>format_color_text</v-icon>
            </v-btn>
            <v-btn fab dark small color="blue" title="Background color" @click.stop="openInputBgColor">
                <v-icon dark>format_color_fill</v-icon>
            </v-btn>
            </section>
        </section>


    </section>
</div>
</template>

<script>
import toolbarService from "@/services/toolbarService.js";
import {
  eventBus,
  EVENT_SELECTED_CMP,
  EVENT_OPEN_EDITOR_WORKING_HOURS
} from "@/services/event-bus-service.js";
import {MUT_UPDATE_COLOR_CMP,
        MUT_UPDATE_IMG} from '@/store/userModule.js'

export default {
  name: "toolbar",
  props: ['selectedCmp'],
  components: {},
  data() {
    return {
      fonts: ["Arial", "Impact"],
      currCmp: null
    };
  },
  created(){
    eventBus.$on(EVENT_SELECTED_CMP, cmp => {
        this.currCmp = cmp
        console.log('mycmp', cmp)
    })
  },
  methods: {
    dragToolbar(ev) {
      toolbarService.dragElement(ev.target.parentNode);
    },
    hideCmp(){
        if (!this.currCmp) return
        this.currCmp.style = 'display: none'
    },
    openInputFile() {
        this.$refs.upload.click()
    },
    openInputBgColor(){
        this.$refs.bgColor.click()
    },
    onInputBgColor(ev) {
        this.$store.commit({type: MUT_UPDATE_COLOR_CMP, cmp: this.selectedCmp, propertyToUpdate: 'background', value: ev.target.value })
    },
    openInputTxtColor() {
        this.$refs.txtColor.click()
    },
    onInputTxtColor(ev) {
        this.$store.commit({type: MUT_UPDATE_COLOR_CMP, cmp: this.selectedCmp, propertyToUpdate: 'color', value: ev.target.value })
    },
    onInputFile() {
      var reader = new FileReader();
      var file = this.$refs.upload.files[0];
      reader.onloadend = () => {
        this.$store.commit({type: MUT_UPDATE_IMG, cmp: this.selectedCmp, imgUrl: reader.result})
      };
      if (file) reader.readAsDataURL(file);
    },
    openWorkingHoursEditor(){
      eventBus.$emit(EVENT_OPEN_EDITOR_WORKING_HOURS)
    },
    nothing() {
        return
    }
  }
};
</script>

<style scoped lang="scss">
.toolbar {
  width: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  padding: 0 0 10px 0;
  border-radius: 5px;
  top: 15%;
  right: 15%;
}

.header {
      background-color: rgba(92, 92, 92, 0.5);
      width: 100%;
      padding: 5px;
      margin: 0;
      border-radius: 5px 5px 0 0;
      cursor: move;
}

.calender {
    background-color: rgba(92, 92, 92, 0.5);
    width: 100%;
    padding: 5px;
    margin: 0;
}

.btns {
    margin: auto;
}

.btn {
  height: 80px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(92, 92, 92, 0.5);
  color: white;
  border: 1px solid black;
  cursor: pointer;
}

.hidden {
    display: none;
}
</style>
