<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'

defineProps({
  maxWidth: {
    type: String,
    default: 'max-w-6xl',
  },
})
</script>

<template>
  <main class="min-h-screen bg-[#f7f5f1] px-6 py-12 text-slate-900">
    <div :class="['mx-auto', maxWidth]">
      <div class="mb-8">
        <AppHeader />
      </div>
      <slot />
    </div>
  </main>
</template>
