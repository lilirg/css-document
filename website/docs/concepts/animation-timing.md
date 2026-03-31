---
sidebar_position: 19
---

# 动画计时（Animation Timing）

动画计时定义了动画的速度曲线。

## 什么是动画计时？

动画计时（Animation Timing）是 CSS 中定义动画速度曲线的属性。动画计时决定了动画在不同时间点的速度。

## animation-timing-function 属性

```css
.element {
  animation-timing-function: linear;        /* 线性 */
  animation-timing-function: ease;          /* 缓动（默认） */
  animation-timing-function: ease-in;       /* 缓入 */
  animation-timing-function: ease-out;      /* 缓出 */
  animation-timing-function: ease-in-out;   /* 缓入缓出 */
  animation-timing-function: step-start;    /* 起始跳变 */
  animation-timing-function: step-end;      /* 结束跳变 */
  animation-timing-function: steps(n, start); /* 分步动画 */
  animation-timing-function: cubic-bezier(x1, y1, x2, y2); /* 贝塞尔曲线 */
}
```

## 常用动画计时函数

### linear

```css
.linear {
  animation-timing-function: linear;
}
```

### ease

```css
.ease {
  animation-timing-function: ease;
}
```

### ease-in

```css
.ease-in {
  animation-timing-function: ease-in;
}
```

### ease-out

```css
.ease-out {
  animation-timing-function: ease-out;
}
```

### ease-in-out

```css
.ease-in-out {
  animation-timing-function: ease-in-out;
}
```

### cubic-bezier

```css
.cubic-bezier {
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
```

## 相关资源

- [MDN Web Docs: 动画计时](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)
- [CSS-Tricks: Animation Timing](https://css-tricks.com/almanac/properties/a/animation-timing-function/)