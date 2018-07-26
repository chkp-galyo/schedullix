<template>
<section class="home-header">
      <div class="side-carousel">
    <v-parallax src="img/homeImg.jpeg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="black--text mb-2 display-1 text-xs-center">Create Beautiful Scheduling appointment page for your Business</h1>
            <div class="black--text subheading mb-3 text-xs-center">Powered by The three dummies</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </div>
      <section class="carousel-container">
    <v-carousel hide-delimiters style="width:50vw" >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
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
          src: 'img/carosel1.jpeg'
        },
        {
          src: 'img/carosel2.jpeg'
        },
        {
          src: 'img/carosel3.jpeg'
        },
        {
          src: 'img/carosel4.jpeg'
        },
      ]
    };
  },
  methods: {
   
  },
  
};
</script>

<style lang="scss" scoped>
.home-header{
  display: flex;
}
.side-carousel{
  width:50%;
}
.carousel-container{
    display: flex;
    justify-content:center;
    align-items:center;
}
</style>
