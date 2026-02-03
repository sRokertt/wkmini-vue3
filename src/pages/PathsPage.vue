<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <BasePage>
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
        <Tabs default-value="all" class="w-full">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 class="text-2xl font-semibold">路径列表</h2>
              <p class="mt-1 text-sm text-slate-500">按目标分类整理</p>
            </div>
            <TabsList>
              <TabsTrigger value="all">全部</TabsTrigger>
              <TabsTrigger value="ml">机器学习</TabsTrigger>
              <TabsTrigger value="eng">工程化</TabsTrigger>
              <TabsTrigger value="math">数学基础</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" class="mt-6">
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
                  <router-link to="/paths/1">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
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
                  <router-link to="/paths/2">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数学基础路线</CardTitle>
                  <CardDescription>线代 + 概率 + 微积分</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">适合从零开始打基础。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <router-link to="/paths/3">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>学习方法路线</CardTitle>
                  <CardDescription>目标拆解 + 复盘机制</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">建立自我驱动与执行节奏。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">4 周</Badge>
                  <router-link to="/paths/4">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>模型评估与优化</CardTitle>
                  <CardDescription>特征工程 + 指标体系</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">面向项目落地。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <router-link to="/paths/5">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>系统化交付路线</CardTitle>
                  <CardDescription>性能 + 可靠性 + 可观测性</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">从个人项目走向生产级交付。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">8 周</Badge>
                  <router-link to="/paths/6">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="ml" class="mt-6">
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
                  <router-link to="/paths/1">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
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
                  <router-link to="/paths/2">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="eng" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2">
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
                  <router-link to="/paths/2">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>系统化交付路线</CardTitle>
                  <CardDescription>性能 + 可靠性 + 可观测性</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">从个人项目走向生产级交付。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">8 周</Badge>
                  <router-link to="/paths/6">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="math" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数学基础路线</CardTitle>
                  <CardDescription>线代 + 概率 + 微积分</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">适合从零开始打基础。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <router-link to="/paths/3">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>高频数学专题</CardTitle>
                  <CardDescription>微积分 + 概率论</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">聚焦模型训练最常用的数学工具。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <router-link to="/paths/5">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
    </section>
  </BasePage>
</template>
