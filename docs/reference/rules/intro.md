# CSS 规则（At-Rules）

CSS 规则（At-Rules）是 CSS 中以 `@` 符号开头的特殊规则，用于定义样式表的元数据、条件规则、动画、页面布局等。

## 常见的 At-Rules

### @charset

```css
@charset "UTF-8";
```

### @document

```css
@document url("https://example.com/") {
  /* 样式 */
}
```

### @font-face

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2");
}
```

### @import

```css
@import url("styles.css");
```

### @keyframes

```css
@keyframes myAnimation {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}
```

### @media

```css
@media (max-width: 768px) {
  /* 样式 */
}
```

### @namespace

```css
@namespace url("http://www.w3.org/1999/xhtml");
```

### @page

```css
@page {
  margin: 1cm;
}
```

### @supports

```css
@supports (display: flex) {
  /* 样式 */
}
```

## 相关资源

- [MDN Web Docs: At-Rules](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule)
- [CSS-Tricks: At-Rules](https://css-tricks.com/almanac/properties/a/at-rule/)