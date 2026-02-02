<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <article class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
          <div class="flex flex-wrap items-center gap-3">
            <Badge class="bg-slate-900 text-white">章节/文章</Badge>
            <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">基础</Badge>
            <Badge variant="outline" class="border-slate-200 bg-white/70">12 分钟</Badge>
          </div>
          <h1 class="mt-5 text-3xl font-semibold">矩阵与线性变换</h1>
          <p class="mt-3 text-sm text-slate-600">
            本节围绕矩阵乘法的几何意义展开，结合二维/三维变换理解线性映射。
          </p>

          <div class="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
            <section class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">核心概念</h2>
              <p>矩阵可以看作线性变换的编码方式。理解“对标准基的作用”是最直接的路径。</p>
              <ul class="list-disc space-y-2 pl-5 text-slate-600">
                <li>线性变换保持向量加法与数乘结构</li>
                <li>矩阵列向量描述基向量的变换结果</li>
                <li>矩阵乘法对应变换复合</li>
              </ul>
            </section>
            <section class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">示例与练习</h2>
              <p>尝试用一个 2x2 矩阵描述旋转与缩放，并观察其对单位正方形的影响。</p>
              <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                <p class="text-xs font-medium text-slate-500">练习</p>
                <p class="mt-2 text-sm text-slate-700">构造一个先缩放再旋转的矩阵，并解释复合顺序。</p>
              </div>
            </section>
            <section class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">要点小结</h2>
              <p>矩阵的列向量是理解线性变换的关键。掌握它能帮助你更快理解特征值与分解。</p>
            </section>
          </div>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="outline" @click="$router.push('/lessons/1')">上一节</Button>
            <Button class="bg-slate-900 text-white hover:bg-slate-800">标记已完成</Button>
            <Button variant="outline" @click="$router.push('/lessons/3')">下一节</Button>
            <Button variant="outline" @click="$router.push('/courses/1')">返回课程</Button>
          </div>
        </article>

        <aside class="space-y-4">
          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>章节导航</CardTitle>
              <CardDescription>快速切换章节</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2 text-sm text-slate-600">
              <div class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
                <span>1. 向量与空间</span>
                <span class="text-xs text-slate-400">已完成</span>
              </div>
              <div class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/80 px-4 py-3">
                <span>2. 矩阵与线性变换</span>
                <span class="text-xs text-slate-400">进行中</span>
              </div>
              <div class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
                <span>3. 特征值与分解</span>
                <span class="text-xs text-slate-400">未开始</span>
              </div>
            </CardContent>
          </Card>

          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>学习建议</CardTitle>
              <CardDescription>提升理解效率</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2 text-sm text-slate-600">
              <p>• 每个概念都配合图形理解</p>
              <p>• 记录关键矩阵的作用</p>
              <p>• 做完练习再进入下一节</p>
            </CardContent>
          </Card>
        </aside>
    </section>
  </BasePage>
</template>
