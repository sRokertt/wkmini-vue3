<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import PathsGrid from '@/components/paths/PathsGrid.vue'
import PathsHeader from '@/components/paths/PathsHeader.vue'
import PathsTabs from '@/components/paths/PathsTabs.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
</script>

<template>
  <BasePage max-width="max-w-6xl">
    <PathsHeader />

    <section class="mt-10">
      <PathsTabs default-value="all">
        <TabsContent value="all" class="mt-6">
          <PathsGrid>
            <Card class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>机器学习入门路线</CardTitle>
                <CardDescription>数学基础 + 经典算法</CardDescription>
              </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">12 周规划，适合全栈转向算法方向。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">12 周</Badge>
                  <router-link to="/paths/1">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>工程化基础路线</CardTitle>
                  <CardDescription>数据结构 + 系统设计</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">强化工程能力与交付思维。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">8 周</Badge>
                  <router-link to="/paths/2">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数学基础路线</CardTitle>
                  <CardDescription>线代 + 概率 + 微积分</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">适合从零开始打基础。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <router-link to="/paths/3">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>学习方法路线</CardTitle>
                  <CardDescription>目标拆解 + 复盘机制</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">建立自我驱动与执行节奏。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">4 周</Badge>
                  <router-link to="/paths/4">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>模型评估与优化</CardTitle>
                  <CardDescription>特征工程 + 指标体系</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">面向项目落地。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <router-link to="/paths/5">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>系统化交付路线</CardTitle>
                  <CardDescription>性能 + 可靠性 + 可观测性</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">从个人项目走向生产级交付。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">8 周</Badge>
                  <router-link to="/paths/6">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
          </PathsGrid>
        </TabsContent>
        <TabsContent value="ml" class="mt-6">
          <PathsGrid>
            <Card class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>机器学习入门路线</CardTitle>
                  <CardDescription>数学基础 + 经典算法</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">12 周规划，适合全栈转向算法方向。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">12 周</Badge>
                  <router-link to="/paths/1">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>工程化基础路线</CardTitle>
                  <CardDescription>数据结构 + 系统设计</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">强化工程能力与交付思维。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">8 周</Badge>
                  <router-link to="/paths/2">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
          </PathsGrid>
        </TabsContent>
        <TabsContent value="eng" class="mt-6">
          <PathsGrid>
            <Card class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>工程化基础路线</CardTitle>
                  <CardDescription>数据结构 + 系统设计</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">强化工程能力与交付思维。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">8 周</Badge>
                  <router-link to="/paths/2">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>系统化交付路线</CardTitle>
                  <CardDescription>性能 + 可靠性 + 可观测性</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">从个人项目走向生产级交付。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">8 周</Badge>
                  <router-link to="/paths/6">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
          </PathsGrid>
        </TabsContent>
        <TabsContent value="math" class="mt-6">
          <PathsGrid>
            <Card class="border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>数学基础路线</CardTitle>
                  <CardDescription>线代 + 概率 + 微积分</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">适合从零开始打基础。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <router-link to="/paths/3">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>高频数学专题</CardTitle>
                  <CardDescription>微积分 + 概率论</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">聚焦模型训练最常用的数学工具。</p>
                </CardContent>
                <CardFooter class="flex items-center justify-between">
                  <Badge variant="outline">6 周</Badge>
                  <router-link to="/paths/5">
                    <Button variant="outline" size="sm">查看详情</Button>
                  </router-link>
                </CardFooter>
              </Card>
          </PathsGrid>
        </TabsContent>
      </PathsTabs>
    </section>
  </BasePage>
</template>
