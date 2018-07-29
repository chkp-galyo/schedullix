<template>
<section>
      <section class="edit-menu flex">
        <v-btn fab dark color="green" class="save-page" title="Save and Publish"
            @click="updateUser">
            <v-icon dark>save</v-icon>
        </v-btn>
        <!-- <v-btn fab dark color="indigo" class="open-toolbar" title="Open toolbar"
                @click="isToolbarShow = !isToolbarShow">
            <v-icon dark>edit</v-icon>
        </v-btn> -->
        <!-- <v-btn fab dark color="blue" class="open-toolbar" title="Add area">
            <v-icon dark>add</v-icon>
        </v-btn> -->
      </section>
</section>
</template>

<script>
import toolbarService from "@/services/toolbarService.js";
import toolbarCmp from "@/components/editPage/edit-toolbar-cmp.vue";
import { ACT_UPDATE_USER } from '@/store/userModule.js'
import { EVENT_UPDATE_USER } from '@/services/event-bus-service.js'

export default {
  name: "editMenu",
  props: ['selcetedCmp'],
  components: {
      toolbarCmp
  },
  data() {
    return {
      isToolbarShow: false,
    };
  },
  methods: {
      updateUser() {
          this.$store.dispatch({ type: ACT_UPDATE_USER, user: this.user})
      }
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
  left: 5%;
  bottom: 5%;
  z-index: 100000;
}
</style>
