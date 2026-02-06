<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'
import BasePage from '@/components/layout/BasePage.vue'
import BreadcrumbNav from '@/components/layout/BreadcrumbNav.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useCourseStore } from '@/stores/courseStore'
import { useProgressStore } from '@/stores/progressStore'

const route = useRoute()
const router = useRouter()

const courseStore = useCourseStore()
const course = computed(() => courseStore.getCourseById(1))
const lessons = computed(() => course.value.lessonItems || [])

const progressStore = useProgressStore()

const currentLessonId = computed(() => Number(route.params.id || 2))
const currentIndex = computed(() => lessons.value.findIndex((lesson) => lesson.id === currentLessonId.value))
const currentLesson = computed(() => lessons.value[currentIndex.value] || lessons.value[0])
const prevLesson = computed(() => lessons.value[currentIndex.value - 1])
const nextLesson = computed(() => lessons.value[currentIndex.value + 1])

const goToLesson = (lessonId) => {
  router.push(`/lessons/${lessonId}`)
}

const isCompleted = computed(() => progressStore.isCompleted(currentLessonId.value))

const toggleCompleted = () => {
  progressStore.toggleCompleted(currentLessonId.value)
}

watch(currentLessonId, (value) => {
  progressStore.setCurrentLesson(value)
})

const getStatus = (lessonId) => progressStore.getStatus(lessonId)


const md = new MarkdownIt({
  html: false,
  linkify: true,
})
const lessonMarkdown = computed(() => currentLesson.value?.content || '')
const renderedMarkdown = computed(() => md.render(lessonMarkdown.value))

const breadcrumbItems = computed(() => [
  { label: '首页', to: '/' },
  { label: '课程', to: '/courses' },
  { label: course.value?.title || '课程', to: '/courses/1' },
  { label: '章节目录', to: '/courses/1/chapters' },
  { label: currentLesson.value?.title || '章节/文章' },
])
</script>

<template>
  <BasePage>
    <BreadcrumbNav :items="breadcrumbItems" />
    <section class="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <article class="flex h-full flex-col rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
          <div class="flex flex-wrap items-center gap-3">
            <Badge class="bg-slate-900 text-white">章节/文章</Badge>
            <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">基础</Badge>
            <Badge variant="outline" class="border-slate-200 bg-white/70">12 分钟</Badge>
          </div>
          <h1 class="mt-5 text-3xl font-semibold">{{ currentLesson.title }}</h1>
          <p class="mt-3 text-sm text-slate-600">
            本节围绕矩阵乘法的几何意义展开，结合二维/三维变换理解线性映射。
          </p>

          <div class="lesson-markdown mt-8 flex-1 space-y-6 overflow-y-auto pr-2 text-sm leading-relaxed text-slate-700" v-html="renderedMarkdown" />

          <div class="mt-8 flex flex-col gap-3 pb-2 sm:flex-row sm:items-center">
            <Button variant="outline" :disabled="!prevLesson" @click="goToLesson(prevLesson.id)">上一节</Button>
            <Button
              :variant="isCompleted ? 'default' : 'outline'"
              :class="isCompleted ? 'bg-slate-900 text-white hover:bg-slate-800' : ''"
              @click="toggleCompleted"
            >
              {{ isCompleted ? '已完成' : '标记已完成' }}
            </Button>
            <Button variant="outline" :disabled="!nextLesson" @click="goToLesson(nextLesson.id)">下一节</Button>
            <Button variant="outline" @click="$router.push('/courses/1/chapters')">章节目录</Button>
            <Button variant="outline" @click="$router.push('/courses/1')">返回课程</Button>
          </div>
        </article>

        <aside class="space-y-4">
          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>章节导航</CardTitle>
              <CardDescription>快速切换章节</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2 text-sm text-slate-600">
              <button
                v-for="lesson in lessons"
                :key="lesson.id"
                class="flex w-full items-center justify-between rounded-xl border border-slate-200/70 px-4 py-3 text-left"
                :class="lesson.id === currentLessonId ? 'bg-slate-50/80' : 'bg-white/80'"
                @click="goToLesson(lesson.id)"
              >
                <span>{{ lesson.id }}. {{ lesson.title }}</span>
                <span
                  class="rounded-full border px-2 py-0.5 text-xs"
                  :class="getStatus(lesson.id).className"
                >
                  {{ getStatus(lesson.id).label }}
                </span>
              </button>
            </CardContent>
          </Card>

          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>学习建议</CardTitle>
              <CardDescription>提升理解效率</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2 text-sm text-slate-600">
              <p>• 每个概念都配合图形理解</p>
              <p>• 记录关键矩阵的作用</p>
              <p>• 做完练习再进入下一节</p>
            </CardContent>
          </Card>

          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>公式卡</CardTitle>
              <CardDescription>常用公式速查</CardDescription>
            </CardHeader>
            <CardContent class="space-y-3 text-sm text-slate-600">
              <div class="rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2">
                <p class="text-xs text-slate-500">线性变换</p>
                <p class="mt-1 font-medium text-slate-700">y = A · x</p>
              </div>
              <div class="rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2">
                <p class="text-xs text-slate-500">矩阵乘法</p>
                <p class="mt-1 font-medium text-slate-700">C = A · B</p>
              </div>
            </CardContent>
          </Card>

          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>配套资料</CardTitle>
              <CardDescription>延伸阅读与练习</CardDescription>
            </CardHeader>
            <CardContent class="grid gap-3 text-sm text-slate-600">
              <router-link class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-slate-700 hover:border-slate-300" to="/library">
                <span>线性变换可视化讲义</span>
                <span class="text-xs text-slate-400">资料库</span>
              </router-link>
              <router-link class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-slate-700 hover:border-slate-300" to="/library">
                <span>矩阵运算练习题集</span>
                <span class="text-xs text-slate-400">资料库</span>
              </router-link>
            </CardContent>
          </Card>
        </aside>
    </section>
  </BasePage>
</template>

<style scoped>
.lesson-markdown :deep(h2) {
  color: #0f172a;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.lesson-markdown :deep(p) {
  margin: 0.5rem 0;
}

.lesson-markdown :deep(ul) {
  list-style: disc;
  padding-left: 1.25rem;
  color: #475569;
}

.lesson-markdown :deep(li) {
  margin: 0.35rem 0;
}

.lesson-markdown :deep(blockquote) {
  border: 1px solid rgba(226, 232, 240, 0.7);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  color: #334155;
  margin: 0.75rem 0;
}

.lesson-markdown :deep(pre) {
  border: 1px solid rgba(226, 232, 240, 0.7);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  overflow-x: auto;
  font-size: 0.75rem;
  color: #334155;
}

.lesson-markdown :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
