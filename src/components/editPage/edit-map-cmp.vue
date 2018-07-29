

<template>
  <div class="edit-map" :style="mapConfig.styleObj">
    <v-btn fab dark color="indigo" class="open-toolbar" title="Open toolbar"
        @click.stop="openToolbar">
        <v-icon dark>edit</v-icon>
    </v-btn>
    <section class="map-container">

    <div class="side-map">
        <div>
        <h1>Address: {{this.address}}</h1>
        </div>
      <label>
      <h2>Search and add a pin</h2>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <gmap-map
      :center="center"
      :zoom="16"  
      style="width:50vh;  height:50vh ;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    </section>
  </div>
</template>

<script>
import mapService from "../../services/mapService.js";
import { MUT_SET_USER_LOC } from "../../store/userModule.js";
import { eventBus, EVENT_OPEN_TOOL_BAR } from "@/services/event-bus-service.js";

export default {
  name: "editMap",
  props: {
    location: {
      type: Object
    },
    mapConfig: {
      type: Object
    }
  },
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: {},
      markers: [],
      places: [],
      address: "",
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
    if (this.location) {
      console.log(this.location);
      this.currentPlace = this.location;
      mapService.getAddress(this.location).then(address => {
        this.address = address;
      });
      this.addMarker();
    }
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
      var userLocation = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      };
      this.$store.commit({
        type: MUT_SET_USER_LOC,
        userLocation: { ...userLocation }
      });
      mapService.getAddress(userLocation).then(address => {
        this.address = address;
      });
      this.markers.splice(0, 1, userLocation);
    },
    addMarker() {
      console.log(this.currentPlace);
      if (this.markers.length === 0) {
        var marker = {
          lat: this.currentPlace.lat,
          lng: this.currentPlace.lng
        };
      } else {
        var marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
      }
      this.markers.push({
        position: marker
      });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
    },

    geolocate() {
      console.log(this.location);
      if (this.location) {
        this.center = {
          lat: this.location.lat,
          lng: this.location.lng
        };
      } else {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    },
    openToolbar() {
      eventBus.$emit(EVENT_OPEN_TOOL_BAR, "hello");
    }
  }
};
</script>

<style lang="scss" scoped>
.side-map {
  width: 50%;
  min-width: 300px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.side-map * {
  padding: 0.5em;
}
input {
  padding: 1em;
  background-color: white;
  color: black;
  padding-right: 10px;
}
.edit-map {
  padding: 1em;
  display: block;
}

.map-container {
    display: flex;
    justify-content: space-around;
}

.open-toolbar{
    position: absolute;
    right: 1%;
    z-index: 10;
}

</style>
