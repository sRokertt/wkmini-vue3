<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const route = useRoute()

const courses = {
  1: {
    title: '线性代数快速入门',
    duration: '8 小时',
    planSummary: '聚焦向量、矩阵、线性变换与特征值，拆解为可执行节奏，适合 2-3 周完成。',
    planWeeks: [
      {
        title: '第 1 周',
        description: '向量与线性空间',
        items: ['课程 1-2：向量、基与线性无关', '练习：投影、线性组合与子空间判定'],
      },
      {
        title: '第 2 周',
        description: '矩阵与线性变换',
        items: ['课程 3-4：矩阵运算与线性方程组', '练习：线性变换的几何意义与可逆性'],
      },
      {
        title: '第 3 周',
        description: '特征值与分解',
        items: ['课程 5-6：特征值、对角化、SVD', '练习：PCA 直觉与降维应用'],
      },
    ],
    outcomes: [
      '一份线性代数核心概念与公式卡片',
      '3-5 道典型题的推导与解析',
      '线性回归/PCA 的线代表达笔记',
    ],
  },
}

const courseId = computed(() => Number(route.params.id || 1))
const course = computed(() => courses[courseId.value] || courses[1])
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">课程学习计划</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">{{ course.title }}</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">{{ course.duration }}</Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">课程学习计划</h1>
        <p class="mt-3 text-sm text-slate-600">
          {{ course.planSummary }}
        </p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <router-link :to="`/courses/${courseId}`">
            <Button variant="outline">返回课程详情</Button>
          </router-link>
          <router-link to="/lessons/1">
            <Button class="bg-slate-900 text-white hover:bg-slate-800">开始第一课</Button>
          </router-link>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">总周期</p>
            <p class="mt-2 text-base font-semibold text-slate-900">2-3 周</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">每周安排</p>
            <p class="mt-2 text-sm text-slate-700">2 次学习 + 1 次习题推导</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">配套动作</p>
            <p class="mt-2 text-sm text-slate-700">每节课输出 1 份公式与概念小结</p>
          </div>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <Card v-for="week in course.planWeeks" :key="week.title" class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>{{ week.title }}</CardTitle>
              <CardDescription>{{ week.description }}</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2 text-sm text-slate-600">
              <p v-for="item in week.items" :key="item">• {{ item }}</p>
            </CardContent>
          </Card>
        </div>
        <div class="mt-8">
          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>本课程产出</CardTitle>
              <CardDescription>完成后可交付的成果</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2 text-sm text-slate-600">
              <p v-for="item in course.outcomes" :key="item">• {{ item }}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>推荐学习路线计划</CardTitle>
          <CardDescription>系统为你匹配的进阶路线</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4 text-sm text-slate-600">
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">推荐路线</p>
            <p class="mt-2 text-base font-semibold text-slate-900">机器学习基础路线</p>
            <p class="mt-2 text-sm text-slate-600">线性代数 → 概率统计 → 机器学习基础</p>
            <div class="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
              <Badge variant="outline">12 周</Badge>
              <Badge variant="outline">进阶</Badge>
              <Badge variant="outline">适合转向算法</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <router-link class="w-full" to="/paths/1">
            <Button variant="outline" class="w-full">查看路线详情</Button>
          </router-link>
        </CardFooter>
      </Card>
    </section>

    <section class="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>日历表</CardTitle>
          <CardDescription>安排每周学习节奏</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4 text-sm text-slate-600">
          <div class="rounded-2xl border border-dashed border-slate-200/80 bg-white/70 p-6 text-xs text-slate-500">
            日历视图（占位）
          </div>
        </CardContent>
      </Card>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>日历表记录编辑</CardTitle>
          <CardDescription>添加学习备忘与规划</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4 text-sm text-slate-600">
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">学习备忘</p>
            <p class="mt-2 text-sm text-slate-700">例如：周二晚复盘线性变换笔记</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">规划记录</p>
            <p class="mt-2 text-sm text-slate-700">例如：周末完成特征值章节练习</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full bg-slate-900 text-white hover:bg-slate-800">添加备忘录</Button>
        </CardFooter>
      </Card>
    </section>
  </BasePage>
</template>
