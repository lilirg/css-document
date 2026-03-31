---
sidebar_position: 54
---

# color

color 数据类型表示颜色值。

## 颜色表示方法

### 关键字颜色

```css
.color {
  color: red;
  color: blue;
  color: green;
}
```

### RGB 颜色

```css
.color {
  color: rgb(255, 0, 0);
  color: rgba(255, 0, 0, 0.5);
}
```

### HSL 颜色

```css
.color {
  color: hsl(0, 100%, 50%);
  color: hsla(0, 100%, 50%, 0.5);
}
```

### 十六进制颜色

```css
.color {
  color: #ff0000;
  color: #f00;
  color: #ff000080; /* 带 alpha */
}
```

### LAB/LCH 颜色

```css
.color {
  color: lab(50% 50 50);
  color: lch(50% 50 50);
}
```

### OKLAB/OKLCH 颜色

```css
.color {
  color: oklab(50% 50 50);
  color: oklch(50% 50 50);
}
```

### 系统颜色

```css
.color {
  color: ButtonText;
  color: Highlight;
}
```

## 示例

```css
/* 基本颜色 */
.element {
  color: red;
  background-color: blue;
  border-color: green;
}

/* 半透明 */
.element {
  background-color: rgba(255, 0, 0, 0.5);
  border-color: hsla(120, 100%, 50%, 0.8);
}

/* 十六进制 */
.element {
  background-color: #ff0000;
  color: #00ff00;
}
```

## 相关资源

- [MDN Web Docs: color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)
- [CSS-Tricks: color](https://css-tricks.com/almanac/properties/c/color/)