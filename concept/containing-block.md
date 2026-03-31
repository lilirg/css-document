# 包含块（Containing Block）

包含块是 CSS 布局中的一个重要概念，它决定了元素的定位和尺寸计算的参考基准。

## 包含块概念

包含块（Containing Block）是元素用于计算位置和尺寸的矩形区域。

### 默认包含块

大多数元素的包含块是其父元素的内容区域：

```html
<div class="parent">
  <div class="child">子元素</div>
</div>
```

```css
.parent {
  width: 400px;
  height: 200px;
  background: #f0f0f0;
}

.child {
  width: 50%;  /* 相对于父元素宽度 */
  height: 50%; /* 相对于父元素高度 */
}
```

### 特殊包含块

#### 1. 根元素

根元素（html）的包含块是视口：

```css
html {
  /* 包含块是视口 */
}
```

#### 2. 定位元素

当元素设置 `position: absolute` 时，其包含块是最近的非 `static` 定位祖先元素：

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  left: 10px;
  /* 相对于父元素定位 */
}
```

#### 3. 固定定位

`position: fixed` 元素的包含块是视口：

```css
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  /* 始终相对于视口定位 */
}
```

#### 4. 粘性定位

`position: sticky` 元素的包含块是其正常文档流中的包含块：

```css
.sticky {
  position: sticky;
  top: 0;
}
```

## 包含块计算规则

### 1. 块级元素

块级元素的包含块是其内容区域：

```css
.block {
  width: 400px;
  padding: 20px;
  /* 子元素的 100% 宽度是 400px */
}
```

### 2. 行内元素

行内元素的包含块是其生成的行框：

```css
.inline {
  /* 包含块是行框 */
}
```

### 3. flex/grid 容器

flex/grid 容器的子元素的包含块是其内容区域：

```css
.flex {
  display: flex;
  width: 400px;
  /* 子元素的 100% 宽度是 400px */
}
```

## 包含块示例

```html
<div class="container">
  <div class="absolute">绝对定位</div>
  <div class="fixed">固定定位</div>
  <div class="sticky">粘性定位</div>
</div>
```

```css
.container {
  width: 600px;
  height: 400px;
  position: relative;
  background: #f0f0f0;
}

.absolute {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50%;  /* 300px */
  height: 100px;
  background: #ddd;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  background: #ccc;
}

.sticky {
  position: sticky;
  top: 0;
  background: #bbb;
}
```

## 包含块与百分比

### 宽度百分比

宽度百分比相对于包含块的宽度：

```css
.parent {
  width: 400px;
}

.child {
  width: 50%;  /* 200px */
}
```

### 高度百分比

高度百分比相对于包含块的高度（需要包含块有明确高度）：

```css
.parent {
  height: 200px;  /* 必须有明确高度 */
}

.child {
  height: 50%;  /* 100px */
}
```

## 最佳实践

1. **理解包含块** - 正确计算元素尺寸
2. **设置明确高度** - 避免高度百分比问题
3. **使用 flex/grid** - 现代布局方法
4. **注意定位** - 理解不同定位方式的包含块

## 相关链接

- [MDN: 包含块](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_Block)
- [W3C: CSS Positioning Module Level 3](https://www.w3.org/TR/css-position-3/)