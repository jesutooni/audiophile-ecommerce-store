<script setup lang="ts">
const icons = ["facebook", "twitter", "instagram"];
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <img
      v-for="icon in icons"
      :key="icon"
      :src="`/images/icons/${icon}.svg`"
      :alt="`${icon}-logo`"
      class="cursor-pointer"
    />
  </div>
</template>
