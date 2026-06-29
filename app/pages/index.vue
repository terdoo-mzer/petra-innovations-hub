<script setup lang="ts">
useHead({ title: 'Petra Innovations Hub — Software Development Agency' })

const stats = [
  { value: '8+', label: 'Years in business' },
  { value: '200+', label: 'Projects delivered' },
  { value: '50+', label: 'Expert engineers' },
  { value: '98%', label: 'Client satisfaction' },
]

const trustedBy = ['MERIDIAN BANK', 'NOVA HEALTH', 'VERTEX RETAIL', 'ATLAS LOGISTICS', 'CROWN MEDIA', 'SUMMIT GOV']

const missionStats = [
  { value: '$2.1B+', label: 'Client revenue generated', blue: false },
  { value: '15+', label: 'Countries served', blue: false },
  { value: '40+', label: 'Enterprise clients', blue: false },
  { value: '4', label: 'Global offices', blue: true },
]

const services = [
  {
    title: 'Mobile Development',
    desc: 'Native and cross-platform apps for iOS and Android that users love.',
    icon: 'M12 18.178l-4.62-1.256-.328-3.544h2.27l.157 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.28H8.822l.204 2.129h8.217l-.624 6.799L12 18.178z',
    color: 'rgba(59,111,255,0.12)',
    iconColor: '#3B6FFF',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    title: 'API Integration',
    desc: 'Seamlessly connect your systems with robust, scalable API architectures.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: 'rgba(139,92,246,0.12)',
    iconColor: '#8B5CF6',
    tags: ['REST', 'GraphQL', 'WebSockets', 'gRPC'],
  },
  {
    title: 'E-commerce',
    desc: 'High-performance storefronts and marketplaces built to convert.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    color: 'rgba(20,184,166,0.12)',
    iconColor: '#14B8A6',
    tags: ['Shopify', 'Commerce.js', 'Stripe', 'Next.js'],
  },
  {
    title: 'Web Application Dev',
    desc: 'Full-stack web applications engineered for performance and scale.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: 'rgba(59,111,255,0.12)',
    iconColor: '#3B6FFF',
    tags: ['Vue', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastructure that scales with you — automated, reliable, secure.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    color: 'rgba(99,102,241,0.12)',
    iconColor: '#6366F1',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
  },
  {
    title: 'UI/UX Design',
    desc: 'Interfaces that are as beautiful as they are functional.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: 'rgba(236,72,153,0.12)',
    iconColor: '#EC4899',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
  },
]

const projects = [
  {
    name: 'FinVault',
    category: 'Fintech',
    type: 'Web + Mobile',
    desc: 'A next-generation personal finance platform with AI-powered insights and real-time portfolio tracking.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    gradientFrom: '#1a1f3a',
    gradientTo: '#0d1526',
    accentColor: '#3B6FFF',
  },
  {
    name: 'Nexus Commerce',
    category: 'E-commerce',
    type: 'Marketplace',
    desc: 'A multi-vendor marketplace platform processing $50M+ in monthly transactions across 12 countries.',
    tech: ['Vue.js', 'Python', 'Redis', 'Stripe'],
    gradientFrom: '#1a2a1a',
    gradientTo: '#0d1a0d',
    accentColor: '#14B8A6',
  },
  {
    name: 'Atlas Gov',
    category: 'Government',
    type: 'Enterprise',
    desc: 'Digital transformation platform for municipal services, serving 2M+ citizens across 8 cities.',
    tech: ['Angular', 'Java Spring', 'Oracle', 'Azure'],
    gradientFrom: '#2a1a2a',
    gradientTo: '#1a0d1a',
    accentColor: '#8B5CF6',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center pt-[72px] bg-page overflow-hidden">
      <HeroBackground />
      <div class="relative z-10 max-w-container mx-auto px-6 py-24">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.04] mb-10">
          <span
            class="w-2 h-2 rounded-full bg-[#3B6FFF]"
            style="animation: dot-blink 2s ease-in-out infinite"
          />
          <span class="text-[13px] font-medium text-text-muted">Now accepting new projects — Q3 2025</span>
        </div>

        <!-- H1 -->
        <h1
          class="font-syne font-extrabold leading-[1.02] tracking-[-3px] mb-8"
          style="font-size: clamp(54px, 7vw, 96px)"
        >
          <span class="block text-text-primary">We build</span>
          <span
            class="block"
            style="background: linear-gradient(125deg, #4A80FF 0%, #8BAAFF 45%, #FF6035 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
          >software</span>
          <span class="block text-text-primary">that scales.</span>
        </h1>

        <p class="text-text-muted text-[18px] leading-relaxed max-w-[580px] mb-12">
          We partner with ambitious companies to design, build, and scale software products that define industries.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 mb-20">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 bg-blue-primary hover:bg-blue-dark text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-colors"
          >
            Start Your Project →
          </NuxtLink>
          <a
            href="#projects"
            class="inline-flex items-center gap-2 border border-white/[0.15] hover:border-white/[0.3] text-text-muted hover:text-text-primary px-7 py-3.5 rounded-lg text-[15px] font-medium transition-colors"
          >
            View Our Work
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.value">
            <div class="font-syne font-extrabold text-[42px] text-text-primary leading-none mb-1">{{ stat.value }}</div>
            <div class="text-text-muted text-[14px]">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By -->
    <section class="bg-card border-y border-white/[0.05] py-7">
      <div class="max-w-container mx-auto px-6 flex flex-wrap items-center gap-8 md:gap-12">
        <span class="text-[11px] font-syne font-bold tracking-[0.15em] text-text-faint uppercase shrink-0">TRUSTED BY</span>
        <div class="flex flex-wrap gap-8 md:gap-12">
          <span
            v-for="company in trustedBy"
            :key="company"
            class="font-syne font-bold text-[15px] text-white/20"
          >{{ company }}</span>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="bg-card py-28">
      <div class="max-w-container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <!-- Left -->
          <div>
            <SectionLabel label="ABOUT US" />
            <h2 class="font-syne font-extrabold text-[42px] leading-tight tracking-tight text-text-primary mb-6">
              Built on precision.<br>Driven by results.
            </h2>
            <p class="text-text-muted text-[16px] leading-relaxed mb-4">
              Since 2016, Petra Innovations Hub has been at the forefront of software development, delivering cutting-edge solutions that drive measurable business outcomes for our clients.
            </p>
            <p class="text-text-muted text-[16px] leading-relaxed mb-8">
              Our team of expert engineers, designers, and strategists work as an extension of your team — bringing technical excellence and business acumen to every engagement.
            </p>
            <a href="/contact" class="text-blue-primary hover:text-blue-light font-semibold text-[15px] transition-colors">
              Work with us →
            </a>
          </div>

          <!-- Right: Stats grid -->
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="stat in missionStats"
              :key="stat.value"
              class="p-7 rounded-2xl border"
              :class="stat.blue
                ? 'bg-[rgba(59,111,255,0.07)] border-[rgba(59,111,255,0.18)]'
                : 'bg-page border-white/[0.07]'"
            >
              <div class="font-syne font-extrabold text-[38px] text-text-primary leading-none mb-2">{{ stat.value }}</div>
              <div class="text-text-muted text-[14px]">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="bg-page py-28">
      <div class="max-w-container mx-auto px-6">
        <div class="text-center mb-16">
          <SectionLabel label="OUR SERVICES" />
          <h2 class="font-syne font-extrabold text-[42px] tracking-tight text-text-primary">
            Everything you need to ship.
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-white/[0.05] rounded-2xl overflow-hidden"
        >
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-page p-9 hover:bg-[#080D1F] transition-colors"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              :style="{ background: service.color }"
            >
              <svg width="22" height="22" fill="none" :stroke="service.iconColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" />
              </svg>
            </div>
            <h3 class="font-syne font-bold text-[18px] text-text-primary mb-3">{{ service.title }}</h3>
            <p class="text-text-muted text-[14px] leading-relaxed mb-5">{{ service.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in service.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.07] text-[12px] text-text-subtle"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects -->
    <section id="projects" class="bg-card py-28">
      <div class="max-w-container mx-auto px-6">
        <div class="flex justify-between items-end mb-14">
          <div>
            <SectionLabel label="RECENT PROJECTS" />
            <h2 class="font-syne font-extrabold text-[42px] tracking-tight text-text-primary">
              Our recent work.
            </h2>
          </div>
          <a href="#" class="text-text-muted hover:text-text-primary text-[14px] font-medium transition-colors hidden md:block">
            View all projects →
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="project in projects"
            :key="project.name"
            class="bg-page rounded-2xl border border-white/[0.07] overflow-hidden hover:border-white/[0.14] transition-colors"
          >
            <!-- Preview area -->
            <div
              class="h-[220px] relative overflow-hidden"
              :style="`background: linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`"
            >
              <!-- Abstract UI skeleton -->
              <div class="absolute inset-4 flex flex-col gap-2">
                <div class="h-2.5 rounded w-3/4 opacity-30" :style="`background: ${project.accentColor}`" />
                <div class="h-2 rounded w-1/2 bg-white/10" />
                <div class="flex gap-2 mt-3">
                  <div class="flex-1 h-16 rounded-lg bg-white/5 border border-white/10" />
                  <div class="flex-1 h-16 rounded-lg bg-white/5 border border-white/10" />
                </div>
                <div class="h-2 rounded w-full bg-white/10 mt-2" />
                <div class="h-2 rounded w-4/5 bg-white/10" />
              </div>
              <!-- Corner accent -->
              <div
                class="absolute top-4 right-4 w-8 h-8 rounded-lg"
                :style="`background: ${project.accentColor}30`"
              />
            </div>

            <div class="p-7">
              <div class="flex gap-2 mb-4">
                <span class="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.07] text-[11px] text-text-subtle font-medium">{{ project.category }}</span>
                <span class="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.07] text-[11px] text-text-subtle font-medium">{{ project.type }}</span>
              </div>
              <h3 class="font-syne font-bold text-[20px] text-text-primary mb-2">{{ project.name }}</h3>
              <p class="text-text-muted text-[13px] leading-relaxed mb-5">{{ project.desc }}</p>
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="text-[11px] text-text-faint"
                >{{ tech }} ·</span>
              </div>
              <a
                href="#"
                class="text-blue-primary hover:text-blue-light text-[13px] font-semibold transition-colors"
              >Case Study →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="bg-page py-20">
      <div class="max-w-container mx-auto px-6">
        <div class="bg-gradient-to-br from-[rgba(59,111,255,0.12)] to-[rgba(59,111,255,0.04)] border border-[rgba(59,111,255,0.2)] rounded-2xl p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 class="font-syne font-extrabold text-[38px] tracking-tight text-text-primary mb-3">
              Ready to build something great?
            </h2>
            <p class="text-text-muted text-[16px] max-w-[480px]">
              Let's talk about your project. We'll help you define the scope, plan the execution, and deliver results.
            </p>
          </div>
          <div class="flex gap-4 shrink-0">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 bg-blue-primary hover:bg-blue-dark text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-colors whitespace-nowrap"
            >
              Start a Project
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="inline-flex items-center gap-2 border border-white/[0.15] hover:border-white/[0.3] text-text-muted hover:text-text-primary px-7 py-3.5 rounded-lg text-[15px] font-medium transition-colors whitespace-nowrap"
            >
              View Pricing
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
