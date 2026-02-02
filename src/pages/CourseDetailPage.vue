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
            <Badge class="bg-slate-900 text-white">课程详情</Badge>
            <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">进阶</Badge>
            <Badge variant="outline" class="border-slate-200 bg-white/70">12 章节</Badge>
          </div>
          <h1 class="mt-5 text-3xl font-semibold">线性代数快速入门</h1>
          <p class="mt-3 text-sm text-slate-600">
            聚焦向量、矩阵与变换的核心概念，配合可视化推导与练习题，帮助快速建立直觉。
          </p>
          <div class="mt-6 flex flex-wrap gap-3 text-xs text-slate-500">
            <Badge variant="outline">数学基础</Badge>
            <Badge variant="outline">机器学习前置</Badge>
            <Badge variant="outline">可视化推导</Badge>
          </div>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button class="bg-slate-900 text-white hover:bg-slate-800" @click="$router.push('/lessons/1')">开始学习</Button>
            <Button variant="outline">收藏课程</Button>
          </div>
        </div>

        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>课程信息</CardTitle>
            <CardDescription>学习节奏与建议</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4 text-sm text-slate-600">
            <div>
              <p class="text-xs text-slate-500">预计时长</p>
              <p class="mt-1 text-lg font-semibold text-slate-900">8 小时</p>
            </div>
            <div>
              <p class="text-xs text-slate-500">适合人群</p>
              <p class="mt-1">准备进入机器学习/数据科学的自学者</p>
            </div>
            <div>
              <p class="text-xs text-slate-500">学习建议</p>
              <p class="mt-1">每周 2-3 课时，配合笔记与练习</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" class="w-full">查看学习计划</Button>
          </CardFooter>
        </Card>
    </section>

    <section class="mt-10 grid gap-4 md:grid-cols-2">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>课程目标</CardTitle>
            <CardDescription>学完后你可以做到</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2 text-sm text-slate-600">
            <p>• 理解向量、矩阵与线性变换的几何意义</p>
            <p>• 掌握矩阵分解与特征值的应用场景</p>
            <p>• 能读懂常见机器学习模型中的线代表达</p>
          </CardContent>
        </Card>
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>课程结构</CardTitle>
            <CardDescription>章节拆解</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3 text-sm text-slate-600">
            <router-link
              class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-700 hover:border-slate-300"
              to="/lessons/1"
            >
              <span>1. 向量与空间</span>
              <span class="text-xs text-slate-400">20 分钟</span>
            </router-link>
            <router-link
              class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-700 hover:border-slate-300"
              to="/lessons/2"
            >
              <span>2. 矩阵与线性变换</span>
              <span class="text-xs text-slate-400">35 分钟</span>
            </router-link>
            <router-link
              class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-700 hover:border-slate-300"
              to="/lessons/3"
            >
              <span>3. 特征值与分解</span>
              <span class="text-xs text-slate-400">40 分钟</span>
            </router-link>
          </CardContent>
        </Card>
    </section>

    <section class="mt-10">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>推荐资料</CardTitle>
            <CardDescription>课程配套内容</CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4 md:grid-cols-3">
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-sm font-medium">公式速查卡</p>
              <p class="mt-2 text-xs text-slate-500">常用矩阵运算</p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-sm font-medium">练习题集</p>
              <p class="mt-2 text-xs text-slate-500">含答案解析</p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-sm font-medium">可视化讲义</p>
              <p class="mt-2 text-xs text-slate-500">图示与动画</p>
            </div>
          </CardContent>
        </Card>
    </section>
  </BasePage>
</template>
