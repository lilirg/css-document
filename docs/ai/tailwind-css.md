# Tailwind CSS 使用指南

## 概述

Tailwind CSS 是一个实用优先（utility-first）的 CSS 框架，帮助您快速构建自定义设计。本文档介绍如何在项目中使用 Tailwind CSS。

## 1. 安装配置

### 创建 VitePress + Tailwind 项目

```bash
npm create vite@latest my-app -- --template vue
cd my-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 配置 Tailwind

`tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./.vitepress/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
```

### 添加 Tailwind 指令

`src/style.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 2. 基础用法

### 实用类

```html
<!-- 基本样式 -->
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>

<!-- 响应式 -->
<div class="text-sm md:text-lg lg:text-xl">
  响应式字体
</div>

<!-- 悬停状态 -->
<button class="bg-blue-500 hover:bg-blue-600 transition">
  按钮
</button>
```

### 布局工具

```html
<!-- Flexbox -->
<div class="flex items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## 3. 自定义组件

### 定义组件类

`src/style.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors;
  }
  
  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }
  
  .btn-secondary {
    @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-md p-6;
  }
}
```

### 使用组件

```html
<button class="btn btn-primary">主要按钮</button>
<button class="btn btn-secondary">次要按钮</button>

<div class="card">
  <h3 class="text-xl font-bold mb-2">卡片标题</h3>
  <p class="text-gray-600">卡片内容</p>
</div>
```

## 4. 响应式设计

### 断点

```html
<!-- 在不同屏幕尺寸显示不同布局 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>列 1</div>
  <div>列 2</div>
  <div>列 3</div>
</div>
```

### 移动优先

```css
/* 默认移动端样式 */
.sidebar {
  @apply fixed inset-0 w-full h-64;
}

/* 平板以上 */
@media (min-width: 768px) {
  .sidebar {
    @apply static w-64 h-auto;
  }
}
```

## 5. 暗色模式

### 配置

```javascript
// tailwind.config.js
export default {
  darkMode: 'class',
  // ...
}
```

### 使用

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  支持暗色模式
</div>

<button @click="toggleDark">
  切换主题
</button>
```

## 6. 与 AI 配合使用

### 提示词示例

```
"使用 Tailwind CSS 创建一个带有渐变背景的卡片组件，包含标题、内容和按钮"
```

AI 生成的代码：

```html
<div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
  <h3 class="text-xl font-bold mb-2">卡片标题</h3>
  <p class="mb-4 opacity-90">卡片内容描述</p>
  <button class="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
    操作
  </button>
</div>
```

### 设计系统集成

```
"我的设计系统使用以下 Token：
- 主色: #1890ff
- 圆角: 8px
- 阴影: 0 2px 8px rgba(0,0,0,0.15)

请创建 Tailwind 配置并生成按钮组件"
```

## 7. 性能优化

### PurgeCSS

Tailwind v3 默认移除未使用的样式：

```javascript
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // v3 默认启用 tree-shaking
}
```

### 按需加载

```html
<!-- 只应用需要的类 -->
<div class="flex items-center p-4">
  内容
</div>
```

## 8. 插件

### 常用插件

```bash
npm install -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio
```

### 配置插件

```javascript
// tailwind.config.js
export default {
  plugins: {
    '@tailwindcss/typography': {},
    '@tailwindcss/forms': {},
  }
}
```

### Typography 插件

```html
<article class="prose prose-lg dark:prose-invert">
  <h1>标题</h1>
  <p>段落内容...</p>
</article>
```

## 相关资源

- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)
- [Tailwind Play](https://play.tailwindcss.com/)