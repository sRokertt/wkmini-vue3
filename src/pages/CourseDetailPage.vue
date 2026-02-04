<script setup>
import { computed, ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const isFavorited = ref(false)

const route = useRoute()

const courses = {
  1: {
    title: '线性代数快速入门',
    level: '进阶',
    chapters: 12,
    description: '聚焦向量、矩阵与线性变换的核心概念，配合推导与练习题，建立可靠的数学直觉。',
    tags: ['数学基础', '机器学习前置', '可视化推导'],
    duration: '8 小时',
    audience: '准备进入机器学习/数据科学方向的学习者',
    advice: '每周 2-3 课时，配合笔记与练习',
    highlights: '几何直观 + 推导并重',
    readiness: '高中数学基础即可',
    outcome: '完成核心概念卡片',
    keyTopics: ['向量与空间', '矩阵与线性变换', '特征值与分解'],
    learningWays: ['例题推导 + 课堂练习', '每节课 1 份要点笔记', '章节复盘与概念卡片'],
    lessonItems: [
      { id: 1, title: '向量与空间', duration: '20 分钟' },
      { id: 2, title: '矩阵与线性变换', duration: '35 分钟' },
      { id: 3, title: '特征值与分解', duration: '40 分钟' },
    ],
    recommended: [
      { title: '公式速查卡', desc: '常用矩阵运算' },
      { title: '练习题集', desc: '含答案解析' },
      { title: '可视化讲义', desc: '图示与动画' },
    ],
  },
}

const courseId = computed(() => Number(route.params.id || 1))
const course = computed(() => courses[courseId.value] || courses[1])

const completedLessonIds = useStorage('wkmini-lesson-completed', [1])
const currentLessonStorage = useStorage('wkmini-lesson-current', 2)

const totalChapters = computed(() => course.value.lessonItems.length)
const currentLessonId = computed(() => currentLessonStorage.value)
const currentLessonLabel = computed(() => {
  const current = course.value.lessonItems.find((lesson) => lesson.id === currentLessonId.value)
  if (!current) return '2. 矩阵与线性变换'
  return `${current.id}. ${current.title}`
})
const completedCount = computed(() => completedLessonIds.value.length)

const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value
}
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
          <div class="flex flex-wrap items-center gap-3">
            <Badge class="bg-slate-900 text-white">课程详情</Badge>
            <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">{{ course.level }}</Badge>
            <Badge variant="outline" class="border-slate-200 bg-white/70">{{ totalChapters }} 章节</Badge>
          </div>
          <h1 class="mt-5 text-3xl font-semibold">{{ course.title }}</h1>
          <p class="mt-3 text-sm text-slate-600">
            {{ course.description }}
          </p>
          <div class="mt-6 flex flex-wrap gap-3 text-xs text-slate-500">
            <Badge v-for="tag in course.tags" :key="tag" variant="outline">{{ tag }}</Badge>
          </div>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <router-link :to="`/courses/${courseId}/chapters`">
              <Button variant="outline">查看章节目录</Button>
            </router-link>
            <Button
              :variant="isFavorited ? 'default' : 'outline'"
              :class="isFavorited ? 'bg-slate-900 text-white hover:bg-slate-800' : ''"
              @click="toggleFavorite"
            >
              {{ isFavorited ? '已收藏' : '收藏课程' }}
            </Button>
          </div>
          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-xs font-medium text-slate-500">课程亮点</p>
              <p class="mt-2 text-sm text-slate-700">{{ course.highlights }}</p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-xs font-medium text-slate-500">学习准备</p>
              <p class="mt-2 text-sm text-slate-700">{{ course.readiness }}</p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-xs font-medium text-slate-500">学习产出</p>
              <p class="mt-2 text-sm text-slate-700">{{ course.outcome }}</p>
            </div>
          </div>
          <div class="mt-6 rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs font-medium text-slate-500">关键章节与学习方式</p>
            <div class="mt-3 grid gap-4 md:grid-cols-2">
              <ul class="space-y-1 text-sm text-slate-700">
                <li v-for="topic in course.keyTopics" :key="topic">• {{ topic }}</li>
              </ul>
              <ul class="space-y-1 text-sm text-slate-700">
                <li v-for="way in course.learningWays" :key="way">• {{ way }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>学习进度</CardTitle>
              <CardDescription>上次学习位置</CardDescription>
            </CardHeader>
            <CardContent class="space-y-3 text-sm text-slate-600">
              <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                <p class="text-xs text-slate-500">上次学习到</p>
                <p class="mt-2 text-base font-semibold text-slate-900">{{ currentLessonLabel }}</p>
                <p class="mt-2 text-xs text-slate-500">已完成 {{ completedCount }}/{{ totalChapters }} 章节</p>
              </div>
            </CardContent>
            <CardFooter>
              <router-link class="w-full" :to="`/lessons/${currentLessonId}`">
                <Button class="w-full bg-slate-900 text-white hover:bg-slate-800">继续学习</Button>
              </router-link>
            </CardFooter>
          </Card>
          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>课程信息</CardTitle>
              <CardDescription>学习节奏与建议</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4 text-sm text-slate-600">
              <div>
                <p class="text-xs text-slate-500">预计时长</p>
              <p class="mt-1 text-lg font-semibold text-slate-900">{{ course.duration }}</p>
              </div>
              <div>
                <p class="text-xs text-slate-500">适合人群</p>
              <p class="mt-1">{{ course.audience }}</p>
              </div>
              <div>
                <p class="text-xs text-slate-500">学习建议</p>
              <p class="mt-1">{{ course.advice }}</p>
              </div>
            </CardContent>
            <CardFooter>
              <router-link class="w-full" :to="`/courses/${courseId}/plan`">
                <Button variant="outline" class="w-full">查看学习计划</Button>
              </router-link>
            </CardFooter>
          </Card>
        </div>
    </section>

    <section class="mt-10 grid gap-4 md:grid-cols-2">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>课程目标</CardTitle>
            <CardDescription>学完后可达成</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2 text-sm text-slate-600">
            <p>• 理解向量、矩阵与线性变换的几何意义</p>
            <p>• 掌握矩阵分解与特征值的应用场景</p>
            <p>• 读懂常见机器学习模型中的线代表达</p>
          </CardContent>
        </Card>
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>课程结构</CardTitle>
            <CardDescription>章节拆解</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3 text-sm text-slate-600">
            <router-link
              v-for="lesson in course.lessonItems"
              :key="lesson.id"
              class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-700 hover:border-slate-300"
              :to="`/lessons/${lesson.id}`"
            >
              <span>{{ lesson.id }}. {{ lesson.title }}</span>
              <span class="text-xs text-slate-400">{{ lesson.duration }}</span>
            </router-link>
          </CardContent>
        </Card>
    </section>

    <section class="mt-10">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>推荐资料</CardTitle>
            <CardDescription>课程配套内容</CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4 md:grid-cols-3">
            <router-link
              v-for="item in course.recommended"
              :key="item.title"
              class="rounded-2xl border border-slate-200/70 bg-white/80 p-4 hover:border-slate-300"
              to="/library"
            >
              <p class="text-sm font-medium">{{ item.title }}</p>
              <p class="mt-2 text-xs text-slate-500">{{ item.desc }}</p>
            </router-link>
          </CardContent>
        </Card>
    </section>
  </BasePage>
</template>
