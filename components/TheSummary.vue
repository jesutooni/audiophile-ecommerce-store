<script setup lang="ts"></script>

<template>
  <section class="max-w-screen-xl mx-auto px-10 py-24 md:py-28">
    <div
      class="flex flex-col-reverse md:flex-row items-center justify-between gap-16"
    >
      <div class="max-w-xl md:max-w-sm lg:max-w-md text-center md:text-left">
        <h4
          class="text-[28px] leading-normal tracking-[1px] sm:text-[40px] sm:leading-[44px] md:leading-9 md:text-3xl lg:text-[40px] lg:leading-[44px] sm:tracking-[1.5px] uppercase font-bold"
        >
          Bringing you the <span class="text-peru"> best</span> audio gear
        </h4>
        <p class="mt-8 text-black-500 text-[15px] leading-6">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div class="rounded-md overflow-hidden">
        <img
          class="hidden md:block"
          src="/images/summary-image-desktop.svg"
          alt="user on headphones"
        />
        <img
          class="hidden sm:block md:hidden"
          src="/images/summary-image-tablet.svg"
          alt="user on headphones"
        />
        <img
          class="sm:hidden"
          src="/images/summary-image-mobile.svg"
          alt="user on headphones"
        />
      </div>
    </div>
  </section>
</template>
