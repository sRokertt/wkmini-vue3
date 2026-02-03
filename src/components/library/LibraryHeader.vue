<script setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>

<template>
  <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
    <div class="flex flex-wrap items-center gap-3">
      <Badge class="bg-slate-900 text-white">资料库</Badge>
      <Badge variant="outline" class="border-slate-200 bg-white/70">模板沉淀</Badge>
      <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">可复用</Badge>
    </div>
    <div class="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 class="text-3xl font-semibold">资料库</h1>
        <p class="mt-2 text-sm text-slate-600">沉淀模板、清单与工具，支持学习复盘与复用。</p>
      </div>
      <div class="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
        <Input class="bg-white/80" placeholder="搜索资料、模板、清单" />
        <Button class="bg-slate-900 text-white hover:bg-slate-800">开始检索</Button>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
      <Badge variant="outline">公式速查</Badge>
      <Badge variant="outline">算法模板</Badge>
      <Badge variant="outline">项目清单</Badge>
      <Badge variant="outline">学习方法论</Badge>
    </div>
  </section>
</template>
