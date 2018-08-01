<template>
    <section class="share-page" :class="{'open':isShow}">
        <h1>Share your Business Page:</h1>

        <v-btn fab dark color="blue" title="Copy Business URL" v-clipboard:copy="businessUrl" >
            <v-icon dark>file_copy</v-icon>
        </v-btn> 

        <button @click="toggleShareMenu">
            {{isShow? 'Close': 'Open'}}
        </button>

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
      return `http://localhost:8080/#/${
        this.$store.getters[GETTER_BUSINESS_NAME]
      }`;
    }
  }
};
</script>

<style scoped lang="scss">
.share-page {
  background-color: red;
  width: 40vw;
  height: 150px;
  color: white;
  font-size: 10px;
  position: fixed;
  z-index: 100;
  border-radius: 5px;
  left: -150px;
}

.open {
  background-color: orange;
//   left: 3150px;
}

</style>