<script setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>

<template>
  <div>
    <div class="flex flex-wrap items-center gap-3">
      <Badge class="bg-slate-900 text-white">v1.0 MVP</Badge>
      <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">结构化学习</Badge>
      <Badge variant="outline" class="border-slate-200 bg-white/70">用户端体验</Badge>
    </div>
    <h1 class="mt-4 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
      面向自学者的
      <span class="block text-slate-700">结构化课程平台</span>
    </h1>
    <p class="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
      围绕课程-章节-文章构建清晰学习路径，提供可复用资料与节奏追踪，让学习目标可执行、可复盘。
    </p>
    <div class="mt-6 grid gap-3 sm:grid-cols-3">
      <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
        <p class="text-xs font-medium text-slate-500">重点覆盖</p>
        <p class="mt-2 text-lg font-semibold">高频课程</p>
      </div>
      <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
        <p class="text-xs font-medium text-slate-500">知识路径</p>
        <p class="mt-2 text-lg font-semibold">可执行规划</p>
      </div>
      <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
        <p class="text-xs font-medium text-slate-500">资料沉淀</p>
        <p class="mt-2 text-lg font-semibold">可复用模板</p>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
      <Badge variant="outline">数学</Badge>
      <Badge variant="outline">数据结构</Badge>
      <Badge variant="outline">线性代数</Badge>
      <Badge variant="outline">机器学习</Badge>
    </div>
  </div>
</template>
