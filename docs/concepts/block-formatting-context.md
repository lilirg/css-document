# 块级格式化上下文（BFC）

块级格式化上下文（Block Formatting Context, BFC）影响块级元素的布局。

## 什么是 BFC？

块级格式化上下文（Block Formatting Context, BFC）是 CSS 中用于布局块级元素的独立渲染区域。BFC 内部的元素布局不会影响外部元素。

## 创建 BFC 的条件

以下情况会创建 BFC：

### 浮动元素

```css
.element {
  float: left;  /* 或 right */
}
```

### 绝对定位元素

```css
.element {
  position: absolute;  /* 或 fixed */
}
```

### 特定的 display 值

```css
.element {
  display: inline-block;
  display: table-cell;
  display: table-caption;
  display: flex;
  display: inline-flex;
  display: grid;
  display: inline-grid;
}
```

### 特定的 overflow 值

```css
.element {
  overflow: hidden;  /* 或 auto、scroll */
}
```

## BFC 特性

### 1. 内部元素垂直排列

BFC 内部的块级元素在垂直方向上依次排列。

```css
.bfc {
  overflow: hidden;
}

.bfc div {
  background: #eee;
  padding: 10px;
  margin-bottom: 10px;
}
```

### 2. 包含浮动元素

BFC 的高度会包含浮动元素。

```css
.bfc {
  overflow: hidden;
}

.bfc .float {
  float: left;
  width: 100px;
  height: 100px;
  background: #ccc;
}
```

### 3. 不与浮动元素重叠

BFC 不会与浮动元素重叠。

```css
.float {
  float: left;
  width: 100px;
  height: 100px;
  background: #ccc;
}

.bfc {
  overflow: hidden;
  background: #eee;
}
```

## BFC 应用场景

### 清除浮动

```css
.container {
  overflow: hidden;  /* 创建 BFC */
}
```

### 防止外边距折叠

```css
.element {
  overflow: hidden;  /* 创建 BFC */
}
```

### 防止与浮动元素重叠

```css
.element {
  overflow: hidden;  /* 创建 BFC */
}
```

## 相关资源

- [MDN Web Docs: BFC](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Block_formatting_context)
- [CSS-Tricks: BFC](https://css-tricks.com/almanac/properties/b/block-formatting-context/)