<script setup lang="ts">
import Header from './components/Header.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.body.style.fontFamily = '"Playfair Display", serif';
});
</script>

<template>
  <div class="app-container">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Playfair Display", serif;
  background-color: #fefefe;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 80px; 
}

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
  cursor: pointer;
  transition: all 0.3s ease;
}

.cust-but:hover {
  background-color: rgb(239, 176, 80);
  transform: translateY(-2px);
}
</style>