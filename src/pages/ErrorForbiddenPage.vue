<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const route = useRoute()
const fromPath = computed(() => route.query.from || '')
const reason = computed(() => route.query.reason || '')
const reasonText = computed(() => {
  const map = {
    'auth-required': '需要登录或权限不足',
    'feature-locked': '功能尚未开放',
  }
  return map[reason.value] || ''
})
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">403</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">访问受限</Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">你没有权限访问该页面</h1>
        <p class="mt-3 text-sm text-slate-600">
          该内容需要更高权限或尚未对外开放。
        </p>
        <div v-if="fromPath || reason" class="mt-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-xs text-slate-500">
          <p v-if="fromPath">来源路径：{{ fromPath }}</p>
          <p v-if="reasonText">触发原因：{{ reasonText }}</p>
          <p v-else-if="reason">触发原因：{{ reason }}</p>
        </div>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <router-link to="/">
            <Button class="bg-slate-900 text-white hover:bg-slate-800">返回首页</Button>
          </router-link>
          <router-link to="/paths">
            <Button variant="outline">查看学习路径</Button>
          </router-link>
          <Button variant="outline" @click="$router.back()">返回上一页</Button>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>可能原因</CardTitle>
          <CardDescription>通常与权限配置有关</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <p>• 该内容仅面向特定用户开放</p>
          <p>• 当前账号未授权访问</p>
          <p>• 功能仍在内测阶段</p>
        </CardContent>
      </Card>
    </section>
  </BasePage>
</template>
