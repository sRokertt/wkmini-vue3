<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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

const route = useRoute()

const courses = {
  1: {
    title: '线性代数快速入门',
    duration: '8 小时',
    planSummary: '聚焦向量、矩阵、线性变换与特征值，拆解为可执行节奏，适合 2-3 周完成。',
    planWeeks: [
      {
        title: '第 1 周',
        description: '向量与线性空间',
        items: ['课程 1-2：向量、基与线性无关', '练习：投影、线性组合与子空间判定'],
      },
      {
        title: '第 2 周',
        description: '矩阵与线性变换',
        items: ['课程 3-4：矩阵运算与线性方程组', '练习：线性变换的几何意义与可逆性'],
      },
      {
        title: '第 3 周',
        description: '特征值与分解',
        items: ['课程 5-6：特征值、对角化、SVD', '练习：PCA 直觉与降维应用'],
      },
    ],
    outcomes: [
      '一份线性代数核心概念与公式卡片',
      '3-5 道典型题的推导与解析',
      '线性回归/PCA 的线代表达笔记',
    ],
  },
}

const courseId = computed(() => Number(route.params.id || 1))
const course = computed(() => courses[courseId.value] || courses[1])

const calendarWeekdays = ['日', '一', '二', '三', '四', '五', '六']
const today = new Date()
const activeMonth = ref(new Date(today.getFullYear(), today.getMonth(), 1))
const selectedDate = ref(new Date(today.getFullYear(), today.getMonth(), today.getDate()))
const isDialogOpen = ref(false)
const memoStoreKey = 'wkmini-calendar-memo'
const planStoreKey = 'wkmini-calendar-plan'

const readStorage = (key) => {
  if (typeof window === 'undefined') {
    return {}
  }
  const raw = window.localStorage.getItem(key)
  if (!raw) {
    return {}
  }
  try {
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object') {
      return parsed
    }
  } catch (error) {
    return {}
  }
  return {}
}

