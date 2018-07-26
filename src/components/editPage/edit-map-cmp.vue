<template>
  <section class="edit-map">
    <div class="side-map">
        <h1>{{this.address}}</h1>
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
  name: "editMap",
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
      address:'',
      currentPlace: null
    };
  },
  created() {
  },
  mounted() {
      
      this.geolocate();
        if (this.location) {
            console.log(this.location);
            this.currentPlace = this.location
            mapService.getAddress(this.location)
            .then(address=>{
                this.address = address
            })
        }
        
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker(){
        console.log('enterd location', arguments);
            const marker = {
                lat: this.currentPlace.lat,
                lng: this.currentPlace.lng
            };
            this.markers.push({ position: marker });
            this.places.push(this.currentPlace);
            this.center = marker;
            console.log('center',this.center);
            
            this.currentPlace = null;
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
          if(!this.center){
              this.center = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
               }
        }
        if (this.currentPlace) {
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
.side-map{

}
.edit-map {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
