<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLibraryStore } from '@/stores/libraryStore'

const route = useRoute()
const libraryStore = useLibraryStore()

const itemId = computed(() => Number(route.params.id || 1))
const item = computed(() => libraryStore.itemList.find((entry) => entry.id === itemId.value))
</script>

<template>
  <BasePage max-width="max-w-6xl">
    <nav class="mb-6 text-xs text-slate-500">
      <router-link class="hover:text-slate-900" to="/">首页</router-link>
      <span class="px-2">/</span>
      <router-link class="hover:text-slate-900" to="/library">资料库</router-link>
      <span class="px-2">/</span>
      <span class="text-slate-900">{{ item?.title }}</span>
    </nav>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">资料详情</Badge>
          <Badge v-if="item?.type" variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">
            {{ item.type }}
          </Badge>
          <Badge v-if="item?.format" variant="outline" class="border-slate-200 bg-white/70">
            {{ item.format }}
          </Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">{{ item?.title }}</h1>
        <p class="mt-3 text-sm text-slate-600">{{ item?.summary }}</p>
        <div class="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
          <Badge v-for="tag in item?.tags || []" :key="tag" variant="outline">{{ tag }}</Badge>
        </div>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <router-link to="/library">
            <Button variant="outline">返回资料库</Button>
          </router-link>
          <Button class="bg-slate-900 text-white hover:bg-slate-800" @click="$router.push(`/library/${itemId}/resource`)">打开资源</Button>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>资源概览</CardTitle>
          <CardDescription>用途与使用方式</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <p>• 适用场景：{{ item?.description }}</p>
          <p>• 资源格式：{{ item?.format || '未标注' }}</p>
          <p>• 维护状态：持续更新</p>
        </CardContent>
      </Card>
    </section>

    <section class="mt-10">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>使用建议</CardTitle>
          <CardDescription>建议与注意事项</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <p>• 先浏览模板结构，再结合实际场景调整</p>
          <p>• 建议保存到个人笔记中持续维护</p>
          <p>• 如需扩展，建议结合课程笔记清单使用</p>
        </CardContent>
      </Card>
    </section>
  </BasePage>
</template>
