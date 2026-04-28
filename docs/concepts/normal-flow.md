# 正常文档流（Normal Flow）

正常文档流是元素在页面中的默认排列方式。

## 什么是正常文档流？

正常文档流（Normal Flow）是 HTML 元素在页面中的默认排列方式。在正常文档流中，元素按照它们在 HTML 中的顺序从上到下、从左到右排列。

## 块级元素

块级元素在正常文档流中：

- 独占一行
- 从上到下排列
- 宽度默认为父元素的 100%

```html
<div>块级元素 1</div>
<div>块级元素 2</div>
<p>段落元素</p>
```

```css
div {
  background: #eee;
  padding: 10px;
}
```

## 行内元素

行内元素在正常文档流中：

- 不独占一行
- 与其他行内元素在同一行
- 宽度由内容决定

```html
<span>行内元素 1</span>
<span>行内元素 2</span>
<a>链接</a>
```

```css
span {
  background: #ddd;
  padding: 5px;
}
```

## 行内块元素

行内块元素结合了块级元素和行内元素的特性：

- 不独占一行
- 可以设置宽度和高度

```html
<div style="display: inline-block; width: 100px;">行内块 1</div>
<div style="display: inline-block; width: 100px;">行内块 2</div>
```

## display 属性

`display` 属性控制元素的显示方式：

```css
display: block;      /* 块级元素 */
display: inline;     /* 行内元素 */
display: inline-block;  /* 行内块元素 */
display: none;       /* 隐藏元素 */
```

## 相关资源

- [MDN Web Docs: 正常文档流](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout)
- [CSS-Tricks: Display](https://css-tricks.com/almanac/properties/d/display/)