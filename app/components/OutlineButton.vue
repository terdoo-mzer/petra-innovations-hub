<script setup lang="ts">
defineProps<{ label: string; href?: string }>()
</script>
<template>
  <NuxtLink
    v-if="href"
    :to="href"
    class="inline-flex items-center gap-2 border border-white/[0.15] hover:border-white/[0.3] text-text-muted hover:text-text-primary px-7 py-3.5 rounded-lg text-[15px] font-medium transition-colors"
  >
    {{ label }}
  </NuxtLink>
  <button
    v-else
    class="inline-flex items-center gap-2 border border-white/[0.15] hover:border-white/[0.3] text-text-muted hover:text-text-primary px-7 py-3.5 rounded-lg text-[15px] font-medium transition-colors"
  >
    {{ label }}
  </button>
</template>
