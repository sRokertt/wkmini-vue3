<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <BasePage max-width="max-w-5xl">
    <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>关于 wkmini</CardTitle>
          <CardDescription>为自学者打造的结构化学习平台。</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-slate-600">v1.0 聚焦课程、章节与内容管理。</p>
        </CardContent>
      </Card>
  </BasePage>
</template>
