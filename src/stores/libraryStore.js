import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { libraryDefaults, libraryItems as libraryData } from '@/data/library'

const normalizeItem = (item) => ({
  ...libraryDefaults,
  ...item,
  tags: Array.isArray(item?.tags) ? item.tags : libraryDefaults.tags,
  type: typeof item?.type === 'string' ? item.type : libraryDefaults.type,
  format: typeof item?.format === 'string' ? item.format : libraryDefaults.format,
  outline: Array.isArray(item?.outline) ? item.outline : libraryDefaults.outline,
})

export const useLibraryStore = defineStore('library', () => {
  const items = ref(libraryData)

  const itemList = computed(() => items.value.map((item) => normalizeItem(item)))

  const filteredByCategory = (category) =>
    itemList.value.filter((item) => category === 'all' || item.category === category)

  return {
    itemList,
    filteredByCategory,
  }
})
