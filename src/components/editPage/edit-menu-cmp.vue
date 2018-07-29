<template>
<section>
      <section v-if="isAdmin"  class="edit-menu flex column">
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
</section>
</template>

<script>
import toolbarService from "@/services/toolbarService.js";
import toolbarCmp from "@/components/editPage/edit-toolbar-cmp.vue";

export default {
  name: "editMenu",
  props: ['selcetedCmp'],
  components: {
      toolbarCmp
  },
  data() {
    return {
      isToolbarShow: false,
      isAdmin: true
    };
  },
  created() {
      console.log('Edit menu created')
  },
}
</script>

<style scoped lang="scss">
.edit-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 5%;
  z-index: 100000;
}
</style>
