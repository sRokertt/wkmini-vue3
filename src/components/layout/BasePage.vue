<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

defineProps({
  maxWidth: {
    type: String,
    default: 'max-w-6xl',
  },
})
</script>

<template>
  <main class="flex min-h-screen flex-col bg-[#f7f5f1] text-slate-900">
    <header :class="['mx-auto', maxWidth, 'px-8', 'pt-12', 'pb-8']">
      <AppHeader />
    </header>
    <div :class="['mx-auto', maxWidth, 'px-8', 'pb-12']">
      <slot />
    </div>
    <div class="mt-auto">
      <AppFooter />
    </div>
  </main>
</template>
