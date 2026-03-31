---
sidebar_position: 11
---

# CSS 性能优化

CSS 性能优化是提高网页加载速度和渲染性能的重要手段。

## 选择器优化

### 避免过度嵌套

```css
/* 不推荐 */
.container .header .nav .item {
  color: red;
}

/* 推荐 */
.nav-item {
  color: red;
}
```

### 使用类选择器

```css
/* 不推荐 */
div > p span {
  color: red;
}

/* 推荐 */
.text {
  color: red;
}
```

### 避免通配选择器

```css
/* 不推荐 */
* {
  margin: 0;
  padding: 0;
}

/* 推荐 */
body, html {
  margin: 0;
  padding: 0;
}
```

## 减少重排和重绘

### 使用 transform 和 opacity

```css
/* 不推荐 */
.element {
  top: 100px;
}

/* 推荐 */
.element {
  transform: translateY(100px);
}
```

### 批量修改样式

```css
/* 不推荐 */
.element.style.color = 'red';
.element.style.fontSize = '16px';
.element.style.margin = '10px';

/* 推荐 */
.element.style.cssText = 'color: red; font-size: 16px; margin: 10px;';
```

## 压缩和合并

### 压缩 CSS

```bash
# 使用 CSS 压缩工具
css-minifier
```

### 合并 CSS

```html
<!-- 不推荐 -->
<link rel="stylesheet" href="style1.css">
<link rel="stylesheet" href="style2.css">

<!-- 推荐 -->
<link rel="stylesheet" href="style.css">
```

## 相关资源

- [MDN Web Docs: CSS 性能](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Performance)
- [CSS-Tricks: CSS Performance](https://css-tricks.com/efficient-rendering/)