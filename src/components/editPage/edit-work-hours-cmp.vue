<template>
<section class="edit-work-hours" @click.stop>
    <section class="header">
        <h1>Select your bussiness working hours</h1>
    </section>
    <hr>
    <section class="days" v-if="workingHourEdit">
        <ul>
            <li v-for="(workDay, idx) in workingHourEdit" :key="workDay.day">
                <section class="day flex">
                    <v-switch :label="workDay.day" class="switch" :class="{'active': workingHourEdit[idx].isOpen}" 
                                v-model="workingHourEdit[idx].isOpen">
                    </v-switch>
                    <section v-if="workingHourEdit[idx].isOpen" class="time">
                        <section class="hour-minute">
                            <h1>From: </h1>
                            <!-- <v-select :items="hours" label="08:30" box></v-select> -->
                            <select v-model="workingHourEdit[idx].hoursOpen.startTime.hours">
                                <option v-for="hour in hours" :key="hour">
                                    {{hour}}
                                </option>
                            </select>
                            :
                            <select v-model="workingHourEdit[idx].hoursOpen.startTime.minutes">
                                <option v-for="minute in minutes" :key="minute">
                                    {{minute}}
                                </option>
                            </select>
                        </section>
                        <section class="hour-minute">
                            <h1>To: </h1>
                            <select v-model="workingHourEdit[idx].hoursOpen.endTime.hours">
                                <option v-for="hour in hours" :key="hour">
                                    {{hour}}
                                </option>
                            </select>
                            :
                            <select v-model="workingHourEdit[idx].hoursOpen.endTime.minutes">
                                <option v-for="minute in minutes" :key="minute">
                                    {{minute}}
                                </option>
                            </select>
                        </section>
                    </section>
                    <section v-else class="time"></section>
                    <!-- <v-select :items="hours" label="17:30"></v-select> -->
                </section>
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
import { GETTER_USER,
        ACT_UPDATE_USER,
        MUT_UPDATE_WORKING_HOURS } from "@/store/userModule.js";

export default {
  name: "workingHours",
  props: { workingHours: Array },
  methods: {
      updateUser(){
        //   console.log('Updating', this.user.workingHours[0])
        //   this.$store.dispatch({type: ACT_UPDATE_USER, user: workingHours})
          this.$store.commit({type: MUT_UPDATE_WORKING_HOURS, workingHours: this.workingHourEdit})
      }
  },
  data() {
    return {
        workingHourEdit: JSON.parse(JSON.stringify(this.workingHours)),
      hours: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ],
      minutes: ['00', '15', '30', '45'],
      days: [true, true, true, true, true, false, false]
    };
  },
  created() {
    console.log("Working hours editor created");
  }
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

.time {
  display: flex;
  margin: 0;
  justify-content: space-around;
  align-items: center;
  width: 60%;
}

.day {
  width: 150px;
  height: 50px;
  justify-content: space-around;
}

.switch {
  max-width: 60px;
}

.active {
  color: greenyellow;
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
   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
   background-position: 97% center;
   background-repeat: no-repeat;
   border: 1px solid #AAA;
   color: #555;
   width: 40px;
}

</style>
