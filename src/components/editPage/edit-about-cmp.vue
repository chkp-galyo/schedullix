<template>
  <div class="edit-about" :style="aboutConfig.styleObj">
    <v-btn fab dark color="indigo" class="open-toolbar" title="Open toolbar"
      @click.stop="openToolbar">
      <v-icon dark>edit</v-icon>
    </v-btn>

    <section class="about-continer">
    <div class="about-text">
        <h1>{{aboutConfig.titleTxt}}</h1>
        <label contenteditable="true" ref="txt" @blur="updateMainTxt">{{aboutConfig.mainTxt}}</label>
    </div>

    <div class="img-container flex">
      <input type="file" ref="upload" class="hidden" @input="onInputFile">      
        <img :src="aboutConfig.imgUrl" ref="imgAbout"  @click="openInputFile">
    </div>

    <div class="working-hours">
        <workingHoursCmp :workingHours="workingHours" />
    </div>
    </section>
  </div>
</template>

<script>
import workingHoursCmp from "./working-hours-cmp.vue";
import editService from "@/services/editService.js";
import { MUT_UPDATE_ABOUT_TXT } from "@/store/userModule.js";
import {eventBus,
        EVENT_OPEN_TOOL_BAR} from '@/services/event-bus-service.js'

export default {
  name: "edit-about-cmp",
  props: {
    aboutConfig: Object,
    workingHours: Array
  },
  methods: {
    openToolbar(){
      eventBus.$emit(EVENT_OPEN_TOOL_BAR, 'about')
    },
    updateMainTxt() {
      this.$store.commit({ type: MUT_UPDATE_ABOUT_TXT, aboutTxt: this.$refs.txt.innerText });
    },
    openInputFile() {
      this.$refs.upload.click();
    },
    onInputFile() {
      var reader  = new FileReader()
      var file = this.$refs.upload.files[0]
      reader.onloadend = () =>{
        this.$refs.imgAbout.src = reader.result
      }
      if (file) reader.readAsDataURL(file)
      // editService.onInputFile(reader, file)
    }
  },
  components: {
    workingHoursCmp
  }
};
</script>

<style scoped lang="scss">

.edit-about {
  display: block;
  padding: 20px;
  height: 50vh;
  width:100%;
}

.about-text {
  display: flex;
  flex-direction: column;
  width: 33%;
  line-height: 1.6;
  background-color: #795548;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.about-continer {
  display: flex;
  justify-content: space-around;
}

.img-container {
  position: relative;
  width: 33%;
  height: 100%;
  margin: auto;
}

.img-container img {
  max-width: 100%;
  max-height: 100%;
}

.working-hours {
  margin: auto;
}

.open-toolbar{
    position: absolute;
    right: 1%;
    z-index: 10;
}


</style>
