<!-- src/views/home.vue -->
<script setup>
import Header from '../components/Header.vue'
import MyHouseSection from '../components/MyHouseSection.vue'
import ExchangeRateSection from '../components/ExchangeRateSection.vue'
import TravelHouseSection from '../components/TravelHouseSection.vue'
import Footer from '../components/Footer.vue'

const handleIntersection = (entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible')
  }
}
</script>

<template>
  <main class="main-content">
    <Header />
    <div class="spacer"></div>
    <MyHouseSection v-intersect="handleIntersection" />
    <div class="spacer-section"></div>
    <ExchangeRateSection v-intersect="handleIntersection" />
    <div class="spacer-section"></div>
    <TravelHouseSection v-intersect="handleIntersection" />
    <!-- <div class="spacer-footer"></div> -->
    <Footer />
  </main>
</template>

<style scoped>
.spacer {
  height: 20px;
}

.spacer-section {
  height: 168px;
}

.spacer-footer {
  height: 108px;
}

.main-content {
  padding-top: 80px; /* Adjust based on header height to prevent overlap */
}
</style>
