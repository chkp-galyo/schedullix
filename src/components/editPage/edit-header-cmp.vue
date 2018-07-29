<template>
  <div class="edit-header" :style="headerConfig.styleObj" ref="divHeader" @click="openInputFile">
    <v-btn fab dark color="indigo" class="open-toolbar" title="Open toolbar"
        @click.stop="openToolbar">
        <v-icon dark>edit</v-icon>
    </v-btn>

            <v-range-slider
          v-model="price"
          :max="600"
          :min="20"
          :step="10"
        ></v-range-slider>
    <input type="file" class="hidden" ref="upload" @input="onInputFile">
    <h1>{{headerConfig.titleTxt}}</h1>
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
      price: 50
    };
  },
  methods: {
    openInputFile() {
      this.$refs.upload.click()
    },
    openToolbar(){
      eventBus.$emit(EVENT_OPEN_TOOL_BAR, 'hello')
    },
    onInputFile() {
      var reader = new FileReader();
      var file = this.$refs.upload.files[0];
      // var imgUrl;
      reader.onloadend = () => {
        // this.$refs.divHeader.style = "`background: url(${reader.result})`";
        // imgUrl = reader.result
        this.$store.commit({type: MUT_UPDATE_HEADER_IMG, imgUrl: reader.result})      
        
      };
      if (file) reader.readAsDataURL(file);
        // this.$store.commit({type: MUT_UPDATE_HEADER_IMG, imgUrl})      
      // editService.onInputFile(reader, file)
    },
  }
};
</script>

<style scoped lang="scss">
.edit-header {
  // margin: 5px 0 !important;
  border: 1px solid black;
  height: 50vh;
  // margin: 15px;
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

</style>
