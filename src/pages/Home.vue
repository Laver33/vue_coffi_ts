<script setup lang="ts">
  //@ts-nocheck
import Discover from '../components/Discover.vue';  
import BestCoffi from '../components/BestCoffi.vue'; 
import Different from '../components/Different.vue';
import Hero from '../components/Hero.vue';
</script>

<template>
  <div class="home-page">
    <div class="back-wrap">
      <div class="back-wrap-dop">
        <Hero />
      </div>
    </div>
    
    <Discover />
    <BestCoffi />
    <Different />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

.back-wrap {
  background-image: url('../assets/coffee_image.png');
  min-height: 700px;
  width: 100%;
  background-size: cover; 
  background-position: center;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
}

.back-wrap-dop {
  background-color: rgba(0, 0, 0, 0.42);
  min-height: 700px;
}
</style>