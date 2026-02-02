<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import HomeProgress from '@/components/home/HomeProgress.vue'
import HomeCourses from '@/components/home/HomeCourses.vue'
import HomePaths from '@/components/home/HomePaths.vue'
import HomeLibrary from '@/components/home/HomeLibrary.vue'
import HomeCta from '@/components/home/HomeCta.vue'
</script>

<template>
  <main class="min-h-screen bg-[#f7f5f1] text-slate-900">
    <div class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div aria-hidden="true" class="pointer-events-none absolute -bottom-40 left-6 h-80 w-80 rounded-full bg-slate-200/70 blur-3xl" />
      <div class="relative mx-auto max-w-6xl px-6 py-12">
        <AppHeader />
        <section class="mt-10 rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
          <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <HomeHero />
            <HomeProgress />
          </div>
        </section>
        <HomeCourses />
        <HomePaths />
        <HomeLibrary />
        <HomeCta />
      </div>
    </div>
  </main>
</template>
