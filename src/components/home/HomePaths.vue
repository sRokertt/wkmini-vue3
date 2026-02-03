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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <section class="mt-14">
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
              <router-link to="/paths/1">
                <Button variant="ghost">查看详情</Button>
              </router-link>
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
              <router-link to="/paths/2">
                <Button variant="ghost">查看详情</Button>
              </router-link>
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
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">8 周</Badge>
              <router-link to="/paths/3">
                <Button variant="ghost">查看详情</Button>
              </router-link>
            </CardFooter>
          </Card>
          <Card class="border-slate-200">
            <CardHeader>
              <CardTitle>工程化思维</CardTitle>
              <CardDescription>测试、部署与性能优化</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-slate-600">从个人项目过渡到可靠交付。</p>
            </CardContent>
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">6 周</Badge>
              <router-link to="/paths/4">
                <Button variant="ghost">查看详情</Button>
              </router-link>
            </CardFooter>
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
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">6 周</Badge>
              <router-link to="/paths/5">
                <Button variant="ghost">查看详情</Button>
              </router-link>
            </CardFooter>
          </Card>
          <Card class="border-slate-200">
            <CardHeader>
              <CardTitle>线性代数强化</CardTitle>
              <CardDescription>矩阵分解与特征值</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-slate-600">配合示例与可视化讲解。</p>
            </CardContent>
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">6 周</Badge>
              <router-link to="/paths/6">
                <Button variant="ghost">查看详情</Button>
              </router-link>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  </section>
</template>
