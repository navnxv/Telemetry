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
  main {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    margin-left: 20%;
  }
</style>
