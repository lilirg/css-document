# 网格格式化上下文（GFC）

网格格式化上下文（Grid Formatting Context, GFC）是 Grid 布局的格式化上下文。

## GFC 概念

GFC 是由 `display: grid` 或 `display: inline-grid` 创建的二维布局环境。

### GFC 特性

1. **行和列定义** - 精确控制布局
2. **区域定义** - 支持区域布局
3. **对齐控制** - 支持对齐和分布
4. **响应式** - 支持响应式布局

## 创建 GFC 的条件

```css
.grid {
  display: grid;  /* 或 inline-grid */
}
```

## GFC 属性

### 容器属性

#### grid-template-columns

```css
.grid {
  grid-template-columns: 100px 100px 100px;  /* 固定宽度 */
  grid-template-columns: 1fr 1fr 1fr;        /* 弹性宽度 */
  grid-template-columns: repeat(3, 1fr);     /* 重复 */
  grid-template-columns: auto auto auto;     /* 自动 */
}
```

#### grid-template-rows

```css
.grid {
  grid-template-rows: 100px 100px 100px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
}
```

#### grid-template-areas

```css
.grid {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```

#### grid-template

```css
.grid {
  grid-template:
    "header header header" 100px
    "sidebar main main" 1fr
    "footer footer footer" 100px
    / 200px 1fr 1fr;
}
```

#### grid-row-gap / grid-column-gap / grid-gap

```css
.grid {
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  /* 或 */
  grid-gap: 10px 20px;  /* row column */
}
```

#### justify-items / align-items / place-items

```css
.grid {
  justify-items: stretch;   /* 拉伸（默认） */
  justify-items: start;     /* 起始 */
  justify-items: end;       /* 结束 */
  justify-items: center;    /* 居中 */
  
  align-items: stretch;     /* 拉伸（默认） */
  align-items: start;       /* 起始 */
  align-items: end;         /* 结束 */
  align-items: center;      /* 居中 */
  
  place-items: center start;  /* align justify */
}
```

#### justify-content / align-content / place-content

```css
.grid {
  justify-content: start;     /* 起始 */
  justify-content: end;       /* 结束 */
  justify-content: center;    /* 居中 */
  justify-content: space-between;  /* 两端对齐 */
  justify-content: space-around;   /* 均匀分布 */
  justify-content: space-evenly;   /* 均匀分布（包括边缘） */
  
  align-content: start;       /* 起始 */
  align-content: end;         /* 结束 */
  align-content: center;      /* 居中 */
  align-content: space-between;  /* 两端对齐 */
  align-content: space-around;   /* 均匀分布 */
  align-content: space-evenly;   /* 均匀分布（包括边缘） */
  
  place-content: center start;  /* align justify */
}
```

#### grid-auto-columns / grid-auto-rows

```css
.grid {
  grid-auto-columns: 100px;
  grid-auto-columns: 1fr;
  grid-auto-columns: minmax(100px, 1fr);
}
```

#### grid-auto-flow

```css
.grid {
  grid-auto-flow: row;      /* 行优先（默认） */
  grid-auto-flow: column;   /* 列优先 */
  grid-auto-flow: dense;    /* 紧凑填充 */
}
```

#### grid

```css
.grid {
  grid:
    "header header header" 100px
    "sidebar main main" 1fr
    "footer footer footer" 100px
    / 200px 1fr 1fr;
}
```

### 项目属性

#### grid-column-start / grid-column-end / grid-column

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  /* 或 */
  grid-column: 1 / 3;
}
```

#### grid-row-start / grid-row-end / grid-row

```css
.item {
  grid-row-start: 1;
  grid-row-end: 3;
  /* 或 */
  grid-row: 1 / 3;
}
```

#### grid-area

```css
.item {
  grid-area: header;  /* 使用 grid-template-areas */
  /* 或 */
  grid-area: 1 / 1 / 3 / 3;  /* row-start / col-start / row-end / col-end */
}
```

#### justify-self / align-self / place-self

```css
.item {
  justify-self: stretch;   /* 拉伸（默认） */
  justify-self: start;     /* 起始 */
  justify-self: end;       /* 结束 */
  justify-self: center;    /* 居中 */
  
  align-self: stretch;     /* 拉伸（默认） */
  align-self: start;       /* 起始 */
  align-self: end;         /* 结束 */
  align-self: center;      /* 居中 */
  
  place-self: center start;  /* align justify */
}
```

## GFC 示例

```html
<div class="container">
  <div class="item header">Header</div>
  <div class="item sidebar">Sidebar</div>
  <div class="item main">Main</div>
  <div class="item footer">Footer</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-gap: 10px;
  background: #f0f0f0;
}

.header {
  grid-area: header;
  background: #ddd;
}

.sidebar {
  grid-area: sidebar;
  background: #eee;
}

.main {
  grid-area: main;
  background: #ccc;
}

.footer {
  grid-area: footer;
  background: #bbb;
}
```

## GFC 应用场景

### 1. 页面布局

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```

### 2. 仪表盘

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}
```

### 3. 图片画廊

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
}
```

## 最佳实践

1. **理解 GFC** - 正确使用 Grid
2. **使用 grid-template-areas** - 直观的布局
3. **避免过度嵌套** - 保持结构简单
4. **考虑响应式** - 使用 minmax 和 auto-fit

## 相关链接

- [MDN: Grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [W3C: CSS Grid](https://www.w3.org/TR/css-grid-2/)