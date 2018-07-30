<template>
  <div class="time-slider flex mb-0">
                <!-- <section class="day flex"> -->
                  

                    <!-- <section class="time flex"> -->
                    <v-switch :label="value.day" class="switch mt-0 mb-0" :class="{'active': value.isOpen}" 
                                v-model="value.isOpen" @change="updateWorkingHours" >
                    </v-switch>
                                  
                                        <div class="slider-container flex" >

                                            <h3>{{startTimeToShow}}</h3>
                                            <v-range-slider class="range-slider" @change="updateWorkingHours"  v-model="times" :max="24" :min="0" :step="0.25"></v-range-slider>
                                            <h3>{{endTimeToShow}}</h3>
                                        </div>
                              
                                      
                        
                    <!-- </section> -->
                <!-- </section> -->
  </div>
</template>

<script>
export default {
  name: "time-slider-cmp",
  props: ["value"],
  data() {
    return {
      times: [8, 17],
      startTimeToShow: "08:00",
      endTimeToShow: "17:00"
    };
  },
  created() {},
  methods: {
    updateWorkingHours() {
      var newVal = JSON.parse(JSON.stringify(this.value));
      this.$emit("input", newVal);
    }
  },
  watch: {
    times(newVal) {
      // start time
      var hours = Math.floor(newVal[0]);
      var minutes = Math.round((newVal[0] - hours) / 100 * 60 * 100);
      this.value.hoursOpen.startTime = { hours, minutes };
      this.startTimeToShow = hours.toString() + ":" + minutes.toString();

      // end time
      hours = Math.floor(newVal[1]);
      minutes = Math.round((newVal[1] - hours) / 100 * 60 * 100);
      this.value.hoursOpen.endTime = { hours, minutes };
      this.endTimeToShow = hours.toString() + ":" + minutes.toString();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.time-slider {
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.day {
  width: 150px;
  height: 30px;
  // align-self: center;
  align-items: center;
  justify-content: space-around;
}

.slider-container {
  background-color: transparent;
  width:50px;
  padding: 0;
  margin: 0;
}

.sliders {
  height: 0;
  // min-height: 0;
}
.time {
  margin: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25px;
}
.active {
  color: black;
  font-weight: 600;
}
.switch {
  max-width: 60px;
}

.range-slider {
  max-width: 60%;
}

h3 {
  margin: 0 10px;
  height: fit-content;
}
</style>