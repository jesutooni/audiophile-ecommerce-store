<script setup lang="ts">
interface Props {
  theme?: "primary" | "secondary" | "transparent";
  text: string;
}
const { theme, text } = withDefaults(defineProps<Props>(), {
  theme: "primary",
  text: "",
});

const themes = {
  primary: "bg-peru hover:bg-peru-light text-white",
  secondary: "border border-black text-black hover:bg-black hover:text-white",
  transparent: "text-black-500 hover:text-peru",
};
</script>

<template>
  <button
    class="py-4 px-7 font-bold text-xs uppercase transition-colors duration-300 ease-in-out flex items-center gap-1"
    :class="themes[theme]"
  >
    {{ text }}
    <Icon
      v-if="theme === 'transparent'"
      name="ph:caret-right-bold"
      color="#D87D4A"
      size="1.25em"
    />
  </button>
</template>
