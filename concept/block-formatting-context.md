# 块级格式化上下文（BFC）

块级格式化上下文（Block Formatting Context, BFC）是 CSS 布局中的一个重要概念。

## BFC 概念

BFC 是块级元素的独立布局环境，它创建了一个隔离的布局区域。

### BFC 特性

1. **内部垂直排列** - 块级元素在 BFC 内垂直排列
2. **外边距不会折叠** - BFC 内的外边距不会折叠
3. **包含浮动** - BFC 会包含内部的浮动元素
4. **隔离布局** - BFC 与外部布局相互隔离

## 创建 BFC 的条件

以下情况会创建 BFC：

### 1. float 不为 none

```css
.float {
  float: left;  /* 或 right */
}
```

### 2. position 不为 static/relative

```css
.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}
```

### 3. display 为特定值

```css
.flow-root {
  display: flow-root;
}

.inline-block {
  display: inline-block;
}

.table {
  display: table;
}
```

### 4. overflow 不为 visible

```css
.hidden {
  overflow: hidden;
}

.scroll {
  overflow: scroll;
}

.auto {
  overflow: auto;
}
```

### 5. other

```css
.isolation {
  isolation: isolate;
}

.will-change {
  will-change: float;  /* 某些属性 */
}
```

## BFC 示例

### 外边距折叠问题

```html
<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
</div>
```

```css
.container {
  /* 未创建 BFC，外边距会折叠 */
}

.box1 {
  margin-bottom: 20px;
  background: red;
}

.box2 {
  margin-top: 30px;
  background: blue;
  /* 实际外边距是 30px（取较大值），而不是 50px */
}
```

### 使用 BFC 解决

```css
.container {
  overflow: hidden;  /* 创建 BFC */
}

.box1 {
  margin-bottom: 20px;
  background: red;
}

.box2 {
  margin-top: 30px;
  background: blue;
  /* 实际外边距是 50px（20px + 30px） */
}
```

### 包含浮动问题

```html
<div class="container">
  <div class="float">Float</div>
</div>
```

```css
.container {
  /* 未包含浮动，高度为 0 */
}

.float {
  float: left;
  width: 100px;
  height: 100px;
  background: red;
}
```

### 使用 BFC 解决

```css
.container {
  overflow: hidden;  /* 创建 BFC，包含浮动 */
}

.float {
  float: left;
  width: 100px;
  height: 100px;
  background: red;
}
```

## BFC 应用场景

### 1. 解决外边距折叠

```css
.wrapper {
  overflow: hidden;  /* 创建 BFC */
}
```

### 2. 包含浮动

```css
.clearfix {
  overflow: hidden;  /* 创建 BFC */
}
```

### 3. 防止文字环绕

```css
.text {
  overflow: hidden;  /* 创建 BFC */
}
```

## 最佳实践

1. **理解 BFC** - 正确解决布局问题
2. **使用 overflow** - 简单创建 BFC
3. **避免过度使用** - 保持结构简单
4. **考虑现代布局** - flex/grid 替代 BFC

## 相关链接

- [MDN: BFC](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Block_formatting_context)
- [W3C: CSS Box Model](https://www.w3.org/TR/css-box-3/)