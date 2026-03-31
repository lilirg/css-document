# CSS 布局排版

CSS 布局是网页设计的核心，掌握各种布局技术对于创建现代网页至关重要。

## 布局概述

### 布局类型

| 布局类型 | 说明 |
| :--- | :--- |
| 普通流（Normal Flow） | 默认的块级和行内元素排列方式 |
| 浮动（Float） | 传统的图文混排布局 |
| 定位（Position） | 精确控制元素位置 |
| Flexbox | 一维弹性布局 |
| Grid | 二维网格布局 |
| Multi-column | 多列布局 |

## 普通流（Normal Flow）

### 块级元素

块级元素在普通流中垂直排列，每个元素占据一整行。

```html
<div>块级元素 1</div>
<div>块级元素 2</div>
<div>块级元素 3</div>
```

```css
/* 块级元素默认行为 */
div {
  display: block;
  width: 100%;
}
```

### 行内元素

行内元素在普通流中水平排列，不占据一整行。

```html
<span>行内元素 1</span>
<span>行内元素 2</span>
<span>行内元素 3</span>
```

```css
/* 行内元素默认行为 */
span {
  display: inline;
}
```

### 块级替换

```css
/* 将行内元素转换为块级 */
span {
  display: block;
}

/* 将块级元素转换为行内块 */
div {
  display: inline-block;
}
```

## 浮动（Float）

### 基本用法

```css
.float-left {
  float: left;
}

.float-right {
  float: right;
}

.float-none {
  float: none;
}
```

### 清除浮动

```css
/* 方法 1：使用 clear */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

/* 方法 2：使用 overflow */
.container {
  overflow: auto;
}

/* 方法 3：使用 flex */
.container {
  display: flex;
}
```

### 浮动布局示例

```html
<div class="container">
  <div class="sidebar">侧边栏</div>
  <div class="content">主要内容</div>
</div>
```

```css
.container {
  overflow: auto;
}

.sidebar {
  float: left;
  width: 200px;
}

.content {
  margin-left: 220px;
}
```

## 定位（Position）

### 定位类型

| 值 | 说明 |
| :--- | :--- |
| `static` | 默认值，元素在普通流中 |
| `relative` | 相对定位，相对于自身原始位置 |
| `absolute` | 绝对定位，相对于最近的定位祖先 |
| `fixed` | 固定定位，相对于视口 |
| `sticky` | 粘性定位，根据滚动位置切换 |

### 相对定位

```css
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}
```

### 绝对定位

```css
.container {
  position: relative;
}

.absolute {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
}
```

### 固定定位

```css
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  z-index: 1000;
}
```

### 粘性定位

```css
.sticky-item {
  position: sticky;
  top: 0;
  background-color: white;
}
```

### 定位示例

```html
<div class="container">
  <div class="box relative">相对定位</div>
  <div class="box absolute">绝对定位</div>
  <div class="box fixed">固定定位</div>
  <div class="box sticky">粘性定位</div>
</div>
```

## Flexbox 布局

### Flex 容器

```css
.flex-container {
  display: flex;
  flex-direction: row;        /* 主轴方向 */
  flex-wrap: nowrap;          /* 换行方式 */
  justify-content: flex-start; /* 主轴对齐 */
  align-items: flex-start;    /* 交叉轴对齐 */
  align-content: flex-start;  /* 多行对齐 */
  gap: 10px;                  /* 间距 */
}
```

### Flex 项目

```css
.flex-item {
  flex: 0 1 auto;             /* flex-grow, flex-shrink, flex-basis */
  order: 0;                   /* 排列顺序 */
  align-self: auto;           /* 单独对齐 */
}
```

### Flex 方向

```css
/* 主轴方向 */
.row {
  flex-direction: row;        /* 从左到右 */
}

.row-reverse {
  flex-direction: row-reverse; /* 从右到左 */
}

.column {
  flex-direction: column;     /* 从上到下 */
}

.column-reverse {
  flex-direction: column-reverse; /* 从下到上 */
}
```

### 主轴对齐

```css
/* 起始对齐 */
.start {
  justify-content: flex-start;
}

/* 结束对齐 */
.end {
  justify-content: flex-end;
}

/* 居中 */
.center {
  justify-content: center;
}

/* 两端对齐 */
.spaceBetween {
  justify-content: space-between;
}

/* 均匀分布 */
.spaceAround {
  justify-content: space-around;
}

/* 均匀分布（两侧一半） */
.spaceEvenly {
  justify-content: space-evenly;
}
```

### 交叉轴对齐

