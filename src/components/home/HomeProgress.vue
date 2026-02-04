<script setup>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { computed } from 'vue'
import { useCourseStore } from '@/stores/courseStore'
import { usePathStore } from '@/stores/pathStore'
import { useProgressStore } from '@/stores/progressStore'

const courseStore = useCourseStore()
const pathStore = usePathStore()
const progressStore = useProgressStore()

const currentPath = computed(() => pathStore.getPathById(pathStore.currentPathId))
const currentCourse = computed(() => courseStore.getCourseById(1))
const currentLessonLabel = computed(() => {
  const lesson = currentCourse.value.lessonItems.find((item) => item.id === progressStore.currentLessonId)
  if (!lesson) return '下一步尚未设置'
  return `${lesson.title}`
})
</script>

<template>
  <Card class="border-slate-200 bg-white/90 shadow-sm">
    <CardHeader>
      <CardTitle>学习进度概览</CardTitle>
      <CardDescription>轻量追踪，专注完成</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
        <p class="text-sm font-medium text-slate-700">当前学习路径</p>
        <p class="mt-1 text-lg font-semibold text-slate-900">{{ currentPath.title }}</p>
        <p class="mt-2 text-xs text-slate-500">下一步：{{ currentLessonLabel }}</p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="rounded-2xl border border-slate-200/80 bg-white/90 p-3">
          <p class="text-xs text-slate-500">本周学习</p>
          <p class="mt-2 text-xl font-semibold">{{ progressStore.weeklyLessons }} 课时</p>
        </div>
        <div class="rounded-2xl border border-slate-200/80 bg-white/90 p-3">
          <p class="text-xs text-slate-500">累计学习</p>
          <p class="mt-2 text-xl font-semibold">{{ progressStore.totalHours }} 小时</p>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <router-link class="w-full" to="/lessons/2">
        <Button variant="outline" class="w-full">继续上次进度</Button>
      </router-link>
    </CardFooter>
  </Card>
</template>
