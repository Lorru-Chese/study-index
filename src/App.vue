<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.id;

</script>

<template>
  <div>
    <div>
    <h1>User Page</h1>
    <p>User ID: {{ userId }}</p>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
