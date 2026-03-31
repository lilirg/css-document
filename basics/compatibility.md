# CSS 兼容性

CSS 兼容性是指 CSS 特性在不同浏览器、不同版本中的支持情况。了解和处理 CSS 兼容性是前端开发的重要任务。

## 浏览器兼容性概述

### 主流浏览器

| 浏览器 | 内核 | 说明 |
| :--- | :--- | :--- |
| Chrome | Blink | Google 开发，更新频繁 |
| Firefox | Gecko | Mozilla 开发，开源 |
| Safari | WebKit | Apple 开发，macOS/iOS 默认 |
| Edge | Blink | Microsoft 开发，基于 Chromium |
| Opera | Blink | 基于 Chromium |
| IE | Trident | 已停止支持 |

### 兼容性检查工具

| 工具 | 说明 |
| :--- | :--- |
| [Can I Use](https://caniuse.com/) | 查询 CSS/JS 特性支持情况 |
| [MDN](https://developer.mozilla.org/) | 提供浏览器兼容性表格 |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 自动添加浏览器前缀 |
| [Browserslist](https://github.com/browserslist/browserslist) | 配置目标浏览器范围 |

## 浏览器前缀

### 常见前缀

| 前缀 | 浏览器 |
| :--- | :--- |
| `-webkit-` | Chrome, Safari, 新版 Opera, 移动端浏览器 |
| `-moz-` | Firefox |
| `-ms-` | IE, Edge |
| `-o-` | 旧版 Opera |

### 前缀示例

```css
/* 弹性盒布局 */
.box {
  -webkit-display: flex;
  -ms-display: flex;
  display: flex;
}

/* 渐变 */
.box {
  background: -webkit-linear-gradient(top, #fff, #000);
  background: -moz-linear-gradient(top, #fff, #000);
  background: -ms-linear-gradient(top, #fff, #000);
  background: linear-gradient(to bottom, #fff, #000);
}

/* 变换 */
.box {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* 过渡 */
.box {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

/* 用户选择 */
.box {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 盒阴影 */
.box {
  -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* 圆角 */
.box {
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
```

## 特性检测

### 使用 Modernizr

Modernizr 是一个 JavaScript 库，用于检测浏览器支持的 CSS/JS 特性。

```html
<!-- 引入 Modernizr -->
<script src="modernizr.js"></script>

<!-- 使用检测结果 -->
<script>
  if (Modernizr.flexbox) {
    // 支持 Flexbox
  } else {
    // 使用备用方案
  }
</script>
```

### 使用 CSS 特性检测

```css
/* 使用 @supports */
@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (display: grid) {
  .container {
    display: flex;
  }
}

/* 多条件检测 */
@supports (display: grid) and (gap: 10px) {
  .container {
    display: grid;
    gap: 10px;
  }
}

/* 前缀检测 */
@supports (-webkit-appearance: none) {
  .button {
    -webkit-appearance: none;
    appearance: none;
  }
}
```

## 渐进增强

### 概念

渐进增强（Progressive Enhancement）是一种从基础功能开始，逐步添加高级特性的策略。

### 示例

```css
/* 基础样式（所有浏览器） */
.card {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
}

/* 增强样式（支持圆角的浏览器） */
@supports (border-radius: 4px) {
  .card {
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}

/* 高级样式（支持 CSS Grid 的浏览器） */
@supports (display: grid) {
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
```

## 优雅降级

### 概念

优雅降级（Graceful Degradation）是先实现完整功能，然后为不支持的浏览器提供备用方案。

### 示例

```css
/* 使用 CSS 变量 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
  color: white;
}

/* 备用方案（不支持 CSS 变量的浏览器） */
@supports not (background-color: var(--test)) {
  .button {
    background-color: #007bff;
    color: white;
  }
}
```

## 常用兼容性处理

### Flexbox 兼容性

```css
/* 完整的前缀支持 */
.flex-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
```

### Grid 兼容性

```css
/* Grid 布局（现代浏览器） */
@supports (display: grid) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

/* 备用方案（不支持 Grid 的浏览器） */
@supports not (display: grid) {
  .grid {
    display: flex;
    flex-wrap: wrap;
  }
  
  .grid-item {
    flex: 1 1 33.333%;
    max-width: 33.333%;
  }
}
```

### 动画兼容性

```css
/* 关键帧前缀 */
@-webkit-keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 动画属性前缀 */
.animated {
  -webkit-animation: fadeIn 0.5s ease-in;
  animation: fadeIn 0.5s ease-in;
}
```

### 变换兼容性

```css
.transform {
  -webkit-transform: translateX(100px) rotate(45deg);
  -moz-transform: translateX(100px) rotate(45deg);
  -ms-transform: translateX(100px) rotate(45deg);
  -o-transform: translateX(100px) rotate(45deg);
  transform: translateX(100px) rotate(45deg);
  
  /* 变换原点 */
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  
  /* 变换风格 */
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
```

### 过渡兼容性

```css
.transition {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  
  /* 过渡属性 */
  -webkit-transition-property: color, background-color;
  -moz-transition-property: color, background-color;
  transition-property: color, background-color;
  
  /* 过渡时间 */
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  transition-duration: 0.3s;
  
  /* 过渡延迟 */
  -webkit-transition-delay: 0.1s;
  -moz-transition-delay: 0.1s;
  transition-delay: 0.1s;
  
  /* 过渡函数 */
  -webkit-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}
```

## 自动添加前缀

### Autoprefixer

Autoprefixer 是一个 PostCSS 插件，根据 Can I Use 的数据自动添加浏览器前缀。

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

```javascript
// package.json
{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```

### 使用示例

```css
/* 输入（无前缀） */
.box {
  display: flex;
  border-radius: 4px;
  transition: all 0.3s;
}

/* 输出（Autoprefixer 处理后） */
.box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
```

## 常见兼容性问题

### 1. 盒模型

```css
/* 统一盒模型 */
*, *::before, *::after {
  box-sizing: border-box;
}
```

### 2. 行高

```css
/* 统一行高 */
body {
  line-height: 1.5;
}
```

### 3. 默认样式

```css
/* 重置默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
  list-style: none;
}
```

### 4. 按钮样式

```css
/* 统一按钮样式 */
button, input[type="button"], input[type="submit"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
}
```

### 5. 输入框样式

```css
/* 统一输入框样式 */
input, textarea, select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
}

/* iOS 输入框缩放问题 */
input[type="search"] {
  -webkit-appearance: none;
}
```

### 6. 1px 边框问题

```css
/* 使用 transform 解决 1px 问题 */
.border-1px {
  position: relative;
}

.border-1px::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #ccc;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  box-sizing: border-box;
}
```

### 7. 安全区域（刘海屏）

```css
/* 适配安全区域 */
.content {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
         env(safe-area-inset-bottom) env(safe-area-inset-left);
}

/* 带备用值 */
.content {
  padding: 20px;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
         env(safe-area-inset-bottom) env(safe-area-inset-left);
}
```

## 浏览器兼容性查询

### Can I Use

访问 [Can I Use](https://caniuse.com/) 查询特性支持情况。

### MDN 兼容性表格

MDN 文档中每个属性都有兼容性表格。

```
Chrome | Firefox | Safari | Edge | IE
-------|---------|--------|------|----
  69   |   63    |   12   |  79  |  No
```

## 最佳实践

1. **使用 Autoprefixer**：自动添加前缀
2. **配置 Browserslist**：定义目标浏览器范围
3. **渐进增强**：从基础功能开始
4. **特性检测**：使用 @supports
5. **测试真实设备**：在多种设备上测试
6. **使用兼容性工具**：如 Modernizr
7. **关注废弃特性**：避免使用已废弃的特性

## 相关链接

- [Can I Use](https://caniuse.com/)
- [MDN 浏览器兼容性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Compatibility)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Browserslist](https://github.com/browserslist/browserslist)
- [Modernizr](https://modernizr.com/)