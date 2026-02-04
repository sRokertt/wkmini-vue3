<script setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <header class="grid w-full items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
    <div class="flex items-center gap-3 px-4 py-2 md:justify-self-start">
      <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-900/20">
        W
      </div>
      <div>
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">wkmini</p>
        <p class="text-lg font-semibold">wkmini-vue3</p>
      </div>
    </div>
    <nav class="hidden items-center justify-center gap-6 px-6 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 md:flex">
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/"
      >
        首页
      </router-link>
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/courses"
      >
        课程
      </router-link>
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/paths"
      >
        学习路径
      </router-link>
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/library"
      >
        资料库
      </router-link>
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/about"
      >
        关于
      </router-link>
    </nav>
    <div class="hidden px-3 py-2 md:flex md:justify-self-end">
      <router-link to="/courses">
        <Button class="bg-slate-900 text-white hover:bg-slate-800">进入学习</Button>
      </router-link>
    </div>
  </header>
</template>
