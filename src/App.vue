<script setup lang="ts">
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue';


</script>

<template>
  <div class="back-wrap">
    <div class="back-wrap-dop">
      <Header />
      <Hero />
    </div>
  </div>

  <router-view></router-view>


</template>

<style>
* {
  margin: 0px;
}

/* Кнопки */

.cust-but {
  border: none;
  width: 134px;
  height: 48px;
  font-size: 16px;
  border-radius: 14px;
  padding: 10px;
  background-color: rgba(249, 192, 106, 1);
  font-family: "Playfair Display", serif;
  font-weight: bold;
}

.back-wrap {
  background-image: url('./assets/coffee_image.png');
  min-height: 700px;
  width: 100%;
  background-size: 100% 100%;
  background-position: center;

  box-shadow: 0px 3px 3px black;
}
.back-wrap-dop{
  background-color: rgba(0, 0, 0, 0.42);
}
</style>
