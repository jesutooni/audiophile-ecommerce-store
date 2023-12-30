<script setup>
const navs = [
  { name: "home", path: "/" },
  { name: "headphones", path: "/" },
  { name: "speakers", path: "/" },
  { name: "earphones", path: "/" },
];
</script>

<template>
  <nav class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs">
    <NuxtLink
      v-for="nav in navs"
      :key="nav.name"
      :to="nav.path"
      class="cursor-pointer text-white hover:text-peru duration-200 ease-in-out tracking-[2px] uppercase"
      >{{ nav.name }}</NuxtLink
    >
  </nav>
</template>
