

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
                center: {},
                markers: [],
                places: [],
                address: '',
                currentPlace: null
            };
        },

        mounted() {
            this.geolocate();
            if (this.location) {
                console.log(this.location);
                this.currentPlace = this.location
                mapService.getAddress(this.location)
                    .then(address => {
                        this.address = address
                    })
                         this.addMarker()
            }
        },

        methods: {
            // receives a place object via the autocomplete component
            setPlace(place) {
                console.log(place);
                    this.currentPlace = place;
                var userLocation = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                }
                this.$store.commit({type:'changeUserLocation', userLocation:{...userLocation} })
                this.markers.splice(0,1,userLocation)
            },
            addMarker() {
                console.log(this.currentPlace);
                if (this.markers.length === 0) {
                    var marker = {
                        lat: this.currentPlace.lat,
                        lng: this.currentPlace.lng
                    }
                } else {
                    var marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                    }
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
                    }

                } else {
                    navigator.geolocation.getCurrentPosition(position => {
                        this.center = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                    });
                }
            }
        }
    }
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
