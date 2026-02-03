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
  <main class="min-h-screen bg-[#f7f5f1] text-slate-900">
    <div :class="['mx-auto', maxWidth, 'px-6', 'py-12']">
      <div class="mb-8">
        <AppHeader />
      </div>
      <slot />
    </div>
    <AppFooter />
  </main>
</template>
