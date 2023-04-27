
<script setup>
import navBar from './components/navBar.vue'


</script>

<template>
  <div class="nav-parent">
    <navBar msg="00A"/>
  </div>

  <RouterView width="80%"/>
</template>

<style scoped>
.nav-parent {
  display:flex;
  line-height: 1.5;
  max-height: 100vh;
  background-color: #c8f0a2;
  width:20%;
  height: 1000px;
  position: absolute;
  overflow: auto;
}

.wrapper {
  padding: 20px;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

img{
  float: left;
  height: 100px;
}


nav :hover {
  background-color: #fafffa;
}

</style>
