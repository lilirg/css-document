# CSS 响应式设计

响应式设计（Responsive Web Design）是一种使网页能够在不同设备和屏幕尺寸上都能良好显示的设计方法。

## 响应式设计概述

### 核心概念

| 概念 | 说明 |
| :--- | :--- |
| 流体网格 | 使用相对单位（如百分比）定义布局 |
| 弹性图片 | 图片根据容器大小自动缩放 |
| 媒体查询 | 根据设备特性应用不同样式 |

### 视口（Viewport）

```html
<!-- 必须添加视口 meta 标签 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 媒体查询（Media Queries）

### 基本语法

```css
/* 基本媒体查询 */
@media (condition) {
  /* 样式规则 */
}

/* 多个条件 */
@media (min-width: 768px) and (max-width: 1024px) {
  /* 样式规则 */
}

/* 多个媒体查询 */
@media (min-width: 768px) {
  /* 样式规则 */
}

@media (min-width: 1024px) {
  /* 样式规则 */
}
```

### 常用媒体特性

| 特性 | 说明 | 示例 |
| :--- | :--- | :--- |
| `width` | 视口宽度 | `(width: 768px)` |
| `min-width` | 最小宽度 | `(min-width: 768px)` |
| `max-width` | 最大宽度 | `(max-width: 768px)` |
| `height` | 视口高度 | `(height: 480px)` |
| `min-height` | 最小高度 | `(min-height: 480px)` |
| `max-height` | 最大高度 | `(max-height: 480px)` |
| `orientation` | 方向 | `(orientation: portrait)` |
| `resolution` | 分辨率 | `(resolution: 2dppx)` |
| `prefers-color-scheme` | 颜色方案偏好 | `(prefers-color-scheme: dark)` |
| `prefers-reduced-motion` | 减少动画偏好 | `(prefers-reduced-motion: reduce)` |

### 断点（Breakpoints）

```css
/* 超小屏幕（手机） */
@media (max-width: 575.98px) {
  /* 样式 */
}

/* 小屏幕（大手机） */
@media (min-width: 576px) and (max-width: 767.98px) {
  /* 样式 */
}

/* 中等屏幕（平板） */
@media (min-width: 768px) and (max-width: 991.98px) {
  /* 样式 */
}

/* 大屏幕（桌面） */
@media (min-width: 992px) and (max-width: 1199.98px) {
  /* 样式 */
}

/* 超大屏幕（大桌面） */
@media (min-width: 1200px) {
  /* 样式 */
}
```

### 移动优先策略

```css
/* 基础样式（移动端） */
.container {
  padding: 10px;
  font-size: 14px;
}

/* 平板及以上 */
@media (min-width: 768px) {
  .container {
    padding: 20px;
    font-size: 16px;
  }
}

/* 桌面及以上 */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    font-size: 18px;
  }
}
```

## 流体网格

### 使用百分比

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col {
  flex: 1;
  padding: 0 15px;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
}

.col-4 {
  flex: 0 0 33.333%;
  max-width: 33.333%;
  padding: 0 15px;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
}
```

### 使用 CSS Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.grid-12 {
  grid-column: span 12;
}

.grid-6 {
  grid-column: span 6;
}

.grid-4 {
  grid-column: span 4;
}

.grid-3 {
  grid-column: span 3;
}

/* 响应式网格 */
@media (max-width: 768px) {
  .grid-4 {
    grid-column: span 6;
  }
  
  .grid-3 {
    grid-column: span 12;
  }
}
```

### 使用 Flexbox

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.flex-item {
  flex: 1 1 300px; /* 最小 300px，自动增长和缩小 */
}
```

## 弹性图片

### 基本弹性图片

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 响应式图片

```html
<!-- 使用 srcset -->
<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1000px) 800px,
         1200px"
  alt="描述"
>

<!-- 使用 picture 元素 -->
<picture>
  <source media="(max-width: 600px)" srcset="image-mobile.jpg">
  <source media="(max-width: 1000px)" srcset="image-tablet.jpg">
  <img src="image-desktop.jpg" alt="描述">
</picture>
```

