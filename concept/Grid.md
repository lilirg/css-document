# 网格布局 (Grid)

CSS Grid（网格布局）是一种二维布局模型，允许您创建复杂的布局结构，通过行和列的组合来定位元素。

## 语法

```css
/* 定义网格容器 */
.container {
  display: grid | inline-grid | subgrid;
}

/* 定义网格列 */
grid-template-columns: <track-size> ...;

/* 定义网格行 */
grid-template-rows: <track-size> ...;

/* 简写 */
grid-template: <rows> / <columns>;

/* 定义网格区域 */
grid-template-areas: <grid-area-name> ...;

/* 列间距 */
column-gap: <length>;

/* 行间距 */
row-gap: <length>;

/* 间距简写 */
gap: <row-gap> <column-gap>;

/* 项目定位 */
grid-column-start: <number> | <name>;
grid-column-end: <number> | <name>;
grid-row-start: <number> | <name>;
grid-row-end: <number> | <name>;

/* 简写 */
grid-column: <start> / <end>;
grid-row: <start> / <end>;
grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;

/* 自动放置 */
grid-auto-columns: <track-size> ...;
grid-auto-rows: <track-size> ...;
grid-auto-flow: row | column | dense;

/* 对齐 */
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;
place-items: <align-items> / <justify-items>;

/* 多行对齐 */
justify-content: start | end | center | stretch | space-between | space-around | space-evenly;
align-content: start | end | center | stretch | space-between | space-around | space-evenly;
place-content: <align-content> / <justify-content>;

/* 项目对齐 */
justify-self: start | end | center | stretch;
align-self: start | end | center | stretch;
place-self: <align-self> / <justify-self>;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `grid-template-rows: none; grid-template-columns: none;` |
| 适用HTML元素 | 所有元素（作为容器时） |
| 动画 | 支持部分属性 |

## Grid 容器属性

| 属性 | 描述 |
| :--- | :--- |
| `display` | 定义网格容器（`grid`、`inline-grid` 或 `subgrid`） |
| `grid-template-columns` | 定义网格列的大小 |
| `grid-template-rows` | 定义网格行的大小 |
| `grid-template-areas` | 定义网格区域 |
| `grid-template` | `grid-template-rows` 和 `grid-template-columns` 的简写 |
| `column-gap` | 定义列间距 |
| `row-gap` | 定义行间距 |
| `gap` | `row-gap` 和 `column-gap` 的简写 |
| `grid-auto-columns` | 定义隐式列的大小 |
| `grid-auto-rows` | 定义隐式行的大小 |
| `grid-auto-flow` | 定义自动放置方向 |
| `justify-items` | 定义项目在单元格中的水平对齐 |
| `align-items` | 定义项目在单元格中的垂直对齐 |
| `place-items` | `align-items` 和 `justify-items` 的简写 |
| `justify-content` | 定义网格在容器中的水平对齐 |
| `align-content` | 定义网格在容器中的垂直对齐 |
| `place-content` | `align-content` 和 `justify-content` 的简写 |

## Grid 项目属性

| 属性 | 描述 |
| :--- | :--- |
| `grid-column-start` | 定义项目开始的列线 |
| `grid-column-end` | 定义项目结束的列线 |
| `grid-row-start` | 定义项目开始的行线 |
| `grid-row-end` | 定义项目结束的行线 |
| `grid-column` | `grid-column-start` 和 `grid-column-end` 的简写 |
| `grid-row` | `grid-row-start` 和 `grid-row-end` 的简写 |
| `grid-area` | 定义项目在网格区域中的位置 |
| `justify-self` | 定义单个项目在单元格中的水平对齐 |
| `align-self` | 定义单个项目在单元格中的垂直对齐 |
| `place-self` | `align-self` 和 `justify-self` 的简写 |

## 示例

### 基本网格布局

```html
<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

.item {
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 定义网格列

```css
/* 固定宽度 */
.container {
  grid-template-columns: 100px 200px 100px;
}

/* 使用 fr 单位 */
.container {
  grid-template-columns: 1fr 2fr 1fr;
}

/* 混合单位 */
.container {
  grid-template-columns: 200px 1fr 1fr;
}

/* 自动适应 */
.container {
  grid-template-columns: repeat(auto-fit, 100px);
}

/* 最小大小 */
.container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### 定义网格行

```css
/* 固定高度 */
.container {
  grid-template-rows: 100px 200px 100px;
}

/* 自动高度 */
.container {
  grid-template-rows: auto auto auto;
}

/* fr 单位 */
.container {
  grid-template-rows: 1fr 2fr 1fr;
}
```

### 网格区域

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 100px 1fr 100px;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}
```

### 项目定位

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.item-2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}

/* 简写 */
.item {
  grid: 1 / 1 / 2 / 3;
}
```

### 自动放置

```css
.container {
  display: grid;
  grid-auto-columns: 100px;
  grid-auto-rows: 100px;
  grid-auto-flow: row;
}

/* 或者 */
.container {
  grid-auto-flow: column;
}

/* 密集排列 */
.container {
  grid-auto-flow: dense;
}
```

### 对齐

```css
/* 容器对齐 */
.container {
  justify-content: center;
  align-content: center;
}

/* 项目对齐 */
.item {
  justify-self: center;
  align-self: center;
}

/* 简写 */
.container {
  place-content: center center;
}

.item {
  place-self: center center;
}
```

### 实用示例

#### 12 列网格系统

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-12 { grid-column: span 12; }
```

#### 响应式布局

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

#### 侧边栏布局

```css
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 57+ |
| Firefox | 52+ |
| Safari | 10.1+ |
| Edge | 16+ |
| IE | 不支持 |

## 相关链接

- [MDN Web Docs: CSS Grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/)
