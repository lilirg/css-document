# 堆叠上下文（Stacking Context）

堆叠上下文是 CSS 中控制元素在 z 轴方向上层叠顺序的重要概念。

## 堆叠上下文概念

堆叠上下文（Stacking Context）是 HTML 元素的三维坐标系，z 轴垂直于屏幕，控制元素的层叠顺序。

### 堆叠层级

元素在堆叠上下文中的层级从低到高：

```
1. 背景和边框（根元素）
2. 负 z-index 元素
3. 块级元素
4. 浮动元素
5. 行内元素
6. z-index: auto 元素
7. 正 z-index 元素
```

## 创建堆叠上下文的条件

以下情况会创建新的堆叠上下文：

### 1. 根元素

```css
html {
  /* 根元素创建堆叠上下文 */
}
```

### 2. z-index 非 auto 的定位元素

```css
.positioned {
  position: relative;  /* absolute/fixed 也可以 */
  z-index: 10;         /* 非 auto */
}
```

### 3. flex/grid 项目的 z-index 非 auto

```css
.flex-item {
  display: flex;
}

.child {
  z-index: 10;  /* 创建堆叠上下文 */
}
```

### 4. opacity 小于 1 的元素

```css
.transparent {
  opacity: 0.5;  /* 创建堆叠上下文 */
}
```

### 5. transform 非 none 的元素

```css
.transformed {
  transform: translate(10px, 10px);  /* 创建堆叠上下文 */
}
```

### 6. filter 非 none 的元素

```css
.filtered {
  filter: blur(5px);  /* 创建堆叠上下文 */
}
```

### 7. mix-blend-mode 非 normal 的元素

```css
.blended {
  mix-blend-mode: multiply;  /* 创建堆叠上下文 */
}
```

### 8. 其他条件

- `isolation: isolate`
- `will-change` 指定的属性
- `perspective` 非 none
- `clip-path` 非 none
- `mask` / `mask-image` / `mask-border`
- `filter` / `backdrop-filter`
- `position: sticky` 且 `top/bottom/left/right` 非 auto

## 堆叠顺序

堆叠顺序（从下到上）：

```
1. 背景和边框
2. 负 z-index 元素
3. 块级元素
4. 浮动元素
5. 行内元素
6. z-index: auto 元素
7. 正 z-index 元素
```

### z-index 优先级

```css
.element1 {
  position: relative;
  z-index: 1;  /* 最低 */
}

.element2 {
  position: relative;
  z-index: 10;  /* 中等 */
}

.element3 {
  position: relative;
  z-index: 100;  /* 最高 */
}
```

## 堆叠上下文示例

```html
<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
</div>
```

```css
.container {
  position: relative;
  width: 300px;
  height: 200px;
}

.box1 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 100px;
  background: red;
  z-index: 1;
}

.box2 {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background: green;
  z-index: 2;
}

.box3 {
  position: absolute;
  top: 80px;
  left: 80px;
  width: 100px;
  height: 100px;
  background: blue;
  z-index: 3;
}
```

## 堆叠上下文问题

### 问题示例

```css
.parent {
  position: relative;
  z-index: 1;
}

.child {
  position: absolute;
  z-index: 100;
  /* 由于父元素创建了堆叠上下文，子元素的 z-index: 100 只在父元素内部有效 */
}
```

### 解决方案

1. **调整父元素 z-index**
2. **重新设计布局结构**
3. **使用 flex/grid 布局**

## 最佳实践

1. **理解堆叠上下文** - 正确控制层叠顺序
2. **避免过度使用 z-index** - 保持简单
3. **使用语义化命名** - 如 `z-header`, `z-modal`
4. **考虑现代布局** - flex/grid 减少堆叠问题

## 相关链接

- [MDN: 堆叠上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [W3C: CSS Positioning Module Level 3](https://www.w3.org/TR/css-position-3/)