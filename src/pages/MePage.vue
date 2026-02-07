<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuthStore } from '@/stores/authStore'

const route = useRoute()
const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.isLoggedIn)
const username = computed(() => authStore.user?.username || '')
const email = computed(() => authStore.user?.email || '')

const redirectQuery = computed(() => ({ redirect: route.fullPath }))

const logout = async () => {
  await authStore.logout()
}
</script>

<template>
  <BasePage>
    <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
      <div class="flex flex-wrap items-center gap-3">
        <Badge class="bg-slate-900 text-white">个人中心</Badge>
        <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">v1.1</Badge>
      </div>
      <h1 class="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">你的账户信息</h1>
      <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
        这里用于查看登录状态与账号信息；后续会承载同步、导出与学习数据设置。
      </p>
    </section>

    <section class="mt-10 grid gap-4 md:grid-cols-2">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>登录状态</CardTitle>
          <CardDescription>当前会话与本地展示状态</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <p>
            <span class="font-medium text-slate-900">状态：</span>
            <span v-if="isLoggedIn" class="text-emerald-700">已登录</span>
            <span v-else class="text-slate-500">未登录</span>
          </p>
          <div v-if="isLoggedIn" class="space-y-2">
            <p v-if="username"><span class="font-medium text-slate-900">用户名：</span>{{ username }}</p>
            <p v-if="email"><span class="font-medium text-slate-900">邮箱：</span>{{ email }}</p>
          </div>
          <div v-else class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            你需要登录后才能查看个人信息。登录成功后可在顶部菜单进入个人中心。
          </div>
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <router-link v-if="!isLoggedIn" to="/login" :query="redirectQuery">
              <Button class="bg-slate-900 text-white hover:bg-slate-800">去登录</Button>
            </router-link>
            <Button v-else variant="outline" :disabled="authStore.loading" @click="logout">退出登录</Button>
          </div>
        </CardContent>
      </Card>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>功能预告</CardTitle>
          <CardDescription>v1.1 后续可逐步补齐</CardDescription>
        </CardHeader>
        <CardContent class="space-y-2 text-sm text-slate-600">
          <p>• 学习进度云端同步</p>
          <p>• 收藏与资料库同步</p>
          <p>• 安全设置与设备管理</p>
          <p>• 数据导出（Markdown/JSON）</p>
        </CardContent>
      </Card>
    </section>
  </BasePage>
</template>
