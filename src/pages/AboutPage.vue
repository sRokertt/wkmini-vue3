<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <BasePage max-width="max-w-6xl">
    <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
      <div class="flex flex-wrap items-center gap-3">
        <Badge class="bg-slate-900 text-white">关于 wkmini</Badge>
        <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">产品说明</Badge>
        <Badge variant="outline" class="border-slate-200 bg-white/70">v1.0 展示版</Badge>
      </div>
      <h1 class="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">把自学变成一个可执行的系统</h1>
      <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
        wkmini 面向独立自学者：用「课程」承载内容，用「学习路径」组织顺序，用「资料库」沉淀复用，最终让目标不再停留在“收藏夹”。
      </p>
    </section>

    <section class="mt-10 grid gap-4">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>它解决什么问题</CardTitle>
          <CardDescription>自学常见的 3 类卡点</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs font-medium text-slate-500">问题 1</p>
            <p class="mt-2 text-base font-semibold text-slate-900">知道要学，但不知道先后</p>
            <p class="mt-2 text-sm text-slate-600">内容碎片化，顺序不明确，容易来回跳。</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs font-medium text-slate-500">问题 2</p>
            <p class="mt-2 text-base font-semibold text-slate-900">有计划，但执行难持续</p>
            <p class="mt-2 text-sm text-slate-600">缺少节奏、记录与反馈，容易中断。</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs font-medium text-slate-500">问题 3</p>
            <p class="mt-2 text-base font-semibold text-slate-900">学过的资料无法复用</p>
            <p class="mt-2 text-sm text-slate-600">笔记散落，模板不沉淀，下一次又从零开始。</p>
          </div>
        </CardContent>
      </Card>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>系统是怎么工作的</CardTitle>
          <CardDescription>三模块分工明确，串成闭环</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold text-slate-900">课程</p>
              <Badge variant="outline">内容载体</Badge>
            </div>
            <p class="mt-2 text-sm text-slate-600">把知识拆到章节/文章，并提供收藏、进度与学习计划入口。</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold text-slate-900">学习路径</p>
              <Badge variant="outline">顺序与节奏</Badge>
            </div>
            <p class="mt-2 text-sm text-slate-600">把课程按目标组织成阶段，解决“先学什么、后学什么”。</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold text-slate-900">资料库</p>
              <Badge variant="outline">沉淀与复用</Badge>
            </div>
            <p class="mt-2 text-sm text-slate-600">把输出沉淀为模板/清单/工具，支持大纲切页与正文目录。</p>
          </div>
        </CardContent>
      </Card>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>如何使用（推荐流程）</CardTitle>
          <CardDescription>按这个顺序走，体验闭环最快</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs font-medium text-slate-500">01</p>
            <p class="mt-2 text-base font-semibold text-slate-900">选一条路径</p>
            <p class="mt-2 text-sm text-slate-600">进入路径详情，看阶段拆解与目标。</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs font-medium text-slate-500">02</p>
            <p class="mt-2 text-base font-semibold text-slate-900">进入课程并推进</p>
            <p class="mt-2 text-sm text-slate-600">看章节目录，进入课时阅读并记录进度。</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs font-medium text-slate-500">03</p>
            <p class="mt-2 text-base font-semibold text-slate-900">沉淀到资料库</p>
            <p class="mt-2 text-sm text-slate-600">把模板/清单整理好，下次直接复用。</p>
          </div>
        </CardContent>
      </Card>

      <div class="grid gap-4 md:grid-cols-2">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>当前范围</CardTitle>
            <CardDescription>v1.0 聚焦结构与交互体验</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2 text-sm text-slate-600">
            <p>• 静态数据 + Pinia 模拟业务流转</p>
            <p>• 收藏/进度/计划等信息本地持久化</p>
            <p>• 错误页与路由兜底保障可控跳转</p>
          </CardContent>
        </Card>

        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>下一步</CardTitle>
            <CardDescription>把展示版推向可用版</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2 text-sm text-slate-600">
            <p>• 接入后端 API（课程/资料/进度）</p>
            <p>• 账号体系与多端同步</p>
            <p>• 搜索与内容体系化（资料库结构增强）</p>
          </CardContent>
        </Card>
      </div>

    </section>
  </BasePage>
</template>
