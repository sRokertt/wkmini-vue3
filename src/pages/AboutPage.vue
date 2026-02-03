<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <BasePage max-width="max-w-5xl">
    <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
        <CardTitle>关于 wkmini</CardTitle>
        <CardDescription>面向自学者的结构化课程平台。</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-slate-600">v1.0 为展示版，聚焦课程、学习路径与资料结构。</p>
        </CardContent>
      </Card>
  </BasePage>
</template>
