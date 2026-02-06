<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLibraryStore } from '@/stores/libraryStore'

const route = useRoute()
const router = useRouter()
const libraryStore = useLibraryStore()

const itemId = computed(() => Number(route.params.id || 1))
const item = computed(() => libraryStore.itemList.find((entry) => entry.id === itemId.value))

const outline = computed(() => item.value?.outline || [])
const selectedSection = ref('')
const activeHeadingId = ref('')
const contentScrollEl = ref(null)

const usageSteps = [
  '下载或复制模板到你的个人笔记库',
  '根据当前项目/课程目标进行填充与调整',
  '每次学习后更新一次关键记录',
  '阶段结束后复盘并沉淀输出',
]

const resourceText = computed(() => {
  const title = item.value?.title || ''
  const desc = item.value?.description || ''
  const summary = item.value?.summary || ''
  const type = item.value?.type || ''
  const format = item.value?.format || ''
  const tags = (item.value?.tags || []).join(', ')

  return [
    `# ${title}`,
    '',
    `- 类型：${type || '未标注'}`,
    `- 格式：${format || '未标注'}`,
    `- 标签：${tags || '未标注'}`,
    '',
    `## 用途`,
    summary || desc || '（请补充用途说明）',
    '',
    `## 使用步骤`,
    usageSteps.map((step, index) => `${index + 1}. ${step}`).join('\n'),
    '',
    `## 模板内容`,
    `### 关键要点`,
    `- （要点 1）`,
    `- （要点 2）`,
    '',
    `### 清单`,
    `- [ ] （检查项 1）`,
    `- [ ] （检查项 2）`,
    '',
    `## 复盘记录`,
    `- 日期：`,
    `- 结论：`,
    `- 下一步：`,
  ].join('\n')
})

const effectiveOutline = computed(() => {
  if (outline.value.length) {
    return outline.value
  }
  return [
    {
      id: 'template',
      title: '模板内容',
      content: resourceText.value,
    },
  ]
})

const selectedSectionData = computed(
  () => effectiveOutline.value.find((section) => section.id === selectedSection.value) || null
)

const hashString = (value) => {
  const input = String(value || '')
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0
  }
  return hash.toString(36)
}

const slugify = (value) => {
  const text = String(value || '').trim().toLowerCase()
  if (!text) return ''

  return text
    .replace(/[\t\r\n]/g, ' ')
    .replace(/[`~!@#$%^&*()+=\[\]{};:'",.<>/?\\|]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

const buildTocItems = (markdown, sectionId) => {
  if (!markdown) return []

  const lines = String(markdown).split(/\r?\n/)
  const seen = new Map()
  const toc = []

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line)
    if (!match) continue

    const level = match[1].length
    const text = match[2]
    const baseSlug = slugify(text) || `h-${hashString(text)}`
    const baseKey = `${sectionId}-${baseSlug}`
    const count = (seen.get(baseKey) || 0) + 1
    seen.set(baseKey, count)

    const deduped = count === 1 ? baseKey : `${baseKey}-${count}`
    toc.push({
      id: `toc-${deduped}`,
      level,
      text,
    })
  }
  return toc
}

const tocItems = computed(() =>
  buildTocItems(selectedSectionData.value?.content || '', selectedSection.value || 'section')
)

const renderMarkdown = (markdown, toc) => {
  const md = new MarkdownIt({
    html: false,
    linkify: true,
  })

  const idsByOrder = Array.isArray(toc) ? toc.map((item) => item.id) : []
  const fallbackHeadingOpen = md.renderer.rules.heading_open
  let headingIndex = 0
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (token.tag === 'h2' || token.tag === 'h3') {
      const id = idsByOrder[headingIndex]
      headingIndex += 1
      if (id) token.attrSet('id', id)
    }

    if (fallbackHeadingOpen) {
      return fallbackHeadingOpen(tokens, idx, options, env, self)
    }
    return self.renderToken(tokens, idx, options)
  }

  return md.render(markdown || '')
}

const renderedSectionHtml = computed(() =>
  renderMarkdown(selectedSectionData.value?.content || '', tocItems.value)
)

const scrollToHeading = async (id) => {
  await nextTick()
  const root = contentScrollEl.value
  if (!root) return
  const el = root.querySelector(`#${CSS.escape(id)}`)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const selectSection = (sectionId) => {
  selectedSection.value = sectionId
  router.replace({
    query: {
      ...route.query,
      section: sectionId,
    },
  })
}

let tocObserver = null

const teardownObserver = () => {
  if (tocObserver) {
    tocObserver.disconnect()
    tocObserver = null
  }
}

const setupObserver = async () => {
  teardownObserver()
  await nextTick()
  const root = contentScrollEl.value
  if (!root) return

  const headings = Array.from(root.querySelectorAll('h2[id], h3[id]'))
  if (!headings.length) return

  activeHeadingId.value = headings[0].id

  tocObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

      const next = visible[0]?.target?.id
      if (next && activeHeadingId.value !== next) {
        activeHeadingId.value = next
      }
    },
    {
      root,
      threshold: [0.25, 0.5, 0.75],
      rootMargin: '0px 0px -60% 0px',
    }
  )

  for (const heading of headings) {
    tocObserver.observe(heading)
  }
}

