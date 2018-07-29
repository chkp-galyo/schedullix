<template>
<section class="edit-work-hours" @click.stop>
    <section class="header">
        <h1>Select your bussiness working hours</h1>
    </section>
    <hr>
    <section class="days" v-if="workingHourEdit">
        <ul>
            <li v-for="(workDay) in workingHourEdit" :key="workDay.day">
                <time-slider :workDay="workDay"></time-slider>
            </li>
        </ul>
    </section>
    <hr>
    <section class="btns">

     <button @click.stop="updateUser">Update</button>
        <button>Cancel</button>
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

export default {
  name: "edit-work-hours-cmp",
  components: { timeSlider },
  props: { workingHours: Array },
  methods: {
    updateUser() {
      this.$store.commit({
        type: MUT_UPDATE_WORKING_HOURS,
        workingHours: this.workingHourEdit
      });
    }
  },
  data() {
    return {
      price: [8, 17],
      workingHourEdit: JSON.parse(JSON.stringify(this.workingHours))
    };
  },
  created() {}
};
</script>

<style scoped>
.edit-work-hours {
  border-radius: 6px;
  background-color: white;
  width: 50vw;
  height: 60vh;
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

h1 {
  font-size: 12px;
  margin: 0;
}

.btns {
  margin: 20px auto;
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
