# CSS 性能优化

CSS 性能优化是提升网页加载速度和渲染性能的重要环节。合理的 CSS 编写和优化可以显著提升用户体验。

## CSS 性能概述

### 关键渲染路径（CRP）

```
HTML → DOM + CSS → Render Tree → Layout → Paint → Composite
```

| 阶段 | 说明 |
| :--- | :--- |
| DOM | HTML 解析生成文档对象模型 |
| CSSOM | CSS 解析生成 CSS 对象模型 |
| Render Tree | DOM + CSSOM 生成渲染树 |
| Layout | 计算元素位置和大小 |
| Paint | 填充颜色、边框、阴影等 |
| Composite | 合成图层，准备显示 |

### 性能指标

| 指标 | 说明 |
| :--- | :--- |
| FCP (First Contentful Paint) | 首次内容绘制时间 |
| LCP (Largest Contentful Paint) | 最大内容绘制时间 |
| TTI (Time to Interactive) | 可交互时间 |
| TBT (Total Blocking Time) | 总阻塞时间 |

## CSS 加载优化

### 内联关键 CSS

```html
<!-- 内联关键 CSS -->
<style>
  .header {
    height: 60px;
    background-color: #333;
  }
  .nav {
    display: flex;
  }
</style>

<!-- 异步加载非关键 CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>
```

### 使用 preload

```html
<!-- 预加载关键资源 -->
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

### 使用 media 属性

```html
<!-- 根据媒体类型异步加载 -->
<link rel="stylesheet" href="print.css" media="print">
<link rel="stylesheet" href="mobile.css" media="screen and (max-width: 768px)">
```

### 使用 loadCSS

```javascript
// 异步加载 CSS
function loadCSS(href, media) {
  const ss = document.createElement('link');
  ss.rel = 'stylesheet';
  ss.href = href;
  if (media) {
    ss.media = media;
  }
  document.body.appendChild(ss);
  return ss;
}

// 使用
loadCSS('styles.css');
```

## CSS 选择器优化

### 避免复杂选择器

```css
/* 不推荐 - 复杂选择器 */
div.container ul.nav li.item a.link span.icon {
  color: red;
}

/* 推荐 - 简单选择器 */
.icon {
  color: red;
}
```

### 避免通配符选择器

```css
/* 不推荐 - 通配符选择器 */
* {
  margin: 0;
  padding: 0;
}

/* 推荐 - 具体选择器 */
body {
  margin: 0;
  padding: 0;
}
```

### 避免后代选择器

```css
/* 不推荐 - 深层嵌套 */
.container .wrapper .content .item .text {
  color: #333;
}

/* 推荐 - 扁平化 */
.item-text {
  color: #333;
}
```

### 使用类选择器

```css
/* 不推荐 - 标签选择器 */
div {
  display: flex;
}

/* 推荐 - 类选择器 */
.flex-container {
  display: flex;
}
```

## CSS 文件大小优化

### 压缩 CSS

```css
/* 原始 CSS */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 压缩后 */
.container{width:100%;max-width:1200px;margin:0 auto;padding:20px}
```

### 使用工具

| 工具 | 说明 |
| :--- | :--- |
| CSSNano | PostCSS 插件，压缩 CSS |
| Clean-CSS | CSS 压缩工具 |
| UglifyCSS | CSS 压缩工具 |

### 移除未使用 CSS

```javascript
// 使用 PurgeCSS
const purgecss = new PurgeCSS({
  content: ['*.html'],
  css: ['styles.css']
});

const result = purgecss.purge();
```

### 使用 CSS 变量

```css
/* 使用 CSS 变量减少重复 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-sm) var(--spacing-md);
}

.card {
  padding: var(--spacing-lg);
}
```

## 渲染性能优化

### 避免重排（Reflow）

```javascript
// 不推荐 - 多次读取布局
const width = element.offsetWidth;
const height = element.offsetHeight;
element.style.width = width + 10 + 'px';
element.style.height = height + 10 + 'px';

// 推荐 - 批量读取和写入
const width = element.offsetWidth;
const height = element.offsetHeight;
element.style.width = (width + 10) + 'px';
element.style.height = (height + 10) + 'px';
```

### 避免强制同步布局

```javascript
// 不推荐 - 强制同步布局
function setHeight() {
  const height = element.offsetHeight;
  element.style.width = height + 'px';
}

// 推荐 - 使用 requestAnimationFrame
function setHeight() {
  requestAnimationFrame(() => {
    const height = element.offsetHeight;
    element.style.width = height + 'px';
  });
}
```

### 使用 transform 和 opacity

```css
/* 不推荐 - 触发重排 */
.box {
  width: 100px;
  transition: width 0.3s;
}

