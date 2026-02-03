<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import LibraryGrid from '@/components/library/LibraryGrid.vue'
import LibraryHeader from '@/components/library/LibraryHeader.vue'
import LibraryTabs from '@/components/library/LibraryTabs.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
</script>

<template>
  <BasePage max-width="max-w-6xl">
    <LibraryHeader />

    <section class="mt-10">
      <LibraryTabs default-value="all">
        <TabsContent value="all" class="mt-6">
          <LibraryGrid>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>高频公式卡片</CardTitle>
                  <CardDescription>快速复习与记忆</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">面向数学与算法常用公式。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>算法模板库</CardTitle>
                  <CardDescription>常见解题套路</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">涵盖图、树、动态规划等。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>模型评估模板</CardTitle>
                  <CardDescription>指标与实验记录</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">用于沉淀实验过程。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>项目实践清单</CardTitle>
                  <CardDescription>从需求到交付</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">帮助自学者完成可展示成果。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>学习复盘清单</CardTitle>
                  <CardDescription>总结与迭代</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">让学习成果可持续。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>课程笔记清单</CardTitle>
                  <CardDescription>结构化记录</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">沉淀高质量笔记。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>可视化工具</CardTitle>
                  <CardDescription>线代与几何</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">配合图形辅助理解。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数据集索引</CardTitle>
                  <CardDescription>常用公开数据</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">用于练习与实验。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>阅读资料库</CardTitle>
                  <CardDescription>精选论文与文章</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">持续更新内容。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
          </LibraryGrid>
        </TabsContent>

        <TabsContent value="templates" class="mt-6">
          <LibraryGrid>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>高频公式卡片</CardTitle>
                  <CardDescription>快速复习与记忆</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">面向数学与算法常用公式。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>算法模板库</CardTitle>
                  <CardDescription>常见解题套路</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">涵盖图、树、动态规划等。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>模型评估模板</CardTitle>
                  <CardDescription>指标与实验记录</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">用于沉淀实验过程。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
          </LibraryGrid>
        </TabsContent>

        <TabsContent value="checklists" class="mt-6">
          <LibraryGrid>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>项目实践清单</CardTitle>
                  <CardDescription>从需求到交付</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">帮助自学者完成可展示成果。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>学习复盘清单</CardTitle>
                  <CardDescription>总结与迭代</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">让学习成果可持续。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>课程笔记清单</CardTitle>
                  <CardDescription>结构化记录</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">沉淀高质量笔记。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
          </LibraryGrid>
        </TabsContent>

        <TabsContent value="tools" class="mt-6">
          <LibraryGrid>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>可视化工具</CardTitle>
                  <CardDescription>线代与几何</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">配合图形辅助理解。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>数据集索引</CardTitle>
                  <CardDescription>常用公开数据</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">用于练习与实验。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
              <Card class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>阅读资料库</CardTitle>
                  <CardDescription>精选论文与文章</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">持续更新内容。</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">进入</Button>
                </CardFooter>
              </Card>
          </LibraryGrid>
        </TabsContent>
      </LibraryTabs>
    </section>
  </BasePage>
</template>
