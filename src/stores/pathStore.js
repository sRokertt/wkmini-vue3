import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { pathDefaults, paths as pathData } from '@/data/paths'

const normalizePath = (path) => ({
  ...pathDefaults,
  ...path,
  tags: path?.tags ?? pathDefaults.tags,
  stages: path?.stages ?? pathDefaults.stages,
  recommendedCourseIds: path?.recommendedCourseIds ?? pathDefaults.recommendedCourseIds,
})

export const usePathStore = defineStore('path', () => {
  const paths = ref(pathData)
  const currentPathId = ref(1)

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

  return {
    pathList,
    currentPathId,
    getPathById,
    filteredByCategory,
    setCurrentPath,
  }
})
