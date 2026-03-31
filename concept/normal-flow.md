# 正常文档流（Normal Flow）

正常文档流是 CSS 布局的基础，描述了元素在页面中的默认排列方式。

## 文档流概念

正常文档流（Normal Flow）是指元素按照其在 HTML 中的顺序，从上到下、从左到右自然排列的方式。

### 块级元素流

块级元素在文档流中垂直排列：

```html
<div>元素1</div>
<div>元素2</div>
<div>元素3</div>
```

```css
div {
  width: 200px;
  height: 50px;
  background: #f0f0f0;
  margin: 10px;
}
```

### 行内元素流

行内元素在文档流中水平排列：

```html
<span>元素1</span>
<span>元素2</span>
<span>元素3</span>
```

```css
span {
  padding: 5px 10px;
  background: #f0f0f0;
  margin: 0 5px;
}
```

## 块级格式化上下文（BFC）

BFC 是正常文档流中的一个重要概念，它创建了一个独立的布局环境。

### BFC 特性

1. **内部垂直排列** - 块级元素在 BFC 内垂直排列
2. **外边距折叠** - BFC 内的外边距不会折叠
3. **包含浮动** - BFC 会包含内部的浮动元素
4. **隔离布局** - BFC 与外部布局相互隔离

### 创建 BFC 的条件

```css
/* float 不为 none */
.float {
  float: left;
}

/* position 不为 static/relative */
.absolute {
  position: absolute;
}

/* display 为特定值 */
.flow-root {
  display: flow-root;
}

/* overflow 不为 visible */
.overflow {
  overflow: hidden;
}
```

## 行内格式化上下文（IFC）

IFC 是行内元素的布局上下文。

### IFC 特性

1. **水平排列** - 行内元素水平排列
2. **行高控制** - 行高控制行框高度
3. **垂直对齐** - 支持 vertical-align

```css
.inline {
  display: inline-block;
  vertical-align: middle;
}
```

## 文档流中的元素类型

### 块级元素

块级元素独占一行：

```css
.block {
  display: block;
  width: 100%;
}
```

### 行内元素

行内元素与其他元素在同一行：

```css
.inline {
  display: inline;
  width: auto;  /* 无效 */
}
```

### 行内块元素

行内块元素结合了块级和行内元素的特性：

```css
.inline-block {
  display: inline-block;
  width: 200px;  /* 有效 */
}
```

## 文档流示例

```html
<div class="container">
  <div class="block">块级元素1</div>
  <div class="block">块级元素2</div>
  <span class="inline">行内元素1</span>
  <span class="inline">行内元素2</span>
  <span class="inline-block">行内块元素</span>
</div>
```

```css
.container {
  width: 600px;
  background: #f0f0f0;
}

.block {
  height: 50px;
  margin: 10px 0;
  background: #ddd;
}

.inline {
  padding: 5px 10px;
  background: #eee;
}

.inline-block {
  width: 100px;
  height: 50px;
  margin: 0 5px;
  background: #ccc;
}
```

## 最佳实践

1. **理解文档流** - 掌握元素的默认排列方式
2. **使用 BFC** - 解决浮动和外边距折叠问题
3. **合理选择 display** - 根据需求选择合适的显示类型
4. **避免过度使用 float** - 使用 flex/grid 替代

## 相关链接

- [MDN: 正常文档流](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout)
- [W3C: CSS Box Model](https://www.w3.org/TR/css-box-3/)