<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <main class="min-h-screen bg-[#f7f5f1] px-6 py-12 text-slate-900">
    <div class="mx-auto max-w-6xl">
      <AppHeader />
      <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">学习路径</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">路线图</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">可执行计划</Badge>
        </div>
        <div class="mt-5">
          <h1 class="text-3xl font-semibold">学习路径页</h1>
          <p class="mt-2 text-sm text-slate-600">为不同目标提供阶段拆解与进度追踪。</p>
        </div>
      </section>

      <section class="mt-10">
        <Tabs default-value="recommended" class="w-full">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 class="text-2xl font-semibold">路径列表</h2>
              <p class="mt-1 text-sm text-slate-500">按目标分类整理</p>
            </div>
            <TabsList>
              <TabsTrigger value="recommended">推荐</TabsTrigger>
              <TabsTrigger value="beginner">入门</TabsTrigger>
              <TabsTrigger value="advanced">进阶</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="recommended" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>机器学习入门路线</CardTitle>
                  <CardDescription>数学基础 + 经典算法</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">12 周规划，适合全栈转向算法方向。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">12 周</Badge>
                  <Button variant="ghost">查看详情</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>工程化基础路线</CardTitle>
                  <CardDescription>数据结构 + 系统设计</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">强化工程能力与交付思维。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">8 周</Badge>
                  <Button variant="ghost">查看详情</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="beginner" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数学基础路线</CardTitle>
                  <CardDescription>线代 + 概率 + 微积分</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">适合从零开始打基础。</p>
                </CardContent>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>学习方法路线</CardTitle>
                  <CardDescription>目标拆解 + 复盘机制</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">建立自我驱动与执行节奏。</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="advanced" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>模型评估与优化</CardTitle>
                  <CardDescription>特征工程 + 指标体系</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">面向项目落地。</p>
                </CardContent>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>系统化交付路线</CardTitle>
                  <CardDescription>性能 + 可靠性 + 可观测性</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">从个人项目走向生产级交付。</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  </main>
</template>
