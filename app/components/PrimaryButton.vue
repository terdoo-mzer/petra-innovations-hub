<script setup lang="ts">
defineProps<{ label: string; href?: string }>()
</script>
<template>
  <NuxtLink
    v-if="href"
    :to="href"
    class="inline-flex items-center gap-2 bg-blue-primary hover:bg-blue-dark text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-colors"
  >
    {{ label }}
  </NuxtLink>
  <button
    v-else
    class="inline-flex items-center gap-2 bg-blue-primary hover:bg-blue-dark text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-colors"
  >
    {{ label }}
  </button>
</template>
