export const courseDefaults = {
  title: '',
  description: '',
  category: 'math',
  chapters: 0,
  level: '进阶',
  duration: '',
  tags: [],
  planSummary: '',
  planWeeks: [],
  outcomes: [],
  highlights: '',
  readiness: '',
  outcome: '',
  audience: '',
  advice: '',
  keyTopics: [],
  learningWays: [],
  lessonItems: [],
  recommended: [],
}

export const courses = [
  {
    id: 1,
    title: '线性代数快速入门',
    description: '为机器学习打底的核心数学模块。',
    category: 'math',
    chapters: 3,
    level: '进阶',
    duration: '8 小时',
    tags: ['数学基础', '机器学习前置', '可视化推导'],
    planSummary: '聚焦向量、矩阵、线性变换与特征值，拆解为可执行节奏，适合 2-3 周完成。',
    planWeeks: [
      {
        title: '第 1 周',
        description: '向量与线性空间',
        items: ['课程 1-2：向量、基与线性无关', '练习：投影、线性组合与子空间判定'],
      },
      {
        title: '第 2 周',
        description: '矩阵与线性变换',
        items: ['课程 3-4：矩阵运算与线性方程组', '练习：线性变换的几何意义与可逆性'],
      },
      {
        title: '第 3 周',
        description: '特征值与分解',
        items: ['课程 5-6：特征值、对角化、SVD', '练习：PCA 直觉与降维应用'],
      },
    ],
    outcomes: ['一份线性代数核心概念与公式卡片', '3-5 道典型题的推导与解析', '线性回归/PCA 的线代表达笔记'],
    highlights: '几何直观 + 推导并重',
    readiness: '高中数学基础即可',
    outcome: '完成核心概念卡片',
    audience: '准备进入机器学习/数据科学方向的学习者',
    advice: '每周 2-3 课时，配合笔记与练习',
    keyTopics: ['向量与空间', '矩阵与线性变换', '特征值与分解'],
    learningWays: ['例题推导 + 课堂练习', '每节课 1 份要点笔记', '章节复盘与概念卡片'],
    lessonItems: [
      {
        id: 1,
        title: '向量与空间',
        duration: '20 分钟',
        content: `## 核心概念
向量是描述空间位置与方向的基础对象，向量空间提供了加法与数乘的结构。

- 线性组合构成子空间
- 基向量决定坐标系
- 维度代表自由度

## 示例与练习
用两个不共线向量构成一个平面，并说明其中任意向量都可表示为线性组合。`,
      },
      {
        id: 2,
        title: '矩阵与线性变换',
        duration: '35 分钟',
        content: `## 核心概念
矩阵可以看作线性变换的编码方式。理解“对标准基的作用”是最直接的路径。

- 线性变换保持向量加法与数乘结构
- 矩阵列向量描述基向量的变换结果
- 矩阵乘法对应变换复合

## 示例与练习
尝试用一个 2x2 矩阵描述旋转与缩放，并观察其对单位正方形的影响。

> 练习：构造一个先缩放再旋转的矩阵，并解释复合顺序。

## 示例代码


\`\`\`js
// 向量 x 经过矩阵 A 变换
const A = [
  [2, 0],
  [0, 1],
]

const x = [1, 2]
const y = [
  A[0][0] * x[0] + A[0][1] * x[1],
  A[1][0] * x[0] + A[1][1] * x[1],
]
// y = [2, 2]
\`\`\`

## 要点小结
矩阵的列向量是理解线性变换的关键。掌握它能帮助你更快理解特征值与分解。`,
      },
      {
        id: 3,
        title: '特征值与分解',
        duration: '40 分钟',
        content: `## 核心概念
特征值描述线性变换在特定方向上的缩放比例，特征向量是保持方向不变的向量。

- 对角化简化线性变换的分析
- 特征分解用于理解矩阵结构

## 示例与练习
给定 2x2 矩阵，求特征值并判断是否可对角化。`,
      },
    ],
    recommended: [
      { title: '公式速查卡', desc: '常用矩阵运算' },
      { title: '练习题集', desc: '含答案解析' },
      { title: '可视化讲义', desc: '图示与动画' },
    ],
  },
  {
    id: 2,
    title: '数据结构与算法',
    description: '强调思维方式与复杂度分析。',
    category: 'algo',
    chapters: 12,
  },
  {
    id: 3,
    title: '概率与统计',
    description: '支撑建模与评估的基础工具。',
    category: 'math',
    chapters: 9,
  },
  {
    id: 4,
    title: '机器学习基础',
    description: '从模型概念到实战流程。',
    category: 'ml',
    chapters: 10,
  },
  {
    id: 5,
    title: '系统设计入门',
    description: '面向工程化与可交付。',
    category: 'system',
    chapters: 6,
  },
  {
    id: 6,
    title: '学习方法论',
    description: '帮助建立自我驱动节奏。',
    category: 'method',
    chapters: 4,
  },
]
