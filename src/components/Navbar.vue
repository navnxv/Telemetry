<script setup>
defineProps({
  msg: {
    required: true
  }
})
</script>

<template>
  <div class="nav-container">
    <img src="../assets/Images/brokenTree.png" width="100" height="100">
    <h1 class="title">OOA</h1>
    <nav>
        <RouterLink to="/" class="link">Dashboard</RouterLink>
    </nav>
  </div>
</template>

<style scoped>

.nav-container{
  width:100%;
}

h1 {
  font-size: 50px;
}

h3 {
  font-size: 1.2rem;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.link{
  padding-left: 40px;
  height: 50px;
  width: 100%;
}
</style>
