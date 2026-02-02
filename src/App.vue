<script setup>
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50 text-slate-900">
    <div class="mx-auto max-w-6xl px-6 py-10">
      <header class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
            W
          </div>
          <div>
            <p class="text-sm font-medium text-slate-500">wkmini</p>
            <p class="text-lg font-semibold">wkmini-vue3</p>
          </div>
        </div>
        <nav class="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a class="hover:text-slate-900" href="#courses">课程</a>
          <a class="hover:text-slate-900" href="#paths">学习路径</a>
          <a class="hover:text-slate-900" href="#library">资料库</a>
          <a class="hover:text-slate-900" href="#about">关于</a>
        </nav>
        <Button class="hidden md:inline-flex">进入学习</Button>
      </header>

      <section class="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge class="bg-slate-900 text-white">v1.0 MVP</Badge>
          <h1 class="mt-4 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            面向自学者的
            <span class="block text-slate-700">结构化学习工作台</span>
          </h1>
          <p class="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            以课程、章节与文章为核心，提供清晰路径、重点知识与可复用的学习材料。专注于“能执行的学习”而非堆砌内容。
          </p>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div class="flex-1">
              <Input placeholder="搜索课程、章节、关键词" />
            </div>
            <Button class="w-full sm:w-auto">开始探索</Button>
          </div>
          <div class="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
            <Badge variant="outline">数学</Badge>
            <Badge variant="outline">数据结构</Badge>
            <Badge variant="outline">线性代数</Badge>
            <Badge variant="outline">机器学习</Badge>
          </div>
        </div>
        <Card class="border-slate-200 bg-white/80 shadow-sm">
          <CardHeader>
            <CardTitle>今日学习进度</CardTitle>
            <CardDescription>轻量追踪，专注完成</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p class="text-sm font-medium text-slate-700">当前路径</p>
              <p class="mt-1 text-lg font-semibold text-slate-900">机器学习 · 基础线性代数</p>
              <p class="mt-2 text-xs text-slate-500">下一步：向量空间与矩阵分解</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-lg border border-slate-200 p-3">
                <p class="text-xs text-slate-500">本周完成</p>
                <p class="mt-2 text-xl font-semibold">6 课时</p>
              </div>
              <div class="rounded-lg border border-slate-200 p-3">
                <p class="text-xs text-slate-500">累计学习</p>
                <p class="mt-2 text-xl font-semibold">28 小时</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" class="w-full">继续上次进度</Button>
          </CardFooter>
        </Card>
      </section>

      <section id="courses" class="mt-14">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-semibold">精选课程</h2>
            <p class="mt-1 text-sm text-slate-500">为 v1.0 MVP 准备的高频主题</p>
          </div>
          <Button variant="outline" class="hidden sm:inline-flex">查看全部</Button>
        </div>
        <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card class="border-slate-200">
            <CardHeader>
              <CardTitle>线性代数快速入门</CardTitle>
              <CardDescription>向量、矩阵与变换</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-slate-600">适合机器学习前置补齐，重点理解矩阵运算。</p>
            </CardContent>
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">8 章节</Badge>
              <Button variant="ghost">进入</Button>
            </CardFooter>
          </Card>
          <Card class="border-slate-200">
            <CardHeader>
              <CardTitle>数据结构与算法</CardTitle>
              <CardDescription>链表、树、图与排序</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-slate-600">强调可视化与复杂度分析，配套练习题。</p>
            </CardContent>
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">12 章节</Badge>
              <Button variant="ghost">进入</Button>
            </CardFooter>
          </Card>
          <Card class="border-slate-200">
            <CardHeader>
              <CardTitle>概率与统计</CardTitle>
              <CardDescription>分布、期望与假设检验</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-slate-600">为模型评估与数据分析打底。</p>
            </CardContent>
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">9 章节</Badge>
              <Button variant="ghost">进入</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="paths" class="mt-14">
        <Tabs default-value="ml" class="w-full">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 class="text-2xl font-semibold">学习路径</h2>
              <p class="mt-1 text-sm text-slate-500">按目标组织内容，清晰推进</p>
            </div>
            <TabsList>
              <TabsTrigger value="ml">机器学习</TabsTrigger>
              <TabsTrigger value="cs">计算机基础</TabsTrigger>
              <TabsTrigger value="math">数学强化</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="ml" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2">
              <Card class="border-slate-200">
                <CardHeader>
                  <CardTitle>从零到模型</CardTitle>
                  <CardDescription>基础数学 + 经典算法</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">12 周路线，适合全栈转向算法方向。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">12 周</Badge>
                  <Button variant="ghost">查看详情</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200">
                <CardHeader>
                  <CardTitle>数据准备与评估</CardTitle>
                  <CardDescription>特征工程与指标体系</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">聚焦可落地评估与实验管理。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <Button variant="ghost">查看详情</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="cs" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2">
              <Card class="border-slate-200">
                <CardHeader>
                  <CardTitle>计算机基础打底</CardTitle>
                  <CardDescription>数据结构 + 操作系统</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">为后续系统设计与工程实践服务。</p>
                </CardContent>
              </Card>
              <Card class="border-slate-200">
                <CardHeader>
                  <CardTitle>工程化思维</CardTitle>
                  <CardDescription>测试、部署与性能优化</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">从个人项目过渡到可靠交付。</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="math" class="mt-6">
            <div class="grid gap-4 md:grid-cols-2">
              <Card class="border-slate-200">
                <CardHeader>
                  <CardTitle>高频数学专题</CardTitle>
                  <CardDescription>微积分 + 概率论</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">聚焦模型训练最常用的数学工具。</p>
                </CardContent>
              </Card>
              <Card class="border-slate-200">
                <CardHeader>
                  <CardTitle>线性代数强化</CardTitle>
                  <CardDescription>矩阵分解与特征值</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">配合示例与可视化讲解。</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section id="library" class="mt-14">
        <Card class="border-slate-200 bg-white/80">
          <CardHeader>
            <CardTitle>资料库</CardTitle>
            <CardDescription>聚合可复用的学习资料与工具</CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4 md:grid-cols-3">
            <div class="rounded-lg border border-slate-200 p-4">
              <p class="text-sm font-medium">高频公式卡片</p>
              <p class="mt-2 text-xs text-slate-500">适合碎片时间复习</p>
            </div>
            <div class="rounded-lg border border-slate-200 p-4">
              <p class="text-sm font-medium">算法模板库</p>
              <p class="mt-2 text-xs text-slate-500">常用套路快速查找</p>
            </div>
            <div class="rounded-lg border border-slate-200 p-4">
              <p class="text-sm font-medium">项目实践清单</p>
              <p class="mt-2 text-xs text-slate-500">从需求到交付的步骤</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="about" class="mt-14">
        <Card class="border-slate-200 bg-slate-900 text-white">
          <CardHeader>
            <CardTitle>准备好开始了吗？</CardTitle>
            <CardDescription class="text-slate-200">
              用清晰结构推进每一次学习。你只需要坚持执行。
            </CardDescription>
          </CardHeader>
          <CardFooter class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button class="bg-white text-slate-900 hover:bg-slate-100">创建学习路径</Button>
            <Button variant="outline" class="border-white text-white hover:bg-white/10">查看路线图</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
