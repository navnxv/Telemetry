<script setup>
import BodyChartArea from '../components/BodyChartArea.vue'

import { useInfoStore } from '@/stores/infoStore'

const infoStore = useInfoStore();

</script>

<template>
  <main>
    <BodyChartArea />
  </main>
</template>

<style>
  
</style>
