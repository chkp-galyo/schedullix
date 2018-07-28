<template>
  <div class="edit-header" :style="headerConfig.styleObj" ref="divHeader" @click="openInputFile">
    <div class="cmp-cover"></div>
    <input type="file" class="hidden" ref="upload" @input="onInputFile">
    <h1>{{headerConfig.titleTxt}}</h1>
  </div>
</template>

<script>
import { MUT_UPDATE_HEADER_IMG } from '@/store/userModule.js'

export default {
  name: "editHeader",
  components: {},
  props: {
    headerConfig: Object
  },
  data() {
    return {};
  },
  methods: {
    openInputFile() {
      this.$refs.upload.click()
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

</style>
