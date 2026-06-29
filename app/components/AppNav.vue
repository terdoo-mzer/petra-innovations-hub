<script setup lang="ts">
const route = useRoute()
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 30
  })
})

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

function isActive(href: string) {
  if (href.startsWith('/#')) return route.path === '/'
  return route.path === href
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-[rgba(5,9,18,0.94)] backdrop-blur-xl border-b border-white/[0.07]'
      : 'bg-transparent'"
    style="height:72px"
  >
    <div class="max-w-container mx-auto px-6 h-full flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="font-syne font-extrabold text-[21px] tracking-tight text-text-primary">
        PETR<span class="text-[#3B6FFF]">A</span> INNOVATIONS HUB
      </NuxtLink>

      <!-- Nav Links -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-[14px] font-medium px-[14px] py-2 rounded-[7px] transition-colors"
          :class="isActive(link.href)
            ? 'text-text-primary bg-white/[0.07]'
            : 'text-text-muted hover:text-text-primary hover:bg-white/[0.07]'"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- CTA -->
      <NuxtLink
        to="/contact"
        class="bg-blue-primary hover:bg-blue-dark text-white px-6 py-[10px] rounded-lg text-[14px] font-semibold transition-colors"
      >
        Get a Quote
      </NuxtLink>
    </div>
  </nav>
</template>
