# 推荐 Skills - AI 辅助 CSS 开发

## 概述

本文档介绍可用于 CSS 开发的 AI Skills，帮助您更高效地进行前端开发。

## 前端设计类 Skills

### [`frontend-design()`](skills/frontend-design:1)
**用途**: 创建独特的、生产级的前端界面，具有高设计质量

**适用场景**:
- 创建网页组件和页面
- 构建 React 组件、HTML/CSS 布局
- 样式化和美化 Web UI
- 避免通用 AI 美学风格

**示例提示词**:
```
"创建一个带有渐变背景和卡片布局的落地页"
```

### [`ui-styling()`](skills/ui-styling:1)
**用途**: 使用 shadcn/ui 组件和 Tailwind CSS 创建用户界面

**适用场景**:
- 构建用户界面
- 实现设计系统
- 创建响应式布局
- 添加可访问组件（对话框、下拉菜单、表单等）
- 定制主题和颜色
- 实现暗色模式

### [`tailwindcss()`](skills/tailwindcss:1)
**用途**: Tailwind CSS 实用优先 CSS 框架

**适用场景**:
- 使用实用类样式化
- 构建响应式设计
- 使用主题变量定制设计系统

### [`ui-ux-pro-max()`](skills/ui-ux-pro-max:1)
**用途**: UI/UX 设计智能，包含 50+ 样式、21 种调色板、50+ 字体配对

**可用功能**:
- 50 种设计风格
- 21 种调色板
- 50 种字体配对
- 20 种图表类型
- 9 种技术栈支持（React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui）

**适用场景**:
- 规划、构建、设计、实现前端项目
- 检查 UI/UX 代码
- 颜色调色板、动画、布局、字体配对

## CSS 规范类 Skills

### [`frontend-code-review()`](skills/frontend-code-review:1)
**用途**: 触发时审查前端文件（.tsx, .ts, .js）

**适用场景**:
- 审查未提交的工作
- 与 main/develop 分支比较
- 合并前分析更改

## Vue 开发类 Skills

### [`vue-best-practices()`](skills/vue-best-practices:1)
**用途**: Vue.js 任务必备技能

**适用场景**:
- Vue 3 开发
- Composition API with `<script setup>`
- TypeScript 集成
- SSR (Volar, vue-tsc)

### [`vue-development-guides()`](skills/vue-development-guides:1)
**用途**: Vue.js 应用开发最佳实践

**适用场景**:
- 开发 Vue.js 项目
- 重构 Vue 代码
- 审查 Vue 项目

### [`create-adaptable-composable()`](skills/create-adaptable-composable:1)
**用途**: 创建库级 Vue composable

**适用场景**:
- 创建可复用的 composables
- 接受 MaybeRef / MaybeRefOrGetter 输入
- 响应式行为优化

## 工作流类 Skills

### [`brainstorming()`](skills/brainstorming:1)
**用途**: 创意工作前必须使用

**适用场景**:
- 探索用户意图和需求
- 实现前进行设计讨论
- 功能规划

### [`writing-plans()`](skills/writing-plans:1)
**用途**: 有多步骤任务时的规划

**适用场景**:
- 有书面实现计划时
- 接触代码前
- 多步骤任务规划

### [`subagent-driven-development()`](skills/subagent-driven-development:1)
**用途**: 执行实现计划

**适用场景**:
- 当前会话中有独立任务
- 需要并行处理时

## 使用建议

### 快速开始

1. **设计阶段**: 使用 [`brainstorming()`](skills/brainstorming:1) 探索需求
2. **规划阶段**: 使用 [`writing-plans()`](skills/writing-plans:1) 制定计划
3. **开发阶段**: 使用 [`frontend-design()`](skills/frontend-design:1) 或 [`ui-styling()`](skills/ui-styling:1)
4. **审查阶段**: 使用 [`frontend-code-review()`](skills/frontend-code-review:1)

### CSS 开发工作流

```
1. 需求分析 → brainstorming
2. 技术选型 → ui-ux-pro-max
3. 代码实现 → frontend-design / ui-styling / tailwindcss
4. Vue 组件 → vue-best-practices / vue-development-guides
5. 代码审查 → frontend-code-review
```

## 如何启用 Skills

在 VJSP 中，Skills 会自动根据任务类型触发。您也可以手动指定使用特定 Skill。

## 相关资源

- [VJSP 官方文档](https://vjsp.dev/)
- [Skills 仓库](https://github.com/vjsp/skills)