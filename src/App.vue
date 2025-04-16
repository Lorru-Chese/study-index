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
    <div class="bg-blue-500 text-red p-4 rounded-lg">
      <p class="text-lg font-bold">這是使用 Tailwind CSS 的範例。</p>
    </div>
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