```css
/* 起始对齐 */
.start {
  align-items: flex-start;
}

/* 结束对齐 */
.end {
  align-items: flex-end;
}

/* 居中 */
.center {
  align-items: center;
}

/* 拉伸 */
.stretch {
  align-items: stretch;
}

/* 基线对齐 */
.baseline {
  align-items: baseline;
}
```

### Flex 项目属性

```css
.item {
  /* flex-grow: 放大比例 */
  flex-grow: 1;
  
  /* flex-shrink: 缩小比例 */
  flex-shrink: 1;
  
  /* flex-basis: 基础尺寸 */
  flex-basis: 200px;
  
  /* 简写 */
  flex: 1 1 200px;
  
  /* 自动宽度 */
  flex: 1;
  
  /* 不放大不缩小 */
  flex: none;
}
```

### Flexbox 示例

```html
<div class="flex-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.item {
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
  text-align: center;
}
```

## Grid 布局

### Grid 容器

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "header header header"
    "sidebar content content";
  gap: 10px;
}
```

### Grid 轨道

```css
/* 固定尺寸 */
.fixed {
  grid-template-columns: 100px 200px 100px;
}

/* 自动尺寸 */
.auto {
  grid-template-columns: auto auto auto;
}

/* 分数单位 */
.fr {
  grid-template-columns: 1fr 2fr 1fr;
}

/* 最小最大 */
.minmax {
  grid-template-columns: minmax(100px, 1fr) 2fr;
}

/* 重复 */
.repeat {
  grid-template-columns: repeat(3, 1fr);
}

/* 自动填充 */
.autofill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* 自动适应 */
.autofit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### Grid 项目定位

```css
.item {
  /* 列定位 */
  grid-column: 1 / 3;
  grid-column-start: 1;
  grid-column-end: 3;
  
  /* 行定位 */
  grid-row: 1 / 3;
  grid-row-start: 1;
  grid-row-end: 3;
  
  /* 区域定位 */
  grid-area: header;
}
```

### Grid 对齐

```css
/* 容器对齐 */
.container {
  justify-content: start;     /* 主轴 */
  align-content: start;       /* 交叉轴 */
  justify-items: start;       /* 项目主轴 */
  align-items: start;         /* 项目交叉轴 */
}

/* 项目对齐 */
.item {
  justify-self: start;
  align-self: start;
}
```

### Grid 示例

```html
<div class="grid-container">
  <div class="item header">头部</div>
  <div class="item sidebar">侧边栏</div>
  <div class="item content">内容</div>
  <div class="item footer">底部</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  gap: 20px;
  min-height: 100vh;
}

.header {
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 20px;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f0f0f0;
  padding: 20px;
}

.content {
  grid-area: content;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 20px;
}
```

## 多列布局

### 基本用法

```css
.multicolumn {
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid #ccc;
}
```

### 列宽

```css
/* 固定列宽 */
.fixed-width {
  column-width: 150px;
}

/* 最大列宽 */
.max-width {
  column-width: 150px;
  column-count: 3;
}
```

### 列属性

```css
.item {
  /* 跨列 */
  column-span: all;
  
  /* 断点控制 */
  break-inside: avoid;
}
```

### 多列示例

```html
<div class="multicolumn">
  <p>这是第一段内容...</p>
  <p>这是第二段内容...</p>
  <p>这是第三段内容...</p>
</div>
```

```css
.multicolumn {
  column-count: 3;
  column-gap: 30px;
  column-rule: 1px solid #ddd;
}

.multicolumn p {
  margin-bottom: 1em;
}
```

## 响应式布局

### 媒体查询

```css
/* 移动端优先 */
.container {
  display: flex;
  flex-direction: column;
}

/* 平板 */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}

/* 桌面 */
@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    gap: 40px;
  }
}
```

### 断点

| 断点 | 说明 |
| :--- | :--- |
| `<576px` | 超小屏幕（手机） |
| `≥576px` | 小屏幕（大手机） |
| `≥768px` | 中等屏幕（平板） |
| `≥992px` | 大屏幕（桌面） |
| `≥1200px` | 超大屏幕（大桌面） |

## 布局最佳实践

1. **使用现代布局**：优先使用 Flexbox 和 Grid
2. **移动优先**：从小屏幕开始设计
3. **语义化 HTML**：使用合适的 HTML 元素
4. **避免过度嵌套**：保持结构简单
5. **使用 CSS 变量**：便于统一管理
6. **考虑可访问性**：确保键盘导航正常

## 相关链接

- [MDN: Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [MDN: Grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [MDN: 布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout)
- [CSS-Tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)