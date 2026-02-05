import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { pathDefaults, paths as pathData } from '@/data/paths'

const favoriteStoreKey = 'wkmini-path-favorites'

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

const normalizePath = (path) => ({
  ...pathDefaults,
  ...path,
  tags: path?.tags ?? pathDefaults.tags,
  stages: path?.stages ?? pathDefaults.stages,
  recommendedCourseIds: path?.recommendedCourseIds ?? pathDefaults.recommendedCourseIds,
})

const normalizeIds = (value) =>
  Array.isArray(value)
    ? value
        .map((item) => Number(item))
        .filter((item) => Number.isInteger(item) && item > 0)
    : []

export const usePathStore = defineStore('path', () => {
  const paths = ref(pathData)
  const currentPathId = ref(1)
  const favoriteIds = ref(normalizeIds(readStorage(favoriteStoreKey, [])))

  const pathList = computed(() => paths.value.map((path) => normalizePath(path)))

  const getPathById = (id) => {
    const fallback = paths.value[0]
    const found = paths.value.find((path) => path.id === id) || fallback
    return normalizePath(found)
  }

  const filteredByCategory = (category) =>
    pathList.value.filter((path) => category === 'all' || path.category === category)

  const setCurrentPath = (id) => {
    currentPathId.value = id
  }

  const isFavorited = (pathId) => favoriteIds.value.includes(Number(pathId))

  const toggleFavorite = (pathId) => {
    const id = Number(pathId)
    if (!Number.isInteger(id) || id <= 0) {
      return
    }
    if (favoriteIds.value.includes(id)) {
      favoriteIds.value = favoriteIds.value.filter((item) => item !== id)
      writeStorage(favoriteStoreKey, favoriteIds.value)
      return
    }
    favoriteIds.value = [...favoriteIds.value, id]
    writeStorage(favoriteStoreKey, favoriteIds.value)
  }

  return {
    pathList,
    currentPathId,
    getPathById,
    filteredByCategory,
    setCurrentPath,
    favoriteIds,
    isFavorited,
    toggleFavorite,
  }
})
