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
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">500</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">系统异常</Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">服务器开小差了</h1>
        <p class="mt-3 text-sm text-slate-600">
          请稍后再试，我们正在恢复服务。
        </p>
        <div v-if="fromPath || reason" class="mt-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-xs text-slate-500">
          <p v-if="fromPath">来源路径：{{ fromPath }}</p>
          <p v-if="reason">触发原因：{{ reason }}</p>
        </div>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button class="bg-slate-900 text-white hover:bg-slate-800" @click="$router.go(0)">刷新重试</Button>
          <router-link to="/">
            <Button variant="outline">返回首页</Button>
          </router-link>
          <router-link to="/courses">
            <Button variant="outline">查看课程</Button>
          </router-link>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>可选操作</CardTitle>
          <CardDescription>保持学习不中断</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <p>• 刷新页面或稍后再试</p>
          <p>• 浏览课程列表与资料库</p>
          <p>• 回到首页查看推荐内容</p>
        </CardContent>
      </Card>
    </section>
  </BasePage>
</template>
