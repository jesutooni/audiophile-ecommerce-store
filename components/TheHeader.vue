<script setup lang="ts"></script>

<template>
  <header class="bg-black-900">
    <div class="px-10 max-w-screen-xl mx-auto">
      <div
        class="py-9 flex items-center justify-between border-b border-[#FFFFFF33]"
      >
        <div class="flex gap-10 items-center">
          <div class="lg:hidden">
            <Icon name="ci:hamburger" color="white" size="2em" />
          </div>
          <AppLogo class="hidden sm:block" />
        </div>
        <div>
          <AppLogo class="sm:hidden" />
          <AppNavLinks class="hidden lg:flex" />
        </div>
        <Icon
          name="material-symbols-light:shopping-cart-outline-rounded"
          color="white"
          size="1.75em"
          class="cursor-pointer"
        />
      </div>
    </div>
  </header>
</template>
