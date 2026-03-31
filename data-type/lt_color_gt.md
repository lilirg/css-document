# color

`color` 数据类型表示颜色值，是 CSS 中最常用的数据类型之一。

## 语法

```css
/* 关键字颜色 */
.element {
  color: red;
  background-color: blue;
}

/* 十六进制颜色 */
.element {
  color: #ff0000;
  background-color: #f00;
}

/* RGB 颜色 */
.element {
  color: rgb(255, 0, 0);
  background-color: rgba(255, 0, 0, 0.5);
}

/* HSL 颜色 */
.element {
  color: hsl(0, 100%, 50%);
  background-color: hsla(0, 100%, 50%, 0.5);
}

/* LAB 颜色 */
.element {
  color: lab(50% 50 50);
}

/* LCH 颜色 */
.element {
  color: lch(50% 50 50);
}

/* OKLAB 颜色 */
.element {
  color: oklab(50% 50 50);
}

/* OKLCH 颜色 */
.element {
  color: oklch(50% 50 50);
}

/* 系统颜色 */
.element {
  color: -moz-default-color;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 颜色格式

| 格式 | 描述 |
| :--- | :--- |
| `keyword` | 颜色关键字（如 `red`、`blue`） |
| `#hex` | 十六进制颜色（如 `#ff0000`、`#f00`） |
| `rgb()` | RGB 颜色 |
| `rgba()` | RGBA 颜色（带透明度） |
| `hsl()` | HSL 颜色（色相、饱和度、亮度） |
| `hsla()` | HSLA 颜色（带透明度） |
| `lab()` | CIE LAB 颜色 |
| `lch()` | CIE LCH 颜色 |
| `oklab()` | OKLab 颜色 |
| `oklch()` | OKLCH 颜色 |
| `color()` | CSS Color Module 4 格式 |

## 示例

### 关键字颜色

```css
.element {
  color: red;
  background-color: blue;
  border-color: green;
}
```

### 十六进制颜色

```css
/* 6 位十六进制 */
.element {
  color: #ff0000;
}

/* 3 位十六进制 */
.element {
  color: #f00;
}

/* 带透明度（8 位） */
.element {
  color: #ff000080;
}
```

### RGB 颜色

```css
/* RGB */
.element {
  color: rgb(255, 0, 0);
}

/* RGBA（带透明度） */
.element {
  color: rgba(255, 0, 0, 0.5);
}

/* 百分比 */
.element {
  color: rgb(100%, 0%, 0%);
}
```

### HSL 颜色

```css
/* HSL */
.element {
  color: hsl(0, 100%, 50%);
}

/* HSLA（带透明度） */
.element {
  color: hsla(0, 100%, 50%, 0.5);
}
```

### 渐变颜色

```css
/* 线性渐变 */
.element {
  background: linear-gradient(to right, red, blue);
}

/* 径向渐变 */
.element {
  background: radial-gradient(circle, red, blue);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 3+ |

## 相关链接

- [MDN Web Docs: color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)
- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/)
- [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)
