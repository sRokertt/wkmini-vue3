<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useAuthStore } from '@/stores/authStore'

defineProps({
  maxWidth: {
    type: String,
    default: 'max-w-6xl',
  },
})

const authStore = useAuthStore()
onMounted(() => {
  authStore.init()
})
</script>

<template>
  <main class="flex min-h-screen flex-col bg-[#f7f5f1] text-slate-900">
    <header
      :class="[
        'mx-auto',
        'relative',
        'z-50',
        'w-full',
        maxWidth,
        'px-8',
        'md:px-12',
        'lg:px-20',
        'pt-12',
        'pb-8',
      ]"
    >
      <AppHeader />
    </header>
    <div :class="['mx-auto', 'relative', 'z-10', 'w-full', maxWidth, 'px-8', 'md:px-12', 'lg:px-20', 'pb-12']">
      <slot />
    </div>
    <div class="mt-auto">
      <AppFooter />
    </div>
  </main>
</template>
