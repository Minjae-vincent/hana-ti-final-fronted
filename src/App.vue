<!-- src/App.vue -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'Hana2-Bold';
  src: url('@/assets/fonts/Hana2-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

#app {
  font-family: 'Hana2-Bold', sans-serif;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem; /* Optional: Add some padding for better look */
}
</style>
