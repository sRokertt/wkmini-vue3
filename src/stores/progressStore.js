import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const completedStoreKey = 'wkmini-lesson-completed'
const currentStoreKey = 'wkmini-lesson-current'

const readStorage = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback
  }
  const raw = window.localStorage.getItem(key)
  if (!raw) {
    return fallback
  }
  try {
    return JSON.parse(raw)
  } catch (error) {
    return fallback
  }
}

const writeStorage = (key, value) => {
  if (typeof window === 'undefined') {
    return
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const useProgressStore = defineStore('progress', () => {
  const completedLessonIds = ref(readStorage(completedStoreKey, [1]))
  const currentLessonId = ref(readStorage(currentStoreKey, 2))
  const weeklyLessons = ref(6)
  const totalHours = ref(28)

  const completedCount = computed(() => completedLessonIds.value.length)

  const isCompleted = (lessonId) => completedLessonIds.value.includes(lessonId)

  const toggleCompleted = (lessonId) => {
    if (completedLessonIds.value.includes(lessonId)) {
      completedLessonIds.value = completedLessonIds.value.filter((id) => id !== lessonId)
      writeStorage(completedStoreKey, completedLessonIds.value)
      return
    }
    completedLessonIds.value = [...completedLessonIds.value, lessonId]
    writeStorage(completedStoreKey, completedLessonIds.value)
  }

  const setCurrentLesson = (lessonId) => {
    currentLessonId.value = lessonId
    writeStorage(currentStoreKey, lessonId)
  }

  const statusMap = {
    done: { label: '已完成', className: 'border-emerald-200/70 text-emerald-600' },
    current: { label: '进行中', className: 'border-amber-200/70 text-amber-600' },
    todo: { label: '未开始', className: 'border-slate-200/70 text-slate-400' },
  }

  const getStatus = (lessonId) => {
    if (lessonId === currentLessonId.value) return statusMap.current
    if (completedLessonIds.value.includes(lessonId)) return statusMap.done
    return statusMap.todo
  }

  return {
    completedLessonIds,
    currentLessonId,
    weeklyLessons,
    totalHours,
    completedCount,
    isCompleted,
    toggleCompleted,
    setCurrentLesson,
    getStatus,
  }
})
