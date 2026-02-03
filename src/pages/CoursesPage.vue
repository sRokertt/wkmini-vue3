<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import CourseGrid from '@/components/courses/CourseGrid.vue'
import CoursesHeader from '@/components/courses/CoursesHeader.vue'
import CoursesTabs from '@/components/courses/CoursesTabs.vue'
import { TabsContent } from '@/components/ui/tabs'
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
  <BasePage max-width="max-w-6xl">
    <CoursesHeader v-model="searchQuery" @search="goSearch" @reset="resetSearch" />
    <section class="mt-10">
      <CoursesTabs default-value="all">
        <TabsContent value="all" class="mt-6">
          <CourseGrid :courses="filteredAll" @enter="goCourse" />
        </TabsContent>

        <TabsContent value="algo" class="mt-6">
          <CourseGrid :courses="filteredAlgo" columns="md:grid-cols-2" @enter="goCourse" />
        </TabsContent>

        <TabsContent value="math" class="mt-6">
          <CourseGrid :courses="filteredMath" columns="md:grid-cols-2" @enter="goCourse" />
        </TabsContent>

        <TabsContent value="ml" class="mt-6">
          <CourseGrid :courses="filteredMl" columns="md:grid-cols-2" @enter="goCourse" />
        </TabsContent>
      </CoursesTabs>
    </section>
  </BasePage>
</template>
