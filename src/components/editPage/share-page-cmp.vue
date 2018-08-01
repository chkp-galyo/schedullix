<template>
    <section class="share-page" :class="{'open':isShow}">

        <h1>Share your page</h1>

        <section class="btns-share-container">
            <v-btn fab small dark color="indigo" title="Copy Business URL" >
                <v-icon dark>fab fa-facebook-square</v-icon>
            </v-btn> 

            <v-btn fab small dark color="pink" title="Copy Business URL" >
                <v-icon dark>fab fa-instagram</v-icon>
            </v-btn> 

            <v-btn fab small dark color="green" title="Copy Business URL" >
                <v-icon dark>fab fa-whatsapp</v-icon>
            </v-btn> 

            
        </section>

        
        <section class="address-page-container">
            <h3>{{businessUrl}}</h3>
            <v-btn fab small dark color="indigo" title="Copy Business URL" v-clipboard:copy="businessUrl" >
                <v-icon dark>file_copy</v-icon>
            </v-btn> 
        </section>
        
    </section>
</template>

<script>
import { GETTER_BUSINESS_NAME } from "@/store/userModule.js";

export default {
  name: "share-page-cmp",
  data() {
    return {
      isShow: true
    };
  },
  created() {},
  methods: {
    toggleShareMenu() {
      this.isShow = !this.isShow;
    }
  },
  watch: {},
  computed: {
    businessUrl() {
      return `http://schedullix.herokuapp.com/${
        this.$store.getters[GETTER_BUSINESS_NAME]
      }`;
    }
  }
};
</script>

<style scoped lang="scss">
.share-page {
  background-color: #403b3bc4;
  width: 40vw;
  height: 150px;
  color: white;
  font-size: 10px;
  position: fixed;
  z-index: 100;
  border-radius: 5px;
  left: 15px;
  top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.address-page-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

h3 {
  border: 1px solid black;
  padding: 8px;
  background-color: #bdbdbd47;
  border-radius: 3px;
}
</style>