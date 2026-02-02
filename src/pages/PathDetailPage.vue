<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
          <div class="flex flex-wrap items-center gap-3">
            <Badge class="bg-slate-900 text-white">学习路径</Badge>
            <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">12 周</Badge>
            <Badge variant="outline" class="border-slate-200 bg-white/70">推荐</Badge>
          </div>
          <h1 class="mt-5 text-3xl font-semibold">机器学习入门路线</h1>
          <p class="mt-3 text-sm text-slate-600">
            覆盖数学基础、经典算法与实践评估，适合从零搭建机器学习知识体系。
          </p>
          <div class="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
            <Badge variant="outline">线性代数</Badge>
            <Badge variant="outline">概率统计</Badge>
            <Badge variant="outline">监督学习</Badge>
            <Badge variant="outline">评估指标</Badge>
          </div>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button class="bg-slate-900 text-white hover:bg-slate-800">开始路径</Button>
            <Button variant="outline">收藏路径</Button>
            <Button variant="outline" @click="$router.push('/paths')">返回路径列表</Button>
          </div>
        </div>

        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>路径信息</CardTitle>
            <CardDescription>建议节奏与难度</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4 text-sm text-slate-600">
            <div>
              <p class="text-xs text-slate-500">总时长</p>
              <p class="mt-1 text-lg font-semibold text-slate-900">12 周 · 48 小时</p>
            </div>
            <div>
              <p class="text-xs text-slate-500">适合人群</p>
              <p class="mt-1">从零进入机器学习方向的自学者</p>
            </div>
            <div>
              <p class="text-xs text-slate-500">学习节奏</p>
              <p class="mt-1">每周 4 小时 + 1 次练习复盘</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" class="w-full">查看课程清单</Button>
          </CardFooter>
        </Card>
    </section>

    <section class="mt-10 grid gap-4 md:grid-cols-2">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>阶段拆解</CardTitle>
            <CardDescription>按阶段推进</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3 text-sm text-slate-600">
            <div class="rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
              <p class="font-medium text-slate-800">第 1 阶段：数学基础</p>
              <p class="mt-1 text-xs text-slate-500">线代 / 概率 / 微积分</p>
            </div>
            <div class="rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
              <p class="font-medium text-slate-800">第 2 阶段：经典算法</p>
              <p class="mt-1 text-xs text-slate-500">回归 / 分类 / 聚类</p>
            </div>
            <div class="rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
              <p class="font-medium text-slate-800">第 3 阶段：评估与实践</p>
              <p class="mt-1 text-xs text-slate-500">指标 / 交叉验证 / 项目</p>
            </div>
          </CardContent>
        </Card>

        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>推荐课程</CardTitle>
            <CardDescription>路径内课程清单</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3 text-sm text-slate-600">
            <div class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
              <span>线性代数快速入门</span>
              <Button variant="ghost" size="sm" @click="$router.push('/courses/1')">进入</Button>
            </div>
            <div class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
              <span>概率与统计</span>
              <Button variant="ghost" size="sm" @click="$router.push('/courses/2')">进入</Button>
            </div>
            <div class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
              <span>机器学习基础</span>
              <Button variant="ghost" size="sm" @click="$router.push('/courses/3')">进入</Button>
            </div>
          </CardContent>
        </Card>
    </section>
  </BasePage>
</template>
