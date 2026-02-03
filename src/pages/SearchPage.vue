<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const route = useRoute()
const keyword = computed(() => route.query.q || '全部')
const scope = computed(() => route.query.scope || '全部')
</script>

<template>
  <BasePage>
    <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">搜索结果</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">{{ keyword }}</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">范围：{{ scope }}</Badge>
        </div>
        <div class="mt-5">
          <h1 class="text-3xl font-semibold">搜索结果</h1>
          <p class="mt-2 text-sm text-slate-600">用于展示课程与文章的检索结果。</p>
        </div>
    </section>

    <section class="mt-10">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>结果区域</CardTitle>
            <CardDescription>当前为占位展示</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-slate-600">请先完成后端搜索 API 后再接入数据。</p>
          </CardContent>
        </Card>
    </section>
  </BasePage>
</template>