.box:hover {
  width: 200px;
}

/* 推荐 - 触发合成 */
.box {
  transform: scale(1);
  transition: transform 0.3s;
}

.box:hover {
  transform: scale(2);
}
```

### 使用 will-change

```css
/* 提示浏览器优化 */
.animated {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* 动画完成后移除 */
.animated.end {
  will-change: auto;
}
```

## 图层优化

### 创建独立图层

```css
/* 使用 transform 创建图层 */
.layer {
  transform: translateZ(0);
}

/* 使用 will-change 创建图层 */
.layer {
  will-change: transform;
}

/* 使用 contain 创建图层 */
.layer {
  contain: layout style paint;
}
```

### 避免过多图层

```css
/* 不推荐 - 过多图层 */
.element1 { transform: translateZ(0); }
.element2 { transform: translateZ(0); }
.element3 { transform: translateZ(0); }

/* 推荐 - 合理图层 */
.container {
  transform: translateZ(0);
}
```

## 动画性能优化

### 使用 CSS 动画

```css
/* 推荐 - CSS 动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animated {
  animation: fadeIn 0.5s ease-in;
}

/* 不推荐 - JavaScript 动画 */
function animate() {
  element.style.opacity = 0;
  let opacity = 0;
  const timer = setInterval(() => {
    opacity += 0.1;
    element.style.opacity = opacity;
    if (opacity >= 1) clearInterval(timer);
  }, 16);
}
```

### 使用 GPU 加速

```css
/* 启用 GPU 加速 */
.gpu-accelerated {
  transform: translate3d(0, 0, 0);
  /* 或 */
  transform: translateZ(0);
  /* 或 */
  backface-visibility: hidden;
}
```

### 减少动画复杂度

```css
/* 不推荐 - 复杂动画 */
@keyframes complex {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    background-color: red;
    border-radius: 0;
  }
  100% {
    transform: translate(100px, 100px) rotate(360deg) scale(2);
    background-color: blue;
    border-radius: 50%;
  }
}

/* 推荐 - 简单动画 */
@keyframes simple {
  from {
    transform: translateX(0);
    opacity: 0;
  }
  to {
    transform: translateX(100px);
    opacity: 1;
  }
}
```

## 响应式性能优化

### 避免不必要的媒体查询

```css
/* 不推荐 - 重复定义 */
@media (min-width: 768px) {
  .box { padding: 20px; }
}

@media (min-width: 1024px) {
  .box { padding: 20px; }
}

/* 推荐 - 合并定义 */
.box {
  padding: 20px;
}

@media (min-width: 768px) {
  .box { padding: 40px; }
}
```

### 使用 CSS Grid 替代复杂布局

```css
/* 不推荐 - 复杂浮动布局 */
.container {
  overflow: auto;
}

.left {
  float: left;
  width: 30%;
}

.right {
  float: right;
  width: 70%;
}

/* 推荐 - CSS Grid */
.container {
  display: grid;
  grid-template-columns: 30% 70%;
}
```

## 工具和分析

### Chrome DevTools

1. **Performance 面板**：分析渲染性能
2. **Coverage 面板**：查看未使用的 CSS
3. **Lighthouse**：综合性能评分

### Lighthouse 指标

| 指标 | 目标 |
| :--- | :--- |
| FCP | < 1.8s |
| LCP | < 2.5s |
| TTI | < 3.8s |
| TBT | < 200ms |
| CLS | < 0.1 |

### CSS 分析工具

| 工具 | 说明 |
| :--- | :--- |
| CSS Stats | CSS 统计分析 |
| PHPSpider | CSS 复杂度分析 |
| Stylelint | CSS 代码检查 |

## 最佳实践

1. **内联关键 CSS**：减少加载时间
2. **压缩 CSS**：减小文件大小
3. **移除未使用 CSS**：减少冗余代码
4. **使用简单选择器**：提高匹配速度
5. **避免重排**：使用 transform 和 opacity
6. **启用 GPU 加速**：提升动画性能
7. **合理使用图层**：避免过多图层
8. **持续监控性能**：使用工具分析

## 相关链接

- [MDN: CSS 性能](https://developer.mozilla.org/zh-CN/docs/Web/Performance/Optimizing_DOM_layout)
- [Google: CSS 性能](https://developers.google.com/web/fundamentals/performance/rendering)
- [CSS-Tricks: CSS Performance](https://css-tricks.com/tag/performance/)
- [Web.dev: Render-blocking CSS](https://web.dev/render-blocking-css/)