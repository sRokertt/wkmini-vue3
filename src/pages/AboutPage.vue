<script setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <main class="min-h-screen bg-[#f7f5f1] px-6 py-12 text-slate-900">
    <div class="mx-auto max-w-5xl">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>关于 wkmini</CardTitle>
          <CardDescription>为自学者打造的结构化学习平台。</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-slate-600">v1.0 聚焦课程、章节与内容管理。</p>
        </CardContent>
      </Card>
    </div>
  </main>
</template>
