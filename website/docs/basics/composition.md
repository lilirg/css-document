---
sidebar_position: 2
---

# CSS 规则集

CSS 规则集是 CSS 的基本构建块，由选择器和声明块组成。

## 语法结构

```css
selector {
  property: value;
  property: value;
}
```

### 选择器（Selector）

选择器用于匹配 HTML 元素。常见的选择器包括：

- **元素选择器** - `p`、`div`、`span`
- **类选择器** - `.class-name`
- **ID 选择器** - `#id-name`
- **属性选择器** - `[type="text"]`
- **伪类选择器** - `:hover`、`:focus`
- **伪元素选择器** - `::before`、`::after`

### 声明块（Declaration Block）

声明块包含一个或多个声明，每个声明由属性和值组成。

```css
{
  color: red;        /* 声明 1 */
  font-size: 16px;   /* 声明 2 */
}
```

### 属性（Property）

属性定义要设置的样式特征，如 `color`、`font-size`、`margin` 等。

### 值（Value）

值定义属性的具体设置，如 `red`、`16px`、`10px` 等。

## 示例

```css
/* 元素选择器 */
p {
  color: blue;
  font-size: 16px;
}

/* 类选择器 */
.highlight {
  background-color: yellow;
  padding: 10px;
}

/* ID 选择器 */
#header {
  background-color: #333;
  color: white;
}

/* 组合选择器 */
div.container > p.highlight {
  font-weight: bold;
}
```

## 重要概念

### 层叠（Cascade）

当多个规则匹配同一元素时，CSS 使用层叠机制决定哪个规则生效。

### 优先级（Specificity）

不同选择器具有不同的优先级，优先级高的规则会覆盖优先级低的规则。

### 继承（Inheritance）

某些属性会从父元素继承到子元素。

## 相关资源

- [MDN Web Docs: CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
- [CSS-Tricks: CSS Selectors](https://css-tricks.com/almanac/selectors/)