watch([renderedSectionHtml, selectedSection], () => {
  setupObserver()
})

onBeforeUnmount(() => {
  teardownObserver()
})

const copyState = ref('idle')

const copyToClipboard = async () => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(resourceText.value)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = resourceText.value
      textarea.setAttribute('readonly', 'true')
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    copyState.value = 'done'
    window.setTimeout(() => {
      copyState.value = 'idle'
    }, 1200)
  } catch (error) {
    copyState.value = 'error'
    window.setTimeout(() => {
      copyState.value = 'idle'
    }, 1200)
  }
}

const downloadTemplate = () => {
  const title = (item.value?.title || 'resource').replace(/\s+/g, '-')
  const blob = new Blob([resourceText.value], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${title}.md`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

watchEffect(() => {
  if (!effectiveOutline.value.length) {
    selectedSection.value = ''
    return
  }
  const fromQuery = typeof route.query.section === 'string' ? route.query.section : ''
  const exists = effectiveOutline.value.some((section) => section.id === fromQuery)
  const next = exists ? fromQuery : effectiveOutline.value[0].id
  if (selectedSection.value !== next) {
    selectedSection.value = next
  }
  if (!exists) {
    router.replace({
      query: {
        ...route.query,
        section: next,
      },
    })
  }
})
</script>

<template>
  <BasePage max-width="max-w-6xl">
    <nav class="mb-6 text-xs text-slate-500">
      <router-link class="hover:text-slate-900" to="/">首页</router-link>
      <span class="px-2">/</span>
      <router-link class="hover:text-slate-900" to="/library">资料库</router-link>
      <span class="px-2">/</span>
      <router-link class="hover:text-slate-900" :to="`/library/${itemId}`">{{ item?.title }}</router-link>
      <span class="px-2">/</span>
      <span class="text-slate-900">打开资源</span>
    </nav>

    <section class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside class="lg:sticky lg:top-24 lg:self-start">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>目录</CardTitle>
            <CardDescription>跳转本节内容</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2 text-sm">
            <p v-if="!tocItems.length" class="text-xs text-slate-500">本节没有可跳转的小标题</p>
            <button
              v-for="toc in tocItems"
              :key="toc.id"
              type="button"
              class="flex w-full items-center gap-2 rounded-xl border bg-white/80 px-3 py-2 text-left transition"
              :class="
                activeHeadingId === toc.id
                  ? 'border-slate-900 text-slate-900'
                  : 'border-slate-200/70 text-slate-700 hover:border-slate-300'
              "
              @click="scrollToHeading(toc.id)"
            >
              <span class="text-xs text-slate-400" :class="toc.level === 3 ? 'ml-4' : ''">#</span>
              <span class="min-w-0 flex-1 truncate" :class="toc.level === 3 ? 'text-slate-600' : 'font-medium'">
                {{ toc.text }}
              </span>
            </button>
          </CardContent>
        </Card>

        <Card class="mt-4 border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>筛选/标签</CardTitle>
            <CardDescription>资源属性</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2 text-xs text-slate-500">
              <Badge v-if="item?.type" variant="outline">{{ item.type }}</Badge>
              <Badge v-if="item?.format" variant="outline">{{ item.format }}</Badge>
              <Badge v-for="tag in item?.tags || []" :key="tag" variant="outline">{{ tag }}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card class="mt-4 border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>大纲</CardTitle>
            <CardDescription>切换资源页面</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2 text-sm">
            <button
              v-for="section in effectiveOutline"
              :key="section.id"
              type="button"
              class="flex w-full items-center justify-between rounded-xl border bg-white/80 px-3 py-2 text-left transition"
              :class="
                selectedSection === section.id
                  ? 'border-slate-900 text-slate-900'
                  : 'border-slate-200/70 text-slate-700 hover:border-slate-300'
              "
              :aria-current="selectedSection === section.id ? 'page' : undefined"
              @click="selectSection(section.id)"
            >
              <span class="font-medium">{{ section.title }}</span>
              <span class="text-xs" :class="selectedSection === section.id ? 'text-slate-900' : 'text-slate-400'">→</span>
            </button>
          </CardContent>
        </Card>
      </aside>

      <main class="space-y-6">
        <section class="">
          <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
            <div class="flex flex-wrap items-center gap-3">
              <Badge class="bg-slate-900 text-white">资源打开</Badge>
              <Badge v-if="item?.type" variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">
                {{ item.type }}
              </Badge>
              <Badge v-if="item?.format" variant="outline" class="border-slate-200 bg-white/70">
                {{ item.format }}
              </Badge>
            </div>
            <h1 class="mt-5 text-3xl font-semibold">{{ item?.title }}</h1>
            <p class="mt-3 text-sm text-slate-600">{{ item?.summary }}</p>
          </div>
        </section>

        <section class="">
          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>快捷操作</CardTitle>
              <CardDescription>一键使用模板/清单</CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button class="bg-slate-900 text-white hover:bg-slate-800" @click="downloadTemplate">下载 Markdown</Button>
              <Button variant="outline" @click="copyToClipboard">
                {{ copyState === 'done' ? '已复制' : copyState === 'error' ? '复制失败' : '复制模板' }}
              </Button>
              <router-link :to="`/library/${itemId}`">
                <Button variant="outline">返回详情</Button>
              </router-link>
              <router-link to="/library">
                <Button variant="outline">回到资料库</Button>
              </router-link>
            </CardContent>
          </Card>
        </section>

        <section class="">
          <Card class="border-slate-200/80 bg-white/80">
            <CardHeader>
              <CardTitle>{{ effectiveOutline.find((s) => s.id === selectedSection)?.title || '内容' }}</CardTitle>
              <CardDescription>来自资源大纲</CardDescription>
            </CardHeader>
            <CardContent class="space-y-3 text-sm text-slate-600">
              <div class="rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
                <div
                  ref="contentScrollEl"
                  class="resource-markdown max-h-[60vh] overflow-y-auto pr-2 text-sm leading-relaxed text-slate-700"
                  v-html="renderedSectionHtml"
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </section>
  </BasePage>
</template>

<style scoped>
.resource-markdown :deep(h2) {
  color: #0f172a;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
}

.resource-markdown :deep(h3) {
  color: #0f172a;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.75rem 0 0.35rem;
}

.resource-markdown :deep(p) {
  margin: 0.5rem 0;
}

.resource-markdown :deep(ul) {
  list-style: disc;
  padding-left: 1.25rem;
  color: #475569;
}

.resource-markdown :deep(ol) {
  list-style: decimal;
  padding-left: 1.25rem;
  color: #475569;
}

.resource-markdown :deep(li) {
  margin: 0.35rem 0;
}

.resource-markdown :deep(blockquote) {
  border: 1px solid rgba(226, 232, 240, 0.7);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  color: #334155;
  margin: 0.75rem 0;
}

.resource-markdown :deep(pre) {
  border: 1px solid rgba(226, 232, 240, 0.7);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  overflow-x: auto;
  font-size: 0.75rem;
  color: #334155;
}

.resource-markdown :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