const writeStorage = (key, value) => {
  if (typeof window === 'undefined') {
    return
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}

const memoByDate = ref(readStorage(memoStoreKey))
const planByDate = ref(readStorage(planStoreKey))

const calendarYear = computed(() => activeMonth.value.getFullYear())
const calendarMonth = computed(() => activeMonth.value.getMonth())
const calendarTitle = computed(() => `${calendarYear.value}年${calendarMonth.value + 1}月`)
const daysInMonth = computed(() => new Date(calendarYear.value, calendarMonth.value + 1, 0).getDate())
const firstWeekday = computed(() => new Date(calendarYear.value, calendarMonth.value, 1).getDay())

const calendarDays = computed(() => {
  const totalCells = Math.ceil((firstWeekday.value + daysInMonth.value) / 7) * 7
  const days = Array(totalCells).fill(null)
  for (let day = 1; day <= daysInMonth.value; day += 1) {
    days[firstWeekday.value + day - 1] = day
  }
  return days
})

const selectedKey = computed(() => {
  const year = selectedDate.value.getFullYear()
  const month = String(selectedDate.value.getMonth() + 1).padStart(2, '0')
  const day = String(selectedDate.value.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
})

const selectedLabel = computed(() => {
  const year = selectedDate.value.getFullYear()
  const month = selectedDate.value.getMonth() + 1
  const day = selectedDate.value.getDate()
  return `${year}年${month}月${day}日`
})

const memoText = computed({
  get: () => memoByDate.value[selectedKey.value] || '',
  set: (value) => {
    memoByDate.value = { ...memoByDate.value, [selectedKey.value]: value }
    writeStorage(memoStoreKey, memoByDate.value)
  },
})

const planText = computed({
  get: () => planByDate.value[selectedKey.value] || '',
  set: (value) => {
    planByDate.value = { ...planByDate.value, [selectedKey.value]: value }
    writeStorage(planStoreKey, planByDate.value)
  },
})

const isSameMonth = (date) =>
  date.getFullYear() === calendarYear.value && date.getMonth() === calendarMonth.value

const isToday = (day) =>
  day &&
  calendarYear.value === today.getFullYear() &&
  calendarMonth.value === today.getMonth() &&
  day === today.getDate()

const isSelected = (day) => day && isSameMonth(selectedDate.value) && day === selectedDate.value.getDate()

const selectDay = (day) => {
  if (!day) {
    return
  }
  selectedDate.value = new Date(calendarYear.value, calendarMonth.value, day)
}

const changeMonth = (delta) => {
  const next = new Date(calendarYear.value, calendarMonth.value + delta, 1)
  activeMonth.value = next
  if (!isSameMonth(selectedDate.value)) {
    selectedDate.value = new Date(next.getFullYear(), next.getMonth(), 1)
  }
}

const goToToday = () => {
  activeMonth.value = new Date(today.getFullYear(), today.getMonth(), 1)
  selectedDate.value = new Date(today.getFullYear(), today.getMonth(), today.getDate())
}

const closeDialog = () => {
  isDialogOpen.value = false
}
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="flex h-full flex-col rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">课程学习计划</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">{{ course.title }}</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">{{ course.duration }}</Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">课程学习计划</h1>
        <p class="mt-3 text-sm text-slate-600">
          {{ course.planSummary }}
        </p>
        <div class="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center">
          <router-link :to="`/courses/${courseId}`">
            <Button variant="outline">返回课程详情</Button>
          </router-link>
          <router-link to="/lessons/1">
            <Button class="bg-slate-900 text-white hover:bg-slate-800">开始第一课</Button>
          </router-link>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>推荐学习路线计划</CardTitle>
          <CardDescription>系统为你匹配的进阶路线</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4 text-sm text-slate-600">
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">推荐路线</p>
            <p class="mt-2 text-base font-semibold text-slate-900">机器学习基础路线</p>
            <p class="mt-2 text-sm text-slate-600">线性代数 → 概率统计 → 机器学习基础</p>
            <div class="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
              <Badge variant="outline">12 周</Badge>
              <Badge variant="outline">进阶</Badge>
              <Badge variant="outline">适合转向算法</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter class="pt-0 px-4 pb-4">
          <router-link class="w-full" to="/paths/1">
            <Button class="w-full bg-slate-900 text-white hover:bg-slate-800">查看路线详情</Button>
          </router-link>
        </CardFooter>
      </Card>
    </section>

    <section class="mt-10">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>学习节奏与周计划</CardTitle>
          <CardDescription>将学习安排拆成可执行节奏</CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-xs text-slate-500">总周期</p>
              <p class="mt-2 text-base font-semibold text-slate-900">2-3 周</p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-xs text-slate-500">每周安排</p>
              <p class="mt-2 text-sm text-slate-700">2 次学习 + 1 次习题推导</p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
              <p class="text-xs text-slate-500">配套动作</p>
              <p class="mt-2 text-sm text-slate-700">每节课输出 1 份公式与概念小结</p>
            </div>
          </div>
          <div class="grid gap-4 md:grid-cols-3">
            <Card v-for="week in course.planWeeks" :key="week.title" class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ week.title }}</CardTitle>
                <CardDescription>{{ week.description }}</CardDescription>
              </CardHeader>
              <CardContent class="space-y-2 text-sm text-slate-600">
                <p v-for="item in week.items" :key="item">• {{ item }}</p>
              </CardContent>
            </Card>
          </div>
          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>本课程产出</CardTitle>
              <CardDescription>完成后可交付的成果</CardDescription>
            </CardHeader>
            <CardContent class="space-y-2 text-sm text-slate-600">
              <p v-for="item in course.outcomes" :key="item">• {{ item }}</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>

    <section class="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>日历表</CardTitle>
          <CardDescription>安排每周学习节奏</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4 text-sm text-slate-600">
          <div class="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
            <div class="flex items-center justify-between">
              <button
                class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500"
                type="button"
                @click="changeMonth(-1)"
              >
                ‹
              </button>
              <p class="text-sm font-semibold text-slate-900">{{ calendarTitle }}</p>
              <button
                class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500"
                type="button"
                @click="changeMonth(1)"
              >
                ›
              </button>
            </div>
            <div class="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span>已选：{{ selectedLabel }}</span>
              <button
                class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                type="button"
                @click="goToToday"
              >
                回到今日
              </button>
            </div>
            <div class="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
              <span v-for="day in calendarWeekdays" :key="day" class="font-medium">{{ day }}</span>
            </div>
            <div class="mt-3 grid grid-cols-7 gap-2">
              <div
                v-for="(day, index) in calendarDays"
                :key="index"
                class="flex h-9 items-center justify-center"
              >
                <span
                  v-if="day"
                  class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl text-xs transition"
                  :class="{
                    'bg-slate-900 text-white': isSelected(day),
                    'bg-slate-100 text-slate-900 hover:bg-slate-200': !isSelected(day),
                    'ring-2 ring-slate-300 font-semibold': isToday(day) && !isSelected(day),
                    'ring-2 ring-slate-900 ring-offset-2 ring-offset-white': isToday(day) && isSelected(day),
                  }"
                  @click="selectDay(day)"
                >
                  {{ day }}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>日历表记录编辑</CardTitle>
          <CardDescription>添加学习备忘与规划</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4 text-sm text-slate-600">
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">当前日期</p>
            <p class="mt-2 text-sm font-semibold text-slate-900">{{ selectedLabel }}</p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">学习备忘</p>
            <p class="mt-2 text-sm text-slate-700">
              {{ memoText || '暂无备忘' }}
            </p>
          </div>
          <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
            <p class="text-xs text-slate-500">规划记录</p>
            <p class="mt-2 text-sm text-slate-700">
              {{ planText || '暂无规划' }}
            </p>
          </div>
        </CardContent>
        <CardFooter class="px-4 pb-4">
          <Dialog v-model:open="isDialogOpen">
            <DialogTrigger as-child>
              <Button class="w-full bg-slate-900 text-white hover:bg-slate-800">添加备忘录</Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[520px]">
              <DialogHeader>
                <DialogTitle>添加备忘录</DialogTitle>
                <DialogDescription>为 {{ selectedLabel }} 添加学习备忘与规划</DialogDescription>
              </DialogHeader>
              <div class="space-y-4">
                <div class="rounded-2xl border border-slate-200/70 bg-white p-4">
                  <label class="text-xs text-slate-500" for="memo-note">学习备忘</label>
                  <input
                    id="memo-note"
                    v-model="memoText"
                    class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-slate-400"
                    placeholder="例如：周二晚复盘线性变换笔记"
                    type="text"
                  />
                </div>
                <div class="rounded-2xl border border-slate-200/70 bg-white p-4">
                  <label class="text-xs text-slate-500" for="plan-note">规划记录</label>
                  <textarea
                    id="plan-note"
                    v-model="planText"
                    class="mt-2 min-h-[120px] w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-slate-400"
                    placeholder="例如：周末完成特征值章节练习"
                  ></textarea>
                </div>
              </div>
              <DialogFooter class="gap-2 sm:gap-0">
                <DialogClose as-child>
                  <Button variant="outline">取消</Button>
                </DialogClose>
                <Button class="bg-slate-900 text-white hover:bg-slate-800" @click="closeDialog">保存</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </section>
  </BasePage>
</template>
