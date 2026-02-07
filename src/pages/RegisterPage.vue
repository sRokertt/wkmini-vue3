<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/stores/authStore'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const MIN_PASSWORD_LENGTH = 8

const email = ref('')
const username = ref('')
const password = ref('')
const errorText = ref('')

const redirectTo = computed(() => String(route.query.redirect || '/'))

const canSubmit = computed(() => {
  if (authStore.loading) return false
  if (!email.value.trim()) return false
  if (password.value.length < MIN_PASSWORD_LENGTH) return false
  return true
})

const passwordHint = computed(() => {
  if (!password.value) return `密码至少 ${MIN_PASSWORD_LENGTH} 位。建议使用更长口令。`
  if (password.value.length < MIN_PASSWORD_LENGTH) return `密码长度不足：至少需要 ${MIN_PASSWORD_LENGTH} 位。`
  return `长度已满足（>= ${MIN_PASSWORD_LENGTH}）。建议加入更长的短语提高安全性。`
})

const passwordHintTone = computed(() => {
  if (!password.value) return 'border-slate-200 bg-slate-50 text-slate-600'
  if (password.value.length < MIN_PASSWORD_LENGTH) return 'border-rose-200 bg-rose-50 text-rose-700'
  return 'border-emerald-200 bg-emerald-50 text-emerald-700'
})

const submit = async () => {
  errorText.value = ''
  try {
    await authStore.register(email.value, password.value, username.value)
    router.replace(redirectTo.value)
  } catch (e) {
    errorText.value = e?.message || '注册失败'
  }
}
</script>

<template>
  <BasePage max-width="max-w-5xl">
    <section class="mx-auto mt-10 max-w-xl">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <div class="flex flex-wrap items-center gap-3">
            <Badge class="bg-slate-900 text-white">注册</Badge>
            <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">v1.1</Badge>
          </div>
          <CardTitle class="mt-4">创建账号</CardTitle>
          <CardDescription>注册后会自动登录（Session + Cookie）。</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <label class="text-xs font-medium text-slate-500" for="register-username">用户名（可选）</label>
            <Input
              id="register-username"
              v-model="username"
              type="text"
              placeholder="用于用户名登录"
              autocomplete="username"
            />
            <p class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
              你可以用“用户名或邮箱”登录；不填写也可以，后续用邮箱登录。
            </p>
          </div>
          <div class="space-y-2">
            <label class="text-xs font-medium text-slate-500" for="register-email">邮箱</label>
            <Input id="register-email" v-model="email" type="email" placeholder="you@example.com" autocomplete="email" />
          </div>
          <div class="space-y-2">
            <label class="text-xs font-medium text-slate-500" for="register-password">密码</label>
            <Input
              id="register-password"
              v-model="password"
              type="password"
              placeholder="请输入密码"
              autocomplete="new-password"
              @keydown.enter.prevent="submit"
            />
            <p class="rounded-xl border px-3 py-2 text-xs" :class="passwordHintTone">{{ passwordHint }}</p>
          </div>

          <p v-if="errorText" class="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
            {{ errorText }}
          </p>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button class="bg-slate-900 text-white hover:bg-slate-800" :disabled="!canSubmit" @click="submit">
              {{ authStore.loading ? '注册中…' : '注册并登录' }}
            </Button>
            <router-link class="text-xs text-slate-500 hover:text-slate-900" to="/login">已有账号？去登录</router-link>
          </div>
        </CardContent>
      </Card>
    </section>
  </BasePage>
</template>
