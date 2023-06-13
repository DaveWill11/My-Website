<script setup>
import Nav from './components/Nav.vue'
</script>

<template>
    <div>
      <Nav />
  </div>
<div>
  <p>Image Here</p>
  <RouterView :key="$route.path" />
</div>
</template>

<style scoped>

</style>
