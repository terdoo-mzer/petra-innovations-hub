<script setup lang="ts">
defineProps<{ label: string }>()
</script>
<template>
  <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] mb-6">
    <span class="text-[11px] font-syne font-bold tracking-[0.15em] text-text-muted uppercase">{{ label }}</span>
  </div>
</template>
