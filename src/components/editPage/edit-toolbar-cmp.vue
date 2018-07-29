<template>
<div>
    <section class="toolbar"  >
        <!-- <div class="header"></div>
      <div class="btn">✎</div>
      <div class="btn drag">⁞</div>
      <div class="btn">🗑</div> -->
      <section class="header" @mousedown="dragToolbar">
          Style your {{selectedCmp}} cmp
      </section>
        <section class="btns">
            <!-- <v-overflow-btn :items="fonts" label="Select font" hide-details></v-overflow-btn> -->
            <v-btn fab dark small color="white" title="Edit text">
                <v-icon dark>text_fields</v-icon>
            </v-btn>
            <input type="color" class="hidden" ref="txtColor" @input="onInputTxtColor">            
            <v-btn fab dark small color="orange" title="Text color" @click="openInputTxtColor">
                <v-icon dark>format_color_text</v-icon>
            </v-btn>
            <input type="color" class="hidden" ref="bgColor" @input="onInputBgColor">
            <v-btn v-if="selectedCmp !== 'header'" fab dark small color="blue" title="Background color" @click="openInputBgColor">
                <v-icon dark>format_color_fill</v-icon>
            </v-btn>
                <input type="file" class="hidden" ref="upload" accept="image/*" @input="onInputFile" />
            <v-btn fab dark small color="pink" title="Upload image" @click="openInputFile">
               <v-icon dark>add_photo_alternate</v-icon>
               <input type="file">
            </v-btn>
            <v-btn fab dark small color="red" title="Delete area" @click="hideCmp">
                <v-icon dark>delete</v-icon>
            </v-btn>
        </section>


    </section>
</div>
</template>

<script>
import toolbarService from "@/services/toolbarService.js";
import {
  eventBus,
  EVENT_SELECTED_CMP,
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
        console.log('mycmp',cmp)
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
        // console.log(typeOf(ev.target.value))
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
  border-radius: 25px;
  top: 15%;
  right: 15%;
}

.header {
      background-color: rgba(92, 92, 92, 0.5);
      width: 100%;
      padding: 5px;
      margin: 0;
      border-radius: 25px 25px 0 0;
      cursor: move;
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
</style>
