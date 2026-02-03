<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <section class="mt-14">
    <Card class="border-slate-200/80 bg-slate-900 text-white">
      <CardHeader>
        <CardTitle>准备好开始了吗？</CardTitle>
        <CardDescription class="text-slate-200">
          用清晰结构推进每一次学习。你只需要坚持执行。
        </CardDescription>
      </CardHeader>
      <CardFooter class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <router-link to="/paths">
          <Button variant="outline" class="border-white bg-white text-slate-900 hover:bg-transparent hover:text-white">查看路线图</Button>
        </router-link>
      </CardFooter>
    </Card>
  </section>
</template>