### 背景图片响应式

```css
.background {
  background-image: url('image-small.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .background {
    background-image: url('image-medium.jpg');
  }
}

@media (min-width: 1024px) {
  .background {
    background-image: url('image-large.jpg');
  }
}
```

## 响应式排版

### 流体字体大小

```css
/* 使用 clamp() */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* 最小 1.5rem，首选 4vw，最大 3rem */
}

p {
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1.125rem);
}

/* 使用 calc() */
h2 {
  font-size: calc(1rem + 2vw);
}
```

### 响应式行高

```css
p {
  line-height: 1.5;
}

@media (min-width: 768px) {
  p {
    line-height: 1.75;
  }
}
```

### 响应式间距

```css
.section {
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .section {
    padding: 4rem 2rem;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 6rem 4rem;
  }
}
```

## 响应式组件

### 响应式导航

```css
/* 移动端导航 */
.nav {
  display: flex;
  flex-direction: column;
  background-color: #333;
}

.nav-item {
  width: 100%;
  padding: 15px;
  color: white;
  text-decoration: none;
}

/* 桌面端导航 */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .nav-item {
    width: auto;
    padding: 15px 20px;
  }
}
```

### 响应式卡片

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 576px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### 响应式表格

```css
/* 水平滚动 */
.table-wrapper {
  overflow-x: auto;
}

table {
  min-width: 600px;
}

/* 卡片式表格（移动端） */
@media (max-width: 600px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  tr {
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
  }
  
  td {
    border: none;
    position: relative;
    padding-left: 50%;
  }
  
  td::before {
    position: absolute;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: bold;
  }
}
```

## 用户偏好媒体查询

### 颜色方案偏好

```css
/* 默认浅色主题 */
body {
  background-color: white;
  color: #333;
}

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #f0f0f0;
  }
  
  .card {
    background-color: #2a2a2a;
  }
}
```

### 减少动画偏好

```css
/* 默认动画 */
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 减少动画 */
@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none;
    opacity: 1;
  }
  
  * {
    transition: none !important;
    animation: none !important;
  }
}
```

### 高对比度偏好

```css
/* 默认样式 */
.button {
  background-color: #007bff;
  color: white;
}

/* 高对比度模式 */
@media (prefers-contrast: high) {
  .button {
    background-color: #0056b3;
    color: white;
    border: 2px solid white;
  }
}
```

## 响应式工具类

### 显示/隐藏

```css
/* 移动端隐藏 */
.d-none-mobile {
  display: none;
}

@media (min-width: 768px) {
  .d-none-mobile {
    display: block;
  }
}

/* 桌面端隐藏 */
.d-none-desktop {
  display: block;
}

@media (max-width: 767px) {
  .d-none-desktop {
    display: none;
  }
}
```

### 间距工具

```css
/* 移动端间距 */
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }
.m-4 { margin: 1.5rem; }
.m-5 { margin: 3rem; }

/* 桌面端间距 */
@media (min-width: 768px) {
  .m-md-1 { margin: 0.25rem; }
  .m-md-2 { margin: 0.5rem; }
  .m-md-3 { margin: 1rem; }
  .m-md-4 { margin: 1.5rem; }
  .m-md-5 { margin: 3rem; }
}
```

## 最佳实践

1. **移动优先**：从小屏幕开始设计，逐步增强
2. **使用相对单位**：优先使用 rem、em、百分比、vw/vh
3. **合理的断点**：根据内容而非设备设置断点
4. **性能优化**：避免加载不必要的资源
5. **测试真实设备**：在多种设备上测试
6. **考虑可访问性**：支持用户偏好设置

## 相关链接

- [MDN: 媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries)
- [MDN: 响应式设计](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [W3C: CSS Media Queries](https://www.w3.org/TR/css-mediaqueries/)
- [Eric Meyer's Responsive Breakpoints](https://www.smashingmagazine.com/2016/03/matter-kind-responsive-web-design-breakpoints/)