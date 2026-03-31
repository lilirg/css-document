---
sidebar_position: 15
---

# 颜色模型（Color Models）

颜色模型定义了 CSS 颜色的模型。

## 什么是颜色模型？

颜色模型（Color Models）是 CSS 中定义颜色表示方法的数学模型。CSS 支持多种颜色模型，包括 RGB、HSL、Lab 等。

## 常见的颜色模型

### RGB 颜色模型

RGB 颜色模型使用红、绿、蓝三原色表示颜色。

```css
.color {
  color: rgb(255, 0, 0);      /* 红色 */
  color: rgb(0, 255, 0);      /* 绿色 */
  color: rgb(0, 0, 255);      /* 蓝色 */
}
```

### HSL 颜色模型

HSL 颜色模型使用色相、饱和度、亮度表示颜色。

```css
.color {
  color: hsl(0, 100%, 50%);      /* 红色 */
  color: hsl(120, 100%, 50%);    /* 绿色 */
  color: hsl(240, 100%, 50%);    /* 蓝色 */
}
```

### Lab 颜色模型

Lab 颜色模型是基于人眼视觉的颜色模型。

```css
.color {
  color: lab(50% 50 50);      /* 灰色 */
  color: lab(70% 50 50);      /* 红色 */
  color: lab(50% -50 50);     /* 绿色 */
  color: lab(50% 50 -50);     /* 蓝色 */
}
```

### LCH 颜色模型

LCH 颜色模型是 Lab 颜色模型的极坐标表示。

```css
.color {
  color: lch(50% 70 250);      /* 蓝色 */
  color: lch(70% 70 25);       /* 红色 */
  color: lch(50% 70 145);      /* 绿色 */
}
```

## 颜色模型比较

| 颜色模型 | 优点 | 缺点 |
|---------|------|------|
| RGB | 直观、常用 | 不直观的颜色调整 |
| HSL | 直观的颜色调整 | 不同设备显示不一致 |
| Lab | 与设备无关 | 复杂 |
| LCH | 直观的颜色调整 | 不同设备显示不一致 |

## 相关资源

- [MDN Web Docs: 颜色模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Colors)
- [CSS-Tricks: Color Models](https://css-tricks.com/almanac/properties/c/color/)