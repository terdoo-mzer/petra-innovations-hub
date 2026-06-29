<script setup lang="ts">
useHead({ title: 'Pricing — Petra Innovations Hub' })

const annual = ref(false)

const plans = computed(() => [
  {
    name: 'Starter',
    desc: 'Perfect for early-stage startups and small projects.',
    price: annual.value ? 2000 : 2500,
    features: [
      'Up to 2 engineers',
      'Web or mobile app',
      'Weekly sprint reviews',
      'Slack communication',
      'Basic analytics dashboard',
      '30-day support post-launch',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    desc: 'For scaling companies that need a full product team.',
    price: annual.value ? 6000 : 7500,
    features: [
      'Up to 6 engineers',
      'Web + mobile + backend',
      'Daily standups',
      'Dedicated project manager',
      'Advanced analytics & reporting',
      '90-day support post-launch',
      'Priority response SLA',
      'Custom integrations',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    desc: 'Tailored engagements for large-scale, complex products.',
    price: null,
    features: [
      'Unlimited engineers',
      'Full-stack product development',
      'Embedded team model',
      'Executive sponsorship',
      'Custom SLAs & contracts',
      'Dedicated infrastructure',
      '24/7 support',
      'On-site workshops',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
])

const trust = [
  { icon: '🔒', title: 'No lock-in contracts', desc: 'Month-to-month flexibility. Cancel anytime with 30-day notice.' },
  { icon: '💳', title: 'Transparent billing', desc: 'No hidden fees. What you see is what you pay, every month.' },
  { icon: '🚀', title: 'Start in 48 hours', desc: 'Onboarding is fast. We can have a team spinning up within 2 days.' },
]

const faqs = [
  {
    q: 'What does the monthly price include?',
    a: 'Each plan includes dedicated engineering resources, project management, weekly or daily check-ins, and post-launch support. All communication tools and development environments are included.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes. You can change plans at any time. Upgrades take effect immediately; downgrades take effect at the start of the next billing period.',
  },
  {
    q: 'How does the annual discount work?',
    a: 'Choosing annual billing saves you 20% compared to monthly billing. The full annual amount is invoiced upfront at the start of each year.',
  },
  {
    q: 'What if my project has unique requirements?',
    a: 'Enterprise plans are fully customized to your needs. Reach out to our sales team and we\'ll scope a tailored engagement for you.',
  },
]
</script>

<template>
  <div class="bg-page min-h-screen">
    <!-- Header -->
    <section class="relative pt-[72px] pb-20 overflow-hidden">
      <HeroBackground />
      <div class="relative z-10 max-w-container mx-auto px-6 pt-20 text-center">
        <SectionLabel label="PRICING" />
        <h1 class="font-syne font-extrabold text-[54px] tracking-tight text-text-primary mb-5">
          Simple, transparent pricing.
        </h1>
        <p class="text-text-muted text-[18px] max-w-[520px] mx-auto mb-10">
          No surprises. No hidden fees. Just great engineering at a price that makes sense.
        </p>

        <!-- Toggle -->
        <div class="inline-flex items-center gap-3 p-1 rounded-xl bg-white/[0.05] border border-white/[0.08]">
          <button
            class="px-5 py-2 rounded-lg text-[14px] font-semibold transition-all"
            :class="!annual ? 'bg-blue-primary text-white' : 'text-text-muted hover:text-text-primary'"
            @click="annual = false"
          >
            Monthly
          </button>
          <button
            class="px-5 py-2 rounded-lg text-[14px] font-semibold transition-all flex items-center gap-2"
            :class="annual ? 'bg-blue-primary text-white' : 'text-text-muted hover:text-text-primary'"
            @click="annual = true"
          >
            Annual
            <span class="text-[11px] px-1.5 py-0.5 rounded-md" :class="annual ? 'bg-white/20 text-white' : 'bg-blue-primary/20 text-blue-light'">
              Save 20%
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pb-24">
      <div class="max-w-container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="plan in plans"
            :key="plan.name"
            class="rounded-2xl border p-8 flex flex-col relative"
            :class="plan.featured
              ? 'bg-[rgba(59,111,255,0.07)] border-[rgba(59,111,255,0.3)]'
              : 'bg-card border-white/[0.07]'"
          >
            <!-- Most popular badge -->
            <div
              v-if="plan.featured"
              class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-primary text-white text-[11px] font-bold tracking-wider"
            >
              MOST POPULAR
            </div>

            <h3 class="font-syne font-bold text-[22px] text-text-primary mb-2">{{ plan.name }}</h3>
            <p class="text-text-muted text-[14px] mb-6">{{ plan.desc }}</p>

            <div class="mb-8">
              <template v-if="plan.price">
                <span class="font-syne font-extrabold text-[48px] text-text-primary">${{ plan.price.toLocaleString() }}</span>
                <span class="text-text-muted text-[14px] ml-1">/month</span>
              </template>
              <span v-else class="font-syne font-extrabold text-[36px] text-text-primary">Custom</span>
            </div>

            <ul class="space-y-3 mb-8 flex-1">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
                <svg class="w-4 h-4 mt-0.5 shrink-0" :class="plan.featured ? 'text-blue-primary' : 'text-text-subtle'" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-text-muted text-[14px]">{{ feature }}</span>
              </li>
            </ul>

            <NuxtLink
              to="/contact"
              class="w-full text-center py-3.5 rounded-lg text-[15px] font-semibold transition-colors"
              :class="plan.featured
                ? 'bg-blue-primary hover:bg-blue-dark text-white'
                : 'border border-white/[0.15] hover:border-white/[0.3] text-text-muted hover:text-text-primary'"
            >
              {{ plan.cta }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust indicators -->
    <section class="pb-24">
      <div class="max-w-container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="item in trust"
            :key="item.title"
            class="bg-card border border-white/[0.07] rounded-xl p-6 flex items-start gap-4"
          >
            <span class="text-2xl">{{ item.icon }}</span>
            <div>
              <h4 class="font-syne font-bold text-text-primary text-[16px] mb-1">{{ item.title }}</h4>
              <p class="text-text-muted text-[13px] leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="pb-28">
      <div class="max-w-container mx-auto px-6">
        <div class="text-center mb-14">
          <SectionLabel label="FAQ" />
          <h2 class="font-syne font-extrabold text-[38px] tracking-tight text-text-primary">
            Common questions.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[860px] mx-auto">
          <div
            v-for="faq in faqs"
            :key="faq.q"
            class="bg-card border border-white/[0.07] rounded-xl p-7"
          >
            <h4 class="font-syne font-bold text-text-primary text-[16px] mb-3">{{ faq.q }}</h4>
            <p class="text-text-muted text-[14px] leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
