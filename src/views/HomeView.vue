<!-- src/views/home.vue -->
<script setup>
import MyHouseSection from '../components/MyHouseSection.vue'
import ExchangeRateSection from '../components/ExchangeRateSection.vue'
import TravelHouseSection from '../components/TravelHouseSection.vue'

const handleIntersection = (entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible')
  }
}
</script>

<template>
  <div class="container">
    <div class="spacer"></div>
    <MyHouseSection v-intersect="handleIntersection" />
    <div class="spacer-section"></div>
    <ExchangeRateSection v-intersect="handleIntersection" />
    <div class="spacer-section"></div>
    <TravelHouseSection v-intersect="handleIntersection" />
  </div>
</template>

<style scoped>
.spacer {
  height: 20px;
}

.spacer-section {
  height: 168px;
}
</style>
