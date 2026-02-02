<script setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <section class="mt-14">
    <Card class="border-slate-200/80 bg-white/80">
      <CardHeader>
        <CardTitle>资料库</CardTitle>
        <CardDescription>聚合可复用的学习资料与工具</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4 md:grid-cols-3">
        <div class="rounded-2xl border border-slate-200/80 bg-white/80 p-4">
          <p class="text-sm font-medium">高频公式卡片</p>
          <p class="mt-2 text-xs text-slate-500">适合碎片时间复习</p>
        </div>
        <div class="rounded-2xl border border-slate-200/80 bg-white/80 p-4">
          <p class="text-sm font-medium">算法模板库</p>
          <p class="mt-2 text-xs text-slate-500">常用套路快速查找</p>
        </div>
        <div class="rounded-2xl border border-slate-200/80 bg-white/80 p-4">
          <p class="text-sm font-medium">项目实践清单</p>
          <p class="mt-2 text-xs text-slate-500">从需求到交付的步骤</p>
        </div>
      </CardContent>
    </Card>
  </section>
</template>
