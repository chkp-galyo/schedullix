<template>
<section class="home-header">
      
      <section class="carousel-container"><div class="side-carousel" >
        <v-parallax height="fit-content" >
          <v-layout
          
            column
            align-center
            justify-center
            class="white--text"
            style="align-self:center"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">Create Beautiful Scheduling appointment page for your Business</h1>
            <div class="white--text subheading mb-3 text-xs-center">Powered by The three dummies</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              @click="getStarted"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </div>
    <v-carousel hide-delimiters hide-controls class="carosela" >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
      
      </v-carousel-item>
    </v-carousel>
      </section>
</section>
</template>
 
<script>
import userService from "@/services/userService.js";
import {
  ACT_LOAD_USER,
  GETTER_IS_LOGIN,
  GETTER_USER_ID
} from "@/store/userModule.js";

export default {
  data() {
    return {
      title: "home page",
      items: [
        {
          src: "img/carosel1.png"
        },
        {
          src: "img/carosel2.png"
        },
        {
          src: "img/carosel3.png"
        },
        {
          src: "img/carosel4.png"
        }
      ]
    };
  },
  methods: {
    getStarted() {
      var isLogin = this.$store.getters[GETTER_IS_LOGIN];
      if (isLogin) {
        var userId = this.$store.getters[GETTER_USER_ID];
        this.$router.push(`/${userId}/editPage`);
      } else {
        const loginInfo = {
          email: "",
          password: ""
        };
        this.$store
          .dispatch({ type: ACT_LOAD_USER, loginInfo })
            .then(user => {
              this.$router.push(`/app/${user._id}/editPage`);
            })
            .catch();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.carosela {
  width: 100vw;
  height: 100vh;
}
v-parallax {
  max-width: 100%;
  max-height: 100%;
}
.home-header {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.side-carousel {
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  height: 35vh;
  padding: 5em;
  background-color: rgba(49, 44, 44, 0.5);
  color: white;
  position: absolute;
  z-index: 1;
  top: 10%;
  // left: 25%;
  margin: 0 auto;
  //  width: 200px;
  // height: 200px;
  // position: absolute;
  // right: 20px;
  // z-index: 10000;
  /* The points are: centered top, left bottom, right bottom */
  // clip-path: polygon(100% 0, 100% 100%, 0 100%);
}
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
