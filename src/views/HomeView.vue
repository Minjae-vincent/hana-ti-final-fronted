<!-- src/views/home.vue -->
<script setup>
import Header from '../components/Header.vue'
import PhotoSection from '../components/PhotoSection.vue'
</script>

<template>
  <main>
    <Header />
    <div class="spacer"></div>
    <PhotoSection />
  </main>
</template>

<style scoped>
.spacer {
  height: 20px;
}
</style>
