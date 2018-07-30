<template>
    <div class="list-daily-appts animated bounceInRight" v-if="dateSelected">
        <h3>List Time:</h3>
        <ul class="clean-list">
            <li v-for="timeDay in availableTimeList" :key="timeDay.timestamp">
                <button @click="addCustomer(timeDay.timestamp)">+</button>
                <h5>
                    {{timeDay.hours | validTime}}:{{timeDay.minutes | validTime}}
                </h5> 
            </li>
        </ul>

        <h3 v-if="availableTimeList.length<=0 && dateSelected">
            There is no space available at the selected time!
        </h3>
    </div>
</template>

<script>
import {
  GETTER_CUSTOMERS_FOR_DATE,
  GETTER_TIMES_FOR_DATE,
  ACT_ADD_CUSTOMER,
  GETTER_USER_ID
} from "@/store/userModule.js";

import {
  eventBus,
  EVENT_ADD_CUSTOMER,
  EVENT_TOGGLE_REG_MENU
} from "@/services/event-bus-service.js";

import userService from "@/services/userService.js";

export default {
  name: "listDailyAppts",
  components: {},
  props: {
    dateSelected: Number
  },
  data() {
    return {};
  },
  computed: {
    availableTimeList() {
      var customersForDate = this.$store.getters[GETTER_CUSTOMERS_FOR_DATE](
        this.dateSelected
      );
      var freeTimeInDay = this.$store.getters[GETTER_TIMES_FOR_DATE](
        this.dateSelected
      );

      customersForDate.forEach(customer => {
        var idx = freeTimeInDay.findIndex(freeTime => {
          return freeTime.timestamp === customer.time;
        });

        if (idx !== -1) {
          freeTimeInDay.splice(idx, 1);
        }
      });
      return freeTimeInDay;
    }
  },
  created() {},
  methods: {
    addCustomer(timestampForCustomer) {
      eventBus.$emit(EVENT_TOGGLE_REG_MENU);
      eventBus.$emit(EVENT_ADD_CUSTOMER, timestampForCustomer);

      //   this.$store
      //     .dispatch({
      //       type: ACT_ADD_CUSTOMER,
      //       customer
      //     })
      //     .then(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
.list-daily-appts ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   flex-wrap: wrap;
  max-height: 200px;
  overflow-y: scroll;
}
li {
  border-bottom: 1px solid black;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 20px;
}
button {
  width: 15px;
  height: 15px;

  background-color: beige;
  color: black;
}
h3 {
  border-bottom: 1px solid black;
}

::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: darkgrey;
  cursor: pointer;
}
</style>
