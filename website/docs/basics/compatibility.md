---
sidebar_position: 10
---

# 浏览器兼容性

浏览器兼容性是指 CSS 在不同浏览器中的支持情况。

## 常见的浏览器

### Chrome

- 基于 Blink 渲染引擎
- 支持最新的 CSS 特性

### Firefox

- 基于 Gecko 渲染引擎
- 支持最新的 CSS 特性

### Safari

- 基于 WebKit 渲染引擎
- 支持最新的 CSS 特性

### Edge

- 基于 Chromium 渲染引擎
- 支持最新的 CSS 特性

### IE

- 基于 Trident 渲染引擎
- 不支持最新的 CSS 特性

## 前缀支持

```css
/* Webkit 前缀 */
.element {
  -webkit-transform: rotate(45deg);
}

/* Firefox 前缀 */
.element {
  -moz-transform: rotate(45deg);
}

/* IE 前缀 */
.element {
  -ms-transform: rotate(45deg);
}

/* Opera 前缀 */
.element {
  -o-transform: rotate(45deg);
}

/* 标准属性 */
.element {
  transform: rotate(45deg);
}
```

## 兼容性检查

### Can I Use

- [Can I Use](https://caniuse.com/) - 查询 CSS 特性兼容性

### MDN Web Docs

- [MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS) - CSS 兼容性信息

## 相关资源

- [Can I Use](https://caniuse.com/)
- [MDN Web Docs: CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)