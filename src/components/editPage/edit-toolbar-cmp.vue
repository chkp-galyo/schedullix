<template>
  <div>
      <section class="toolbar"  @mousedown="dragToolbar">
        <!-- <div class="header"></div>
        <div class="btn">✎</div>
        <div class="btn drag">⁞</div>
        <div class="btn">🗑</div> -->
        <section>
            <!-- <v-overflow-btn :items="fonts" label="Select font" hide-details></v-overflow-btn> -->

            <v-btn fab dark small color="blue">
                <v-icon dark>format_color_fill</v-icon>
            </v-btn>

    <v-btn fab dark small color="pink">
      <v-icon dark>add_photo_alternate</v-icon>
    </v-btn>    
    <v-btn fab dark small color="orange">
      <v-icon dark>format_color_text</v-icon>
    </v-btn>
                <v-btn fab dark small color="red">
                <v-icon dark>delete</v-icon>
            </v-btn>

        </section>


      </section>
  </div>
</template>

<script>
import toolbarService from "@/services/toolbarService.js";

export default {
  name: "toolbar",
  components: {},
  data() {
    return {
        fonts: ['Arial', 'Impact']
    };
  },
  methods: {
    dragToolbar(ev) {
      toolbarService.dragElement(ev.target);
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
  padding: 10px;
  border-radius: 25px;
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
