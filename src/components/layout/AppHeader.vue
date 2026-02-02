<script setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-900/20">
        W
      </div>
      <div>
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">wkmini</p>
        <p class="text-lg font-semibold">wkmini-vue3</p>
      </div>
    </div>
    <nav class="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 md:flex">
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
        to="/categories"
      >
        分类/标签
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
    <Button class="hidden md:inline-flex bg-slate-900 text-white hover:bg-slate-800">进入学习</Button>
  </header>
</template>
