<template>
  <div class="about-page">
    <h1>{{ pageTitle }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "О нас";
const description = "Страница с информацией о компании";
</script>

<style scoped>
.about-page {
  padding: 2rem;
}
</style>