<template>
  <div class="time-slider flex">
                <section class="day flex">
                    <v-switch :label="workDayEdit.day" class="switch" :class="{'active': workDayEdit.isOpen}" 
                                v-model="workDayEdit.isOpen">
                    </v-switch>

                    <section class="time">
                            <v-app class="sliders">
                                <v-container fill-height wrap>
                                    <v-layout row wrap >
                                        <div class="slider-container flex">
                                            <h3>{{startTimeToShow}}</h3>
                                            <v-range-slider class="range-slider" v-model="times" :max="24" :min="0" :step="0.25"></v-range-slider>
                                            <h3>{{endTimeToShow}}</h3>
                                        </div>
                                    </v-layout>
                                </v-container> 
                            </v-app>
                    </section>
                </section>
  </div>
</template>

<script>
export default {
  name: "time-slider-cmp",
  props: {
    workDay: Object
  },
  data() {
    return {
      workDayEdit: JSON.parse(JSON.stringify(this.workDay)),
      times: [8, 17],
      startTimeToShow: "8:00",
      endTimeToShow: "17:00"
    };
  },
  created() {
    this.print();
  },
  methods: {
    print() {
      // console.log(this.workDayEdit);
    }
  },
  watch: {
    times(newVal) {
      // start time
      var hours1 = Math.floor(newVal[0]);
      var minutes1 = Math.round((newVal[0] - hours1) / 100 * 60 * 100);
      this.workDayEdit.hoursOpen.startTime = { hours1, minutes1 };
      this.startTimeToShow = hours1.toString() + ":" + minutes1.toString();
      
      var hours2 = Math.floor(newVal[1]);
      var minutes2 = Math.round((newVal[1] - hours2) / 100 * 60 * 100);
      this.workDayEdit.hoursOpen.endTime = { hours2, minutes2 };
      this.endTimeToShow = hours2.toString() + ":" + minutes2.toString();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.time-slider {
  width: 100%;
}
.day {
  width: 150px;
  height: 50px;
  justify-content: space-around;
}

.slider-container {
  background-color: transparent;
  padding: 0;
  margin: 0;
}

.sliders {
  height: 0;
}
.time {
  /* display: flex; */
  margin: 0;
  justify-content: space-around;
  align-items: center;
  width: 60%;
}
.active {
  color: greenyellow;
}
.switch {
  max-width: 60px;
}

.range-slider {
  min-width: 60%;
}

h3 {
  margin: 0 10px;
}
</style>