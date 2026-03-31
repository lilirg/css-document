---
sidebar_position: 5
---

# @media

@media 规则定义媒体查询。

## 语法

```css
@media <media-type> and (<media-feature>) {
  /* 样式 */
}
```

## 常见媒体类型

```css
@media screen {
  /* 样式 */
}

@media print {
  /* 样式 */
}

@media all {
  /* 样式 */
}
```

## 常见媒体特性

```css
@media (max-width: 768px) {
  /* 样式 */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* 样式 */
}

@media (orientation: landscape) {
  /* 样式 */
}

@media (prefers-color-scheme: dark) {
  /* 样式 */
}
```

## 示例

```css
/* 手机 */
@media (max-width: 576px) {
  .container {
    padding: 10px;
  }
}

/* 平板 */
@media (min-width: 577px) and (max-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* 桌面 */
@media (min-width: 769px) {
  .container {
    padding: 30px;
  }
}
```

## 相关资源

- [MDN Web Docs: @media](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)
- [CSS-Tricks: @media](https://css-tricks.com/almanac/properties/m/media/)