<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRouter } from 'vue-router'

const router = useRouter()

const goCourse = (id) => {
  router.push(`/courses/${id}`)
}
</script>

<template>
  <BasePage>
    <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">课程库</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">高频主题</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">持续更新</Badge>
        </div>
        <div class="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 class="text-3xl font-semibold">课程列表</h1>
            <p class="mt-2 text-sm text-slate-600">聚焦基础能力与可复用知识结构，适合自学路径搭建。</p>
          </div>
          <div class="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Input class="bg-white/80" placeholder="搜索课程" />
            <Button class="bg-slate-900 text-white hover:bg-slate-800">开始学习</Button>
          </div>
        </div>
    </section>

    <section class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>线性代数快速入门</CardTitle>
            <CardDescription>向量、矩阵与变换</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-slate-600">为机器学习打底的核心数学模块。</p>
          </CardContent>
          <CardFooter class="flex items-center justify-between">
            <Badge variant="outline">8 章节</Badge>
            <Button variant="ghost" @click="goCourse(1)">进入</Button>
          </CardFooter>
        </Card>
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>数据结构与算法</CardTitle>
            <CardDescription>链表、树、图与排序</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-slate-600">强调思维方式与复杂度分析。</p>
          </CardContent>
          <CardFooter class="flex items-center justify-between">
            <Badge variant="outline">12 章节</Badge>
            <Button variant="ghost" @click="goCourse(2)">进入</Button>
          </CardFooter>
        </Card>
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>概率与统计</CardTitle>
            <CardDescription>分布、期望与假设检验</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-slate-600">支撑建模与评估的基础工具。</p>
          </CardContent>
          <CardFooter class="flex items-center justify-between">
            <Badge variant="outline">9 章节</Badge>
            <Button variant="ghost" @click="goCourse(3)">进入</Button>
          </CardFooter>
        </Card>
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>机器学习基础</CardTitle>
            <CardDescription>监督/非监督与评估</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-slate-600">从模型概念到实战流程。</p>
          </CardContent>
          <CardFooter class="flex items-center justify-between">
            <Badge variant="outline">10 章节</Badge>
            <Button variant="ghost" @click="goCourse(4)">进入</Button>
          </CardFooter>
        </Card>
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>系统设计入门</CardTitle>
            <CardDescription>需求拆解与架构思维</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-slate-600">面向工程化与可交付。</p>
          </CardContent>
          <CardFooter class="flex items-center justify-between">
            <Badge variant="outline">6 章节</Badge>
            <Button variant="ghost" @click="goCourse(5)">进入</Button>
          </CardFooter>
        </Card>
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>学习方法论</CardTitle>
            <CardDescription>目标、反馈与复盘</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-slate-600">帮助建立自我驱动节奏。</p>
          </CardContent>
          <CardFooter class="flex items-center justify-between">
            <Badge variant="outline">4 章节</Badge>
            <Button variant="ghost" @click="goCourse(6)">进入</Button>
          </CardFooter>
        </Card>
    </section>
  </BasePage>
</template>
