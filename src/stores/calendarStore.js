import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

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

export const useCalendarStore = defineStore('calendar', () => {
  const memoByDate = ref(readStorage(memoStoreKey))
  const planByDate = ref(readStorage(planStoreKey))

  const getMemo = (key) => memoByDate.value[key] || ''
  const getPlan = (key) => planByDate.value[key] || ''

  const setMemo = (key, value) => {
    memoByDate.value = { ...memoByDate.value, [key]: value }
    writeStorage(memoStoreKey, memoByDate.value)
  }

  const setPlan = (key, value) => {
    planByDate.value = { ...planByDate.value, [key]: value }
    writeStorage(planStoreKey, planByDate.value)
  }

  const hasRecord = computed(() => (key) => {
    const memoValue = memoByDate.value[key]
    const planValue = planByDate.value[key]
    return Boolean((memoValue && memoValue.trim()) || (planValue && planValue.trim()))
  })

  return {
    memoByDate,
    planByDate,
    getMemo,
    getPlan,
    setMemo,
    setPlan,
    hasRecord,
  }
})
