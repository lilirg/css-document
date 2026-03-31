---
sidebar_position: 14
---

# 颜色空间（Color Space）

颜色空间定义了不同颜色的表示方法。

## 什么是颜色空间？

颜色空间（Color Space）是 CSS 中定义颜色表示方法的模型。CSS 支持多种颜色空间，包括 RGB、HSL、Lab 等。

## 常见的颜色空间

### RGB 颜色空间

RGB 颜色空间使用红、绿、蓝三原色表示颜色。

```css
/* 十六进制 */
.color {
  color: #ff0000;
}

/* rgb() */
.color {
  color: rgb(255, 0, 0);
}

/* rgba() */
.color {
  color: rgba(255, 0, 0, 0.5);
}
```

### HSL 颜色空间

HSL 颜色空间使用色相、饱和度、亮度表示颜色。

```css
/* hsl() */
.color {
  color: hsl(0, 100%, 50%);
}

/* hsla() */
.color {
  color: hsla(0, 100%, 50%, 0.5);
}
```

### Lab 颜色空间

Lab 颜色空间是基于人眼视觉的颜色空间。

```css
/* lab() */
.color {
  color: lab(50% 50 50);
}

/* lch() */
.color {
  color: lch(50% 70 250);
}
```

## 颜色函数

### rgb() 和 rgba()

```css
.color {
  color: rgb(255, 0, 0);      /* 红色 */
  color: rgba(255, 0, 0, 0.5); /* 半透明红色 */
}
```

### hsl() 和 hsla()

```css
.color {
  color: hsl(0, 100%, 50%);      /* 红色 */
  color: hsla(0, 100%, 50%, 0.5); /* 半透明红色 */
}
```

### lab() 和 lch()

```css
.color {
  color: lab(50% 50 50);      /* 灰色 */
  color: lch(50% 70 250);      /* 蓝色 */
}
```

## 颜色混合

CSS 支持颜色混合模式：

```css
.color {
  background-color: red;
  mix-blend-mode: multiply;
}
```

## 相关资源

- [MDN Web Docs: 颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Colors)
- [CSS-Tricks: Colors](https://css-tricks.com/almanac/properties/c/color/)