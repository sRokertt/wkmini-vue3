<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useAuthStore } from '@/stores/authStore'
import { useCourseStore } from '@/stores/courseStore'
import { usePathStore } from '@/stores/pathStore'
import { useProgressStore } from '@/stores/progressStore'
import { useCalendarStore } from '@/stores/calendarStore'

const route = useRoute()
const authStore = useAuthStore()
const courseStore = useCourseStore()
const pathStore = usePathStore()
const progressStore = useProgressStore()
const calendarStore = useCalendarStore()

const isLoggedIn = computed(() => authStore.isLoggedIn)
const username = computed(() => authStore.user?.username || '')
const email = computed(() => authStore.user?.email || '')

const redirectQuery = computed(() => ({ redirect: route.fullPath }))

const fakeAuthEnabled =
  import.meta.env.DEV && String(import.meta.env.VITE_FAKE_AUTH || '').toLowerCase() === 'true'

const favoriteCourseCount = computed(() => courseStore.favoriteIds.length)
const favoritePathCount = computed(() => pathStore.favoriteIds.length)

const completedLessons = computed(() => progressStore.completedLessonIds.length)
const currentLessonId = computed(() => progressStore.currentLessonId)
const weeklyLessons = computed(() => progressStore.weeklyLessons)
const totalHours = computed(() => progressStore.totalHours)

const currentLesson = computed(() => {
  const course = courseStore.getCourseById(1)
  return course.lessonItems?.find((item) => item.id === Number(currentLessonId.value)) || null
})

const calendarMemoCount = computed(() => Object.keys(calendarStore.memoByDate || {}).length)
const calendarPlanCount = computed(() => Object.keys(calendarStore.planByDate || {}).length)

const exportErrorText = ref('')

const sections = [
  { id: 'account', title: '登录状态', description: '当前会话与本地展示状态' },
  { id: 'overview', title: '学习概览', description: '本地统计（展示版口径）' },
  { id: 'favorites', title: '收藏', description: '课程与学习路径' },
  { id: 'calendar', title: '日历记录', description: '备忘 / 规划' },
  { id: 'tools', title: '数据工具', description: '导出与清理本地数据' },
]

const activeSection = ref('account')

watchEffect(() => {
  const requested = String(route.query.section || '')
  if (!requested) return
  if (sections.some((s) => s.id === requested)) {
    activeSection.value = requested
  }
})

