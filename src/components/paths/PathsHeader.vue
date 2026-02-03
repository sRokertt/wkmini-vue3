<script setup>
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
    <div class="flex flex-wrap items-center gap-3">
      <Badge class="bg-slate-900 text-white">学习路径</Badge>
      <Badge variant="outline" class="border-slate-200 bg-white/70">路径导航</Badge>
      <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">可执行计划</Badge>
    </div>
    <div class="mt-5">
      <h1 class="text-3xl font-semibold">学习路径</h1>
      <p class="mt-2 text-sm text-slate-600">为不同目标提供阶段拆解与进度追踪。</p>
    </div>
  </section>
</template>
