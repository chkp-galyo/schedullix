<template>
<section class="edit-work-hours" @click.stop>
    <section class="header">
        <h1 class="black-text mb-2 display-4 text-xs-center">Working Hours</h1>
        <p class="mb-1">Select your bussiness working hours</p>
    </section>

    <section class="days" v-if="workingHourEdit">
        <v-app class="sliders" style="height:0px">
            <v-container flex-list-md>
                <v-layout row wrap>
                    <ul class="flex space-between column">
                        <li v-for="(workDay ,idx) in workingHourEdit" :key="idx">
                            <time-slider v-model="workingHourEdit[idx]">
                            </time-slider>
                        </li>
                    </ul>
                </v-layout>
                <section class="btns">
                    <button @click.stop="updateUser">Update</button>
                    <button @click.stop="exitEditWorkingHours">Cancel</button>
                </section>
            </v-container>
        </v-app>
    </section>
</section>
</template>

<script>
import timeSlider from "@/components/editPage/time-slider-cmp.vue";
import {
  GETTER_USER,
  ACT_UPDATE_USER,
  MUT_UPDATE_WORKING_HOURS
} from "@/store/userModule.js";

import {
  eventBus,
  EVENT_TOGGLE_EDIT_WORK_HOURS
} from "@/services/event-bus-service.js";

export default {
  name: "edit-work-hours-cmp",
  components: { timeSlider },
  props: {
    workingHours: Array
  },
  methods: {
    updateUser() {
        console.log('update user')
      this.$store.commit({
        type: MUT_UPDATE_WORKING_HOURS,
        workingHours: this.workingHourEdit
      });

      eventBus.$emit(EVENT_TOGGLE_EDIT_WORK_HOURS);
    },
    exitEditWorkingHours() {
      eventBus.$emit(EVENT_TOGGLE_EDIT_WORK_HOURS);
    }
  },
  data() {
    return {
      workingHourEdit: JSON.parse(JSON.stringify(this.workingHours))
    };
  },
  created() {},
  watch: {}
};
</script>

<style scoped>
.header {
}
.display-4{
  font-size: 2em!important
}
.edit-work-hours {
  border-radius: 6px;
  background-color: white;
  width: 50vw;
  min-height: 60vh;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
}
li {
  display: flex;
  align-items: center;
  width: 45vw;
}

.hour-minute {
  border: 1px solid black;
  width: 100px;
}
ul {
  padding: 0;
}
h1 {
  font-size: 12px;
  /* margin: 0; */
}

button {
  background-color: lightsteelblue;
  width: 70px;
  height: 35px;
  border: 1px solid black;
  border-radius: 6px;
  margin-left: 10px;
}

select {
  -webkit-border-radius: 2px;
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  background-image: url(http://i62.tinypic.com/15xvbd5.png),
    -webkit-linear-gradient(#fafafa, #f4f4f4 40%, #e5e5e5);
  background-position: 97% center;
  background-repeat: no-repeat;
  border: 1px solid #aaa;
  color: #555;
  width: 40px;
}
</style>