const activeSectionMeta = computed(
  () => sections.find((s) => s.id === activeSection.value) || sections[0]
)
const exportSnapshot = () => {
  exportErrorText.value = ''
  if (typeof window === 'undefined') {
    exportErrorText.value = '当前环境不支持导出。'
    return
  }

  const keys = [
    'wkmini-course-favorites',
    'wkmini-path-favorites',
    'wkmini-lesson-completed',
    'wkmini-lesson-current',
    'wkmini-calendar-memo',
    'wkmini-calendar-plan',
    'wkmini-last-error',
  ]

  const localStorageData = {}
  for (const key of keys) {
    localStorageData[key] = window.localStorage.getItem(key)
  }

  const snapshot = {
    exportedAt: new Date().toISOString(),
    version: 'v1.1',
    user: authStore.user,
    stats: {
      favoriteCourseCount: favoriteCourseCount.value,
      favoritePathCount: favoritePathCount.value,
      completedLessons: completedLessons.value,
      currentLessonId: currentLessonId.value,
      calendarMemoCount: calendarMemoCount.value,
      calendarPlanCount: calendarPlanCount.value,
    },
    localStorage: localStorageData,
  }

  const pad = (n) => String(n).padStart(2, '0')
  const now = new Date()
  const fileName = `wkmini-export-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.json`

  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

const clearLocalData = () => {
  if (typeof window === 'undefined') return
  const keys = [
    'wkmini-course-favorites',
    'wkmini-path-favorites',
    'wkmini-lesson-completed',
    'wkmini-lesson-current',
    'wkmini-calendar-memo',
    'wkmini-calendar-plan',
    'wkmini-last-error',
  ]
  for (const key of keys) {
    window.localStorage.removeItem(key)
  }
  window.location.reload()
}

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

    <section class="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside class="lg:sticky lg:top-24 lg:self-start">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>目录</CardTitle>
            <CardDescription>选择查看内容</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2 text-sm">
            <div class="md:hidden">
              <Select v-model="activeSection">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="选择模块" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="section in sections" :key="section.id" :value="section.id">
                    <SelectItemText>{{ section.title }}</SelectItemText>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <button
              v-for="section in sections"
              :key="section.id"
              type="button"
              class="hidden w-full rounded-2xl border px-3 py-3 text-left transition md:block"
              :class="
                activeSection === section.id
                  ? 'border-slate-900 bg-white text-slate-900'
                  : 'border-slate-200/70 bg-white/70 text-slate-700 hover:border-slate-300 hover:bg-white'
              "
              @click="activeSection = section.id"
            >
              <p class="text-sm font-semibold">{{ section.title }}</p>
              <p class="mt-1 text-xs text-slate-500">{{ section.description }}</p>
            </button>
          </CardContent>
        </Card>
      </aside>

      <section>
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>{{ activeSectionMeta.title }}</CardTitle>
            <CardDescription>{{ activeSectionMeta.description }}</CardDescription>
          </CardHeader>

          <CardContent v-if="activeSection === 'account'" class="space-y-3 text-sm text-slate-600">
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

          <CardContent v-else-if="activeSection === 'overview'" class="grid gap-4 md:grid-cols-2">
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-xs text-slate-500">已完成课时</p>
              <p class="mt-2 text-2xl font-semibold text-slate-900">{{ completedLessons }}</p>
              <p class="mt-1 text-xs text-slate-500">记录于本地</p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-xs text-slate-500">本周节奏 / 累计时长</p>
              <p class="mt-2 text-2xl font-semibold text-slate-900">{{ weeklyLessons }} / {{ totalHours }}</p>
              <p class="mt-1 text-xs text-slate-500">课时 / 小时（展示）</p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4 md:col-span-2">
              <p class="text-xs text-slate-500">当前课时</p>
              <p class="mt-2 text-sm font-semibold text-slate-900">{{ currentLesson?.title || '未选择' }}</p>
              <p class="mt-1 text-xs text-slate-500">Lesson ID: {{ currentLessonId }}</p>
            </div>
          </CardContent>

          <CardContent v-else-if="activeSection === 'favorites'" class="space-y-3 text-sm text-slate-600">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                <p class="text-xs text-slate-500">课程收藏</p>
                <p class="mt-2 text-2xl font-semibold text-slate-900">{{ favoriteCourseCount }}</p>
              </div>
              <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                <p class="text-xs text-slate-500">路径收藏</p>
                <p class="mt-2 text-2xl font-semibold text-slate-900">{{ favoritePathCount }}</p>
              </div>
            </div>
            <p class="text-xs text-slate-500">收藏信息保存在本地 localStorage。</p>
          </CardContent>

          <CardContent v-else-if="activeSection === 'calendar'" class="space-y-3 text-sm text-slate-600">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                <p class="text-xs text-slate-500">备忘条目</p>
                <p class="mt-2 text-2xl font-semibold text-slate-900">{{ calendarMemoCount }}</p>
              </div>
              <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                <p class="text-xs text-slate-500">规划条目</p>
                <p class="mt-2 text-2xl font-semibold text-slate-900">{{ calendarPlanCount }}</p>
              </div>
            </div>
            <p class="text-xs text-slate-500">用于课程学习计划页的日历编辑。</p>
          </CardContent>

          <CardContent v-else class="space-y-3 text-sm text-slate-600">
            <Button variant="outline" class="w-full" @click="exportSnapshot">导出本地数据（JSON）</Button>
            <Dialog>
              <DialogTrigger as-child>
                <Button variant="outline" class="w-full border-rose-200 text-rose-700 hover:bg-rose-50">清空本地数据</Button>
              </DialogTrigger>
              <DialogContent class="sm:max-w-[520px]">
                <DialogHeader>
                  <DialogTitle>确认清空本地数据？</DialogTitle>
                  <DialogDescription>该操作会删除本地收藏、进度与日历记录，并刷新页面。</DialogDescription>
                </DialogHeader>
                <div class="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-xs text-slate-600">
                  建议先使用“导出本地数据（JSON）”备份。
                </div>
                <DialogFooter class="gap-2 sm:gap-0">
                  <DialogClose as-child>
                    <Button variant="outline">取消</Button>
                  </DialogClose>
                  <Button class="bg-rose-600 text-white hover:bg-rose-700" @click="clearLocalData">确认清空</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <p v-if="exportErrorText" class="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
              {{ exportErrorText }}
            </p>
            <p v-if="fakeAuthEnabled" class="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
              当前启用了前端假登录（VITE_FAKE_AUTH=true）。
            </p>
          </CardContent>
        </Card>
      </section>
    </section>
  </BasePage>
</template>
