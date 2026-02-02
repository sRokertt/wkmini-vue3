<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
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
          <Badge class="bg-slate-900 text-white">资料库</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">模板沉淀</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">可复用</Badge>
        </div>
        <div class="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 class="text-3xl font-semibold">资料库页</h1>
            <p class="mt-2 text-sm text-slate-600">收录可复用的学习材料、方法与工具。</p>
          </div>
          <div class="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Input class="bg-white/80" placeholder="搜索资料、模板、清单" />
            <Button class="bg-slate-900 text-white hover:bg-slate-800">开始检索</Button>
          </div>
        </div>
        <div class="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
          <Badge variant="outline">公式速查</Badge>
          <Badge variant="outline">算法模板</Badge>
          <Badge variant="outline">项目清单</Badge>
          <Badge variant="outline">学习方法论</Badge>
        </div>
      </section>

      <section class="mt-10">
        <Tabs default-value="templates" class="w-full">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 class="text-2xl font-semibold">资料分类</h2>
              <p class="mt-1 text-sm text-slate-500">按内容类型整理</p>
            </div>
            <TabsList>
              <TabsTrigger value="templates">模板</TabsTrigger>
              <TabsTrigger value="checklists">清单</TabsTrigger>
              <TabsTrigger value="tools">工具</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="templates" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>高频公式卡片</CardTitle>
                  <CardDescription>快速复习与记忆</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">面向数学与算法常用公式。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>算法模板库</CardTitle>
                  <CardDescription>常见解题套路</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">涵盖图、树、动态规划等。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>模型评估模板</CardTitle>
                  <CardDescription>指标与实验记录</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">用于沉淀实验过程。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="checklists" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>项目实践清单</CardTitle>
                  <CardDescription>从需求到交付</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">帮助自学者完成可展示成果。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>学习复盘清单</CardTitle>
                  <CardDescription>总结与迭代</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">让学习成果可持续。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>课程笔记清单</CardTitle>
                  <CardDescription>结构化记录</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">沉淀高质量笔记。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tools" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>可视化工具</CardTitle>
                  <CardDescription>线代与几何</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">配合图形辅助理解。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数据集索引</CardTitle>
                  <CardDescription>常用公开数据</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">用于练习与实验。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>阅读资料库</CardTitle>
                  <CardDescription>精选论文与文章</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">持续更新内容。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">进入</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  </main>
</template>
