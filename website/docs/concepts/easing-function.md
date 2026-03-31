---
sidebar_position: 20
---

# 缓动函数（Easing Function）

缓动函数定义了动画的速度变化。

## 什么是缓动函数？

缓动函数（Easing Function）是 CSS 中定义动画速度变化的函数。缓动函数决定了动画在不同时间点的速度。

## 常用的缓动函数

### linear

```css
.linear {
  transition-timing-function: linear;
}
```

### ease

```css
.ease {
  transition-timing-function: ease;
}
```

### ease-in

```css
.ease-in {
  transition-timing-function: ease-in;
}
```

### ease-out

```css
.ease-out {
  transition-timing-function: ease-out;
}
```

### ease-in-out

```css
.ease-in-out {
  transition-timing-function: ease-in-out;
}
```

### cubic-bezier

```css
.cubic-bezier {
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

## 自定义缓动函数

```css
.custom {
  transition-timing-function: cubic-bezier(x1, y1, x2, y2);
}
```

## 相关资源

- [MDN Web Docs: 缓动函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/easing-function)
- [CSS-Tricks: Easing Functions](https://css-tricks.com/almanac/properties/t/transition-timing-function/)