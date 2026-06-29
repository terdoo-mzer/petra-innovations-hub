<script setup lang="ts">
useHead({ title: 'Contact — Petra Innovations Hub' })

const submitted = ref(false)
const form = reactive({
  name: '',
  email: '',
  company: '',
  budget: '',
  message: '',
})

function handleSubmit() {
  submitted.value = true
}

const steps = [
  { num: '01', title: 'Discovery call', desc: 'A 30-min call to understand your project and goals.' },
  { num: '02', title: 'Proposal', desc: 'We send a detailed scope and pricing within 48 hours.' },
  { num: '03', title: 'Kickoff', desc: 'Team onboarding and sprint zero within 1 week.' },
]
</script>

<template>
  <div class="bg-page min-h-screen">
    <!-- Header -->
    <section class="relative pt-[72px] pb-16 overflow-hidden">
      <HeroBackground />
      <div class="relative z-10 max-w-container mx-auto px-6 pt-20">
        <SectionLabel label="CONTACT" />
        <h1 class="font-syne font-extrabold text-text-primary tracking-tight leading-tight" style="font-size: clamp(38px, 5vw, 62px)">
          Let's build something<br>
          <span style="background: linear-gradient(125deg, #4A80FF 0%, #8BAAFF 45%, #FF6035 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            great together.
          </span>
        </h1>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-28">
      <div class="max-w-container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
          <!-- Form: 3fr -->
          <div class="md:col-span-3">
            <!-- Success state -->
            <div
              v-if="submitted"
              class="bg-[rgba(59,111,255,0.07)] border border-[rgba(59,111,255,0.25)] rounded-2xl p-12 text-center"
            >
              <div class="w-16 h-16 rounded-full bg-blue-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-blue-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 class="font-syne font-extrabold text-[28px] text-text-primary mb-3">Message received!</h2>
              <p class="text-text-muted text-[16px] leading-relaxed max-w-[380px] mx-auto">
                Thank you for reaching out. We'll review your project details and get back to you within 24 hours.
              </p>
            </div>

            <!-- Form -->
            <form v-else class="space-y-5" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-[13px] font-medium text-text-muted mb-2">Full name *</label>
                  <input
                    v-model="form.name"
                    required
                    type="text"
                    placeholder="Jane Smith"
                    class="w-full bg-card border border-white/[0.1] rounded-xl px-4 py-3.5 text-text-primary text-[15px] placeholder:text-text-faint focus:outline-none focus:border-blue-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-[13px] font-medium text-text-muted mb-2">Work email *</label>
                  <input
                    v-model="form.email"
                    required
                    type="email"
                    placeholder="jane@company.com"
                    class="w-full bg-card border border-white/[0.1] rounded-xl px-4 py-3.5 text-text-primary text-[15px] placeholder:text-text-faint focus:outline-none focus:border-blue-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-[13px] font-medium text-text-muted mb-2">Company</label>
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Acme Corp"
                    class="w-full bg-card border border-white/[0.1] rounded-xl px-4 py-3.5 text-text-primary text-[15px] placeholder:text-text-faint focus:outline-none focus:border-blue-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-[13px] font-medium text-text-muted mb-2">Budget range</label>
                  <select
                    v-model="form.budget"
                    class="w-full bg-card border border-white/[0.1] rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-blue-primary/50 transition-colors appearance-none"
                    :class="form.budget ? 'text-text-primary' : 'text-text-faint'"
                  >
                    <option value="" disabled selected class="text-text-faint bg-card">Select a range</option>
                    <option value="<10k" class="bg-card text-text-primary">Under $10k</option>
                    <option value="10-25k" class="bg-card text-text-primary">$10k – $25k</option>
                    <option value="25-50k" class="bg-card text-text-primary">$25k – $50k</option>
                    <option value="50-100k" class="bg-card text-text-primary">$50k – $100k</option>
                    <option value="100k+" class="bg-card text-text-primary">$100k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-[13px] font-medium text-text-muted mb-2">Tell us about your project *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="6"
                  placeholder="Describe what you're building, your timeline, and any specific challenges or requirements..."
                  class="w-full bg-card border border-white/[0.1] rounded-xl px-4 py-3.5 text-text-primary text-[15px] placeholder:text-text-faint focus:outline-none focus:border-blue-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                :disabled="true"
                class="w-full bg-blue-primary hover:bg-blue-dark text-white py-4 rounded-xl text-[16px] font-semibold transition-colors"
              >
                Send Message →
              </button>

              <p class="text-text-faint text-[12px] text-center">
                We typically respond within 24 hours on business days.
              </p>
            </form>
          </div>

          <!-- Sidebar: 2fr -->
          <div class="md:col-span-2 space-y-5">
            <!-- Direct contact -->
            <div class="bg-card border border-white/[0.07] rounded-2xl p-7">
              <h3 class="font-syne font-bold text-text-primary text-[18px] mb-5">Direct contact</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-lg bg-blue-primary/10 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-blue-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-[12px] text-text-faint mb-0.5">Email</div>
                    <a href="mailto:hello@petrainnovations.com" class="text-text-muted hover:text-text-primary text-[14px] transition-colors">
                      hello@petrainnovations.com
                    </a>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-lg bg-blue-primary/10 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-blue-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-[12px] text-text-faint mb-0.5">Phone</div>
                    <a href="tel:+12125550100" class="text-text-muted hover:text-text-primary text-[14px] transition-colors">
                      +234 8064901390
                    </a>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-lg bg-blue-primary/10 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-blue-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-[12px] text-text-faint mb-0.5">Office</div>
                    <p class="text-text-muted text-[14px]">34, Chief Yesufu Abiodun, Oniru Lagos</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Response promise -->
            <div class="bg-card border border-white/[0.07] rounded-2xl p-7">
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="w-2.5 h-2.5 rounded-full bg-emerald-400"
                  style="animation: dot-blink 2s ease-in-out infinite"
                />
                <span class="text-emerald-400 text-[13px] font-semibold">Available now</span>
              </div>
              <h3 class="font-syne font-bold text-text-primary text-[16px] mb-2">Response within 24 hours</h3>
              <p class="text-text-muted text-[13px] leading-relaxed">
                We review every inquiry personally. Expect a thoughtful response from a senior team member — not an automated reply.
              </p>
            </div>

            <!-- What happens next -->
            <div class="bg-card border border-white/[0.07] rounded-2xl p-7">
              <h3 class="font-syne font-bold text-text-primary text-[18px] mb-5">What happens next</h3>
              <div class="space-y-5">
                <div v-for="step in steps" :key="step.num" class="flex gap-4">
                  <div class="font-syne font-extrabold text-[13px] text-blue-primary w-8 shrink-0 pt-0.5">{{ step.num }}</div>
                  <div>
                    <div class="font-semibold text-text-primary text-[14px] mb-1">{{ step.title }}</div>
                    <div class="text-text-muted text-[13px] leading-relaxed">{{ step.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
