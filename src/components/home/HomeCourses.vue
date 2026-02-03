<script setup>
import { Badge } from '@/components/ui/badge'
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
  <section class="mt-14">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-semibold">精选课程</h2>
        <p class="mt-1 text-sm text-slate-500">为 v1.0 MVP 准备的高频主题</p>
      </div>
      <router-link to="/courses">
        <Button variant="outline" class="hidden sm:inline-flex">查看全部</Button>
      </router-link>
    </div>
    <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>线性代数快速入门</CardTitle>
          <CardDescription>向量、矩阵与变换</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-slate-600">适合机器学习前置补齐，重点理解矩阵运算。</p>
        </CardContent>
        <CardFooter class="flex items-center justify-between">
          <Badge variant="outline">8 章节</Badge>
          <router-link to="/courses/1">
            <Button variant="outline" size="sm">进入</Button>
          </router-link>
        </CardFooter>
      </Card>
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>数据结构与算法</CardTitle>
          <CardDescription>链表、树、图与排序</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-slate-600">强调可视化与复杂度分析，配套练习题。</p>
        </CardContent>
        <CardFooter class="flex items-center justify-between">
          <Badge variant="outline">12 章节</Badge>
          <router-link to="/courses/2">
            <Button variant="outline" size="sm">进入</Button>
          </router-link>
        </CardFooter>
      </Card>
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>概率与统计</CardTitle>
          <CardDescription>分布、期望与假设检验</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-slate-600">为模型评估与数据分析打底。</p>
        </CardContent>
        <CardFooter class="flex items-center justify-between">
          <Badge variant="outline">9 章节</Badge>
          <router-link to="/courses/3">
            <Button variant="outline" size="sm">进入</Button>
          </router-link>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
