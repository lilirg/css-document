# @namespace

`@namespace` 规则用于定义 XML 命名空间，主要用于处理 XML 文档中的元素选择。

## 语法

```css
@namespace <prefix> <url>;
@namespace url(<url>);

/* 示例 */
@namespace html "http://www.w3.org/1999/xhtml";
@namespace svg "http://www.w3.org/2000/svg";

/* 默认命名空间 */
@namespace url("http://www.w3.org/1999/xhtml");
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 不适用（命名空间规则） |
| 动画 | 不适用 |

## 属性值

### prefix（命名空间前缀）

定义命名空间的前缀，用于在选择器中引用该命名空间。

### url（命名空间 URL）

定义命名空间的 URI，通常是 XML 命名空间的 URI。

## 示例

### HTML 命名空间

```css
@namespace html "http://www.w3.org/1999/xhtml";

/* 选择 HTML 命名空间中的所有 div 元素 */
html|div {
  border: 1px solid black;
}
```

### SVG 命名空间

```css
@namespace svg "http://www.w3.org/2000/svg";

/* 选择 SVG 命名空间中的所有 rect 元素 */
svg|rect {
  fill: blue;
}

/* 选择 SVG 命名空间中的所有 circle 元素 */
svg|circle {
  fill: red;
}
```

### 默认命名空间

```css
@namespace url("http://www.w3.org/1999/xhtml");

/* 选择默认命名空间中的所有 div 元素 */
div {
  border: 1px solid black;
}
```

### 多个命名空间

```css
@namespace html "http://www.w3.org/1999/xhtml";
@namespace svg "http://www.w3.org/2000/svg";

/* 选择 HTML 命名空间中的所有 div 元素 */
html|div {
  border: 1px solid black;
}

/* 选择 SVG 命名空间中的所有 rect 元素 */
svg|rect {
  fill: blue;
}
```

### 属性选择器

```css
@namespace html "http://www.w3.org/1999/xhtml";

/* 选择 HTML 命名空间中具有 title 属性的元素 */
html|[title] {
  cursor: help;
}

/* 选择 HTML 命名空间中 title 属性值为 "example" 的元素 */
html|[title="example"] {
  color: blue;
}
```

### 伪类选择器

```css
@namespace html "http://www.w3.org/1999/xhtml";

/* 选择 HTML 命名空间中被悬停的元素 */
html|*:hover {
  background-color: yellow;
}

/* 选择 HTML 命名空间中被激活的元素 */
html|*:active {
  background-color: orange;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 3.1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: @namespace](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@namespace)
- [W3C: CSS Namespaces Module Level 3 - @namespace](https://www.w3.org/TR/css-namespaces-3/#at-namespace)
