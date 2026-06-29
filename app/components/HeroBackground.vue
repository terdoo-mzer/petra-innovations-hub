<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Orb 1 -->
    <div
      class="absolute rounded-full"
      style="
        width: 820px; height: 820px;
        top: -300px; left: -200px;
        background: radial-gradient(circle at 40% 40%, rgba(59,111,255,0.22) 0%, transparent 65%);
        animation: pulse-orb 9s ease-in-out infinite;
      "
    />
    <!-- Orb 2 -->
    <div
      class="absolute rounded-full"
      style="
        width: 920px; height: 920px;
        bottom: -300px; right: -240px;
        background: radial-gradient(circle at 60% 60%, rgba(255,96,53,0.13) 0%, transparent 65%);
        animation: pulse-orb 12s ease-in-out 3s infinite;
      "
    />
    <!-- Grid -->
    <div
      class="absolute inset-0"
      style="
        background-image: linear-gradient(rgba(59,111,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,111,255,0.04) 1px, transparent 1px);
        background-size: 68px 68px;
      "
    />
  </div>
</template>
