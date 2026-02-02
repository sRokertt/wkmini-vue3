<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <main class="min-h-screen bg-[#f7f5f1] px-6 py-12 text-slate-900">
    <div class="mx-auto max-w-6xl">
      <AppHeader />
      <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">资料库</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">模板沉淀</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">可复用</Badge>
        </div>
        <div class="mt-5">
          <h1 class="text-3xl font-semibold">资料库页</h1>
          <p class="mt-2 text-sm text-slate-600">收录可复用的学习材料、方法与工具。</p>
        </div>
      </section>

      <section class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </div>
  </main>
</template>
