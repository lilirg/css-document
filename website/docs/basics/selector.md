---
sidebar_position: 3
---

# CSS 选择器

CSS 选择器用于匹配 HTML 元素，然后应用相应的样式。

## 基础选择器

### 元素选择器

匹配特定的 HTML 元素。

```css
p {
  color: blue;
}
```

### 类选择器

匹配具有特定 class 的元素。

```css
.highlight {
  background-color: yellow;
}
```

### ID 选择器

匹配具有特定 ID 的元素。

```css
#header {
  background-color: #333;
}
```

### 通配选择器

匹配所有元素。

```css
* {
  margin: 0;
  padding: 0;
}
```

## 组合选择器

### 后代选择器

匹配特定元素内的所有后代元素。

```css
div p {
  color: red;
}
```

### 子选择器

匹配特定元素的直接子元素。

```css
div > p {
  color: blue;
}
```

### 相邻兄弟选择器

匹配紧接在特定元素后的兄弟元素。

```css
h1 + p {
  margin-top: 0;
}
```

### 通用兄弟选择器

匹配特定元素后的所有兄弟元素。

```css
h1 ~ p {
  color: gray;
}
```

## 属性选择器

### 基本属性选择器

```css
/* 匹配具有指定属性的元素 */
[input] {
  border: 1px solid #ccc;
}

/* 匹配属性值等于指定值的元素 */
input[type="text"] {
  background: white;
}

/* 匹配属性值包含指定值的元素 */
a[href*="example"] {
  color: blue;
}

/* 匹配属性值以指定值开头的元素 */
a[href^="https"] {
  color: green;
}

/* 匹配属性值以指定值结尾的元素 */
a[href$=".pdf"] {
  color: red;
}
```

## 伪类选择器

### 状态伪类

```css
a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:hover {
  color: red;
}

a:active {
  color: orange;
}

input:focus {
  border-color: blue;
}
```

### 结构伪类

```css
:first-child {
  margin-top: 0;
}

:last-child {
  margin-bottom: 0;
}

:nth-child(n) {
  color: blue;
}

:nth-last-child(n) {
  color: red;
}

:nth-of-type(n) {
  font-weight: bold;
}
```

## 伪元素选择器

```css
::before {
  content: ">> ";
}

::after {
  content: " <<";
}

::first-letter {
  font-size: 2em;
}

::first-line {
  font-weight: bold;
}

::selection {
  background: yellow;
}
```

## 选择器优先级

选择器的优先级从高到低：

1. **内联样式** - 1000
2. **ID 选择器** - 100
3. **类选择器、属性选择器、伪类** - 10
4. **元素选择器、伪元素** - 1

## 相关资源

- [MDN Web Docs: CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
- [CSS-Tricks: CSS Selectors](https://css-tricks.com/almanac/selectors/)