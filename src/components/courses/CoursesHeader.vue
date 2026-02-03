<script setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'search', 'reset'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
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
          :value="modelValue"
          class="bg-white/80"
          placeholder="搜索课程"
          @input="onInput"
        />
        <Button class="bg-slate-900 text-white hover:bg-slate-800" @click="emit('search')">搜索</Button>
        <Button variant="outline" @click="emit('reset')">重置</Button>
      </div>
    </div>
  </section>
</template>
