<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">课程学习计划</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">线性代数快速入门</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">8 小时</Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">课程学习计划</h1>
        <p class="mt-3 text-sm text-slate-600">
          聚焦向量、矩阵、线性变换与特征值，拆解为可执行节奏，适合 2-3 周完成。
        </p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <router-link to="/courses/1">
            <Button variant="outline">返回课程详情</Button>
          </router-link>
          <router-link to="/lessons/1">
            <Button class="bg-slate-900 text-white hover:bg-slate-800">开始第一课</Button>
          </router-link>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>学习节奏</CardTitle>
          <CardDescription>建议每周 2-3 课时</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4 text-sm text-slate-600">
          <div>
            <p class="text-xs text-slate-500">总周期</p>
            <p class="mt-1 text-lg font-semibold text-slate-900">2-3 周</p>
          </div>
          <div>
            <p class="text-xs text-slate-500">每周安排</p>
            <p class="mt-1">2 次学习 + 1 次习题推导</p>
          </div>
          <div>
            <p class="text-xs text-slate-500">配套动作</p>
            <p class="mt-1">每节课输出 1 份公式与概念小结</p>
          </div>
        </CardContent>
      </Card>
    </section>

    <section class="mt-10 grid gap-4 md:grid-cols-3">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>第 1 周</CardTitle>
        <CardDescription>向量与线性空间</CardDescription>
        </CardHeader>
        <CardContent class="space-y-2 text-sm text-slate-600">
          <p>• 课程 1-2：向量、基与线性无关</p>
          <p>• 练习：投影、线性组合与子空间判定</p>
        </CardContent>
      </Card>
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>第 2 周</CardTitle>
        <CardDescription>矩阵与线性变换</CardDescription>
        </CardHeader>
        <CardContent class="space-y-2 text-sm text-slate-600">
          <p>• 课程 3-4：矩阵运算与线性方程组</p>
          <p>• 练习：线性变换的几何意义与可逆性</p>
        </CardContent>
      </Card>
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>第 3 周</CardTitle>
        <CardDescription>特征值与分解</CardDescription>
        </CardHeader>
        <CardContent class="space-y-2 text-sm text-slate-600">
          <p>• 课程 5-6：特征值、对角化、SVD</p>
          <p>• 练习：PCA 直觉与降维应用</p>
        </CardContent>
      </Card>
    </section>

    <section class="mt-10">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>本课程产出</CardTitle>
          <CardDescription>完成后可交付的成果</CardDescription>
        </CardHeader>
        <CardContent class="space-y-2 text-sm text-slate-600">
          <p>• 一份线性代数核心概念与公式卡片</p>
          <p>• 3-5 道典型题的推导与解析</p>
          <p>• 线性回归/PCA 的线代表达笔记</p>
        </CardContent>
      </Card>
    </section>
  </BasePage>
</template>
