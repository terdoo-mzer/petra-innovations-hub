<template>
  <footer class="bg-card border-t border-white/[0.06] pt-16 pb-0">
    <div class="max-w-container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
        <!-- Brand -->
        <div>
          <div class="font-syne font-extrabold text-[18px] text-text-primary mb-3">
            PETR<span class="text-[#3B6FFF]">A</span> INNOVATIONS HUB
          </div>
          <p class="text-text-muted text-sm leading-relaxed mb-6">
            Building software that defines industries. Trusted by ambitious companies worldwide.
          </p>
          <!-- <div class="flex gap-4">
            <a href="#" class="text-text-faint hover:text-text-primary transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>
            <a href="#" class="text-text-faint hover:text-text-primary transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="#" class="text-text-faint hover:text-text-primary transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div> -->
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-syne font-bold text-text-primary text-sm mb-5 tracking-wider uppercase">Company</h4>
          <ul class="space-y-3">
            <li v-for="link in ['About', 'Careers', 'Blog', 'Press']" :key="link">
              <a href="#" class="text-text-muted hover:text-text-primary text-sm transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-syne font-bold text-text-primary text-sm mb-5 tracking-wider uppercase">Services</h4>
          <ul class="space-y-3">
            <li v-for="link in ['Web Development', 'Mobile Apps', 'Cloud & DevOps', 'UI/UX Design', 'API Integration']" :key="link">
              <a href="#" class="text-text-muted hover:text-text-primary text-sm transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-syne font-bold text-text-primary text-sm mb-5 tracking-wider uppercase">Contact</h4>
          <ul class="space-y-3">
            <li class="text-text-muted text-sm">hello@petrainnovations.com</li>
            <li class="text-text-muted text-sm">+234 8064901390</li>
            <li class="text-text-muted text-sm mt-2">34, Chief Yesufu Abiodun<br>Oniru, Lagos</li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/[0.06] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-text-faint text-sm">© 2026 Petra Innovations Hub. All rights reserved.</p>
        <p class="text-text-faint text-sm">Lagos</p>
      </div>
    </div>
  </footer>
</template>
