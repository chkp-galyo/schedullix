<template>
  <section class="edit-map">
    <div>
      <h2>Search and add a pin</h2>
      <label>
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
      style="width:50vw;  height:50vh ;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>
import mapService from '../../services/mapService.js'
export default {
  name: "GoogleMap",
  props: {
    location: {
      type: Object
    }
  },
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  created() {
      mapService.query()
  },
  mounted() {
    if (this.location) {
      this.currentPlace = { ...this.location };
    }
    this.geolocate();
    //   this.addMarker()
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      console.log(arguments);
      console.log(this.currentPlace);

      const marker = {
        lat: this.currentPlace.lat,
        lng: this.currentPlace.lng
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        if (!this.currentPlace) {
          this.currentPlace = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        }
      });
    }
  },
  watch: {
    currentPlace() {
      if (this.currentPlace) {
        console.log(this.currentPlace);

        this.addMarker();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-map {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
