# 网格格式化上下文（GFC）

网格格式化上下文（Grid Formatting Context, GFC）用于 Grid 布局。

## 什么是 GFC？

网格格式化上下文（Grid Formatting Context, GFC）是 CSS 中用于 Grid 布局的格式化上下文。GFC 允许元素放置在二维网格中。

## 创建 GFC 的条件

```css
.element {
  display: grid;      /* 创建 GFC */
  display: inline-grid;  /* 创建内联 GFC */
}
```

## GFC 特性

### 1. 网格行和列

GFC 定义了网格行和列：

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
}
```

### 2. 网格项放置

GFC 中的网格项可以放置在指定位置：

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
}

.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

### 3. 对齐方式

GFC 可以控制网格项的对齐方式：

```css
.grid-container {
  display: grid;
  justify-content: center;  /* 水平居中 */
  align-content: center;    /* 垂直居中 */
}
```

### 4. 自动布局

GFC 可以自动布局网格项：

```css
.grid-container {
  display: grid;
  grid-auto-columns: 100px;
  grid-auto-rows: 100px;
}
```

## GFC 属性

### 容器属性

- `display` - 定义 GFC
- `grid-template-columns` - 定义列
- `grid-template-rows` - 定义行
- `grid-template-areas` - 定义区域
- `grid-template` - 简写
- `grid-column-gap` - 列间距
- `grid-row-gap` - 行间距
- `grid-gap` - 间距简写
- `justify-content` - 水平对齐
- `align-content` - 垂直对齐
- `place-content` - 对齐简写

### 项目属性

- `grid-column` - 列位置
- `grid-row` - 行位置
- `grid-area` - 区域
- `justify-self` - 水平对齐
- `align-self` - 垂直对齐
- `place-self` - 对齐简写

## GFC 示例

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}

.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background: #eee;
}
```

## 相关资源

- [MDN Web Docs: Grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [CSS-Tricks: Grid](https://css-tricks.com/almanac/properties/g/grid/)