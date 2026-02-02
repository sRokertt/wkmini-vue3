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
      <div class="mb-8">
        <AppHeader />
      </div>

      <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">分类 / 标签</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">内容导航</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">可复用索引</Badge>
        </div>
        <div class="mt-5">
          <h1 class="text-3xl font-semibold">分类与标签页</h1>
          <p class="mt-2 text-sm text-slate-600">快速定位课程主题与知识域。</p>
        </div>
      </section>

      <section class="mt-10">
        <Tabs default-value="categories" class="w-full">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 class="text-2xl font-semibold">内容索引</h2>
              <p class="mt-1 text-sm text-slate-500">按分类或标签筛选</p>
            </div>
            <TabsList>
              <TabsTrigger value="categories">分类</TabsTrigger>
              <TabsTrigger value="tags">标签</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="categories" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数学基础</CardTitle>
                  <CardDescription>线代 / 概率 / 微积分</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">支撑机器学习与数据分析。</p>
                </CardContent>
              <CardFooter>
                <router-link to="/search?scope=category&q=数学基础">
                  <Button variant="ghost">查看课程</Button>
                </router-link>
              </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数据结构</CardTitle>
                  <CardDescription>链表 / 树 / 图</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">算法基础与工程思维。</p>
                </CardContent>
              <CardFooter>
                <router-link to="/search?scope=category&q=数据结构">
                  <Button variant="ghost">查看课程</Button>
                </router-link>
              </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>机器学习</CardTitle>
                  <CardDescription>监督 / 非监督</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">模型与评估体系。</p>
                </CardContent>
              <CardFooter>
                <router-link to="/search?scope=category&q=机器学习">
                  <Button variant="ghost">查看课程</Button>
                </router-link>
              </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tags" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>高频题型</CardTitle>
                  <CardDescription>面试 / 笔试</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">集中整理常见套路。</p>
                </CardContent>
              <CardFooter>
                <router-link to="/search?scope=tag&q=高频题型">
                  <Button variant="ghost">查看标签</Button>
                </router-link>
              </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>项目实践</CardTitle>
                  <CardDescription>可交付成果</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">从需求到上线。</p>
                </CardContent>
              <CardFooter>
                <router-link to="/search?scope=tag&q=项目实践">
                  <Button variant="ghost">查看标签</Button>
                </router-link>
              </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>方法论</CardTitle>
                  <CardDescription>节奏 / 复盘</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">提升自学效率。</p>
                </CardContent>
              <CardFooter>
                <router-link to="/search?scope=tag&q=方法论">
                  <Button variant="ghost">查看标签</Button>
                </router-link>
              </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  </main>
</template>
