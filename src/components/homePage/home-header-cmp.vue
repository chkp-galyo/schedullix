<template>
<section class="home-header">
      
      <section class="carousel-container">
    <v-carousel hide-delimiters style="width:95.8vw" >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
      <div class="side-carousel" >
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
              href="#/login"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </div>
      </v-carousel-item>
    </v-carousel>
      </section>
</section>
</template>
 
<script>

export default {
  data() {
    return {
      title: "home page",
       items: [
        {
          src: 'img/carosel1.png'
        },
        {
          src: 'img/carosel2.png'
        },
        {
          src: 'img/carosel3.png'
        },
        {
          src: 'img/carosel4.png'
        },
      ]
    };
  },
  methods: {
   
  },
  
};
</script>

<style lang="scss" scoped>
v-parallax{
  max-width: 100%;
  max-height:100% ;
}
.home-header{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
.side-carousel{
  display: flex;
  width:100%;
  justify-content: center;
  height:30vh;
  background-color: rgba(49, 44, 44, 0.5);
  color: white;
  position: absolute;
    top: 25%;
//  width: 200px;
    // height: 200px;
    // position: absolute;
    // right: 20px;
    // z-index: 10000;
    /* The points are: centered top, left bottom, right bottom */
    // clip-path: polygon(100% 0, 100% 100%, 0 100%);
}
.carousel-container{
    display: flex;
    justify-content:center;
    align-items:center;
    // width: 100%;
}
</style>
