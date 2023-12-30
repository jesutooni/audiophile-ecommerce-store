<script setup lang="ts"></script>

<template>
  <footer class="bg-black-900 pt-12 sm:pt-[60px] md:pt-[75px] pb-12">
    <div class="max-w-screen-xl mx-auto px-10">
      <div
        class="flex flex-col md:flex-row gap-8 items-center sm:items-start justify-between"
      >
        <AppLogo />
        <AppNavLinks />
      </div>
      <div class="mt-12 sm:mt-9 flex justify-between">
        <p
          class="text-white opacity-50 md:max-w-[540px] text-[15px] text-center sm:text-left"
        >
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <SocialIcons class="self-end hidden md:flex" />
      </div>
      <div
        class="mt-20 md:mt-16 flex flex-col sm:flex-row gap-12 justify-between items-center"
      >
        <p class="text-white text-sm font-bold opacity-50">
          Copyright {{ new Date().getFullYear() }}. All Rights Reserved
        </p>
        <SocialIcons class="md:hidden" />
      </div>
    </div>
  </footer>
</template>
