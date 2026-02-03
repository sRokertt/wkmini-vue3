<script setup>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <Card class="border-slate-200 bg-white/90 shadow-sm">
    <CardHeader>
      <CardTitle>今日学习进度</CardTitle>
      <CardDescription>轻量追踪，专注完成</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
        <p class="text-sm font-medium text-slate-700">当前路径</p>
        <p class="mt-1 text-lg font-semibold text-slate-900">机器学习 · 基础线性代数</p>
        <p class="mt-2 text-xs text-slate-500">下一步：向量空间与矩阵分解</p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="rounded-2xl border border-slate-200/80 bg-white/90 p-3">
          <p class="text-xs text-slate-500">本周完成</p>
          <p class="mt-2 text-xl font-semibold">6 课时</p>
        </div>
        <div class="rounded-2xl border border-slate-200/80 bg-white/90 p-3">
          <p class="text-xs text-slate-500">累计学习</p>
          <p class="mt-2 text-xl font-semibold">28 小时</p>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <router-link class="w-full" to="/lessons/2">
        <Button variant="outline" class="w-full cursor-pointer">继续上次进度</Button>
      </router-link>
    </CardFooter>
  </Card>
</template>
