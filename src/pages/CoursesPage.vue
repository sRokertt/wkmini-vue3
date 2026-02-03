<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const router = useRouter()
const searchQuery = ref('')
const appliedQuery = ref('')

const courses = [
  {
    id: 1,
    title: '线性代数快速入门',
    description: '为机器学习打底的核心数学模块。',
    chapters: '8 章节',
    category: 'math',
  },
  {
    id: 2,
    title: '数据结构与算法',
    description: '强调思维方式与复杂度分析。',
    chapters: '12 章节',
    category: 'algo',
  },
  {
    id: 3,
    title: '概率与统计',
    description: '支撑建模与评估的基础工具。',
    chapters: '9 章节',
    category: 'math',
  },
  {
    id: 4,
    title: '机器学习基础',
    description: '从模型概念到实战流程。',
    chapters: '10 章节',
    category: 'ml',
  },
  {
    id: 5,
    title: '系统设计入门',
    description: '面向工程化与可交付。',
    chapters: '6 章节',
    category: 'system',
  },
  {
    id: 6,
    title: '学习方法论',
    description: '帮助建立自我驱动节奏。',
    chapters: '4 章节',
    category: 'method',
  },
]

const goCourse = (id) => {
  router.push(`/courses/${id}`)
}

const keyword = computed(() => appliedQuery.value.trim().toLowerCase())

const filteredAll = computed(() =>
  courses.filter((course) => {
    if (!keyword.value) return true
    return `${course.title} ${course.description}`.toLowerCase().includes(keyword.value)
  })
)

const filteredAlgo = computed(() =>
  filteredAll.value.filter((course) => course.category === 'algo')
)

const filteredMath = computed(() =>
  filteredAll.value.filter((course) => course.category === 'math')
)

const filteredMl = computed(() =>
  filteredAll.value.filter((course) => course.category === 'ml')
)

const goSearch = () => {
  appliedQuery.value = searchQuery.value
}

const resetSearch = () => {
  searchQuery.value = ''
  appliedQuery.value = ''
}
</script>

<template>
  <BasePage>
    <section class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
      <div class="flex flex-wrap items-center gap-3">
        <Badge class="bg-slate-900 text-white">课程库</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">高频主题</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">持续更新</Badge>
        </div>
      <div class="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 class="text-3xl font-semibold">课程列表</h1>
          <p class="mt-2 text-sm text-slate-600">聚焦基础能力与可复用知识结构，适合自学路径搭建。</p>
        </div>
        <div class="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <Input
            v-model="searchQuery"
            class="bg-white/80"
            placeholder="搜索课程"
          />
          <Button class="bg-slate-900 text-white hover:bg-slate-800" @click="goSearch">搜索</Button>
          <Button variant="outline" @click="resetSearch">重置</Button>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <Tabs default-value="all" class="w-full">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 class="text-2xl font-semibold">课程分类</h2>
            <p class="mt-1 text-sm text-slate-500">按主题快速切换</p>
          </div>
          <TabsList>
            <TabsTrigger value="all">全部</TabsTrigger>
            <TabsTrigger value="algo">算法</TabsTrigger>
            <TabsTrigger value="math">数学</TabsTrigger>
            <TabsTrigger value="ml">机器学习</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" class="mt-6">
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card v-for="course in filteredAll" :key="course.id" class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ course.title }}</CardTitle>
                <CardDescription>{{ course.description }}</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-slate-600">{{ course.description }}</p>
              </CardContent>
              <CardFooter class="flex items-center justify-between">
                <Badge variant="outline">{{ course.chapters }}</Badge>
                <Button variant="outline" size="sm" @click="goCourse(course.id)">进入</Button>
              </CardFooter>
            </Card>
            <Card v-if="filteredAll.length === 0" class="border-dashed border-slate-200/80 bg-white/60">
              <CardHeader>
                <CardTitle>没有匹配课程</CardTitle>
                <CardDescription>尝试更换关键词或切换分类。</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="algo" class="mt-6">
          <div class="grid gap-4 md:grid-cols-2">
            <Card v-for="course in filteredAlgo" :key="course.id" class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ course.title }}</CardTitle>
                <CardDescription>{{ course.description }}</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-slate-600">{{ course.description }}</p>
              </CardContent>
              <CardFooter class="flex items-center justify-between">
                <Badge variant="outline">{{ course.chapters }}</Badge>
                <Button variant="outline" size="sm" @click="goCourse(course.id)">进入</Button>
              </CardFooter>
            </Card>
            <Card v-if="filteredAlgo.length === 0" class="border-dashed border-slate-200/80 bg-white/60">
              <CardHeader>
                <CardTitle>没有匹配课程</CardTitle>
                <CardDescription>尝试更换关键词或切换分类。</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="math" class="mt-6">
          <div class="grid gap-4 md:grid-cols-2">
            <Card v-for="course in filteredMath" :key="course.id" class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ course.title }}</CardTitle>
                <CardDescription>{{ course.description }}</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-slate-600">{{ course.description }}</p>
              </CardContent>
              <CardFooter class="flex items-center justify-between">
                <Badge variant="outline">{{ course.chapters }}</Badge>
                <Button variant="outline" size="sm" @click="goCourse(course.id)">进入</Button>
              </CardFooter>
            </Card>
            <Card v-if="filteredMath.length === 0" class="border-dashed border-slate-200/80 bg-white/60">
              <CardHeader>
                <CardTitle>没有匹配课程</CardTitle>
                <CardDescription>尝试更换关键词或切换分类。</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ml" class="mt-6">
          <div class="grid gap-4 md:grid-cols-2">
            <Card v-for="course in filteredMl" :key="course.id" class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ course.title }}</CardTitle>
                <CardDescription>{{ course.description }}</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-slate-600">{{ course.description }}</p>
              </CardContent>
              <CardFooter class="flex items-center justify-between">
                <Badge variant="outline">{{ course.chapters }}</Badge>
                <Button variant="outline" size="sm" @click="goCourse(course.id)">进入</Button>
              </CardFooter>
            </Card>
            <Card v-if="filteredMl.length === 0" class="border-dashed border-slate-200/80 bg-white/60">
              <CardHeader>
                <CardTitle>没有匹配课程</CardTitle>
                <CardDescription>尝试更换关键词或切换分类。</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  </BasePage>
</template>
