import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { libraryDefaults, libraryItems as libraryData } from '@/data/library'

const normalizeItem = (item) => ({
  ...libraryDefaults,
  ...item,
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
