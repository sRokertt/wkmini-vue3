# wkmini-vue3

wkmini 产品的演示前端。项目使用静态数据与 Pinia Store 模拟真实业务流转，无需 mock.js 或后端服务。

## 技术栈

- Vue 3 + Vite
- Pinia（状态管理）
- Vue Router
- Tailwind CSS
- tweakcn 风格组件（位于 `src/components/ui`）

## 数据架构

- 静态数据源：`src/data/courses.js`
- Pinia stores：
  - `src/stores/courseStore.js`（课程数据 + 收藏）
  - `src/stores/calendarStore.js`（日历备忘）
  - `src/stores/progressStore.js`（学习进度）

### Local Storage Keys

- `wkmini-calendar-memo`
- `wkmini-calendar-plan`
- `wkmini-lesson-completed`
- `wkmini-lesson-current`
- `wkmini-course-favorites`

## 安装与运行

```sh
pnpm install
```

### 开发环境

```sh
pnpm dev
```

### 构建生产包

```sh
pnpm build
```
