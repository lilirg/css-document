# length

`length` 数据类型表示长度值，是 CSS 中最常用的数据类型之一。

## 语法

```css
/* 绝对单位 */
.element {
  width: 100px;
  height: 50px;
  margin: 10pt;
  padding: 2cm;
}

/* 相对单位 */
.element {
  width: 50%;
  font-size: 1.5em;
  line-height: 1.2ex;
  letter-spacing: 0.1ch;
  word-spacing: 0.2rem;
}

/* 视口单位 */
.element {
  width: 50vw;
  height: 50vh;
  font-size: 4vmin;
  margin: 2vmax;
}

/* 百分比 */
.element {
  width: 50%;
  height: 100%;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（部分单位） |

## 长度单位

### 绝对单位

| 单位 | 描述 |
| :--- | :--- |
| `px` | 像素 |
| `pt` | 点（1pt = 1/72in） |
| `pc` | 派卡（1pc = 12pt） |
| `mm` | 毫米 |
| `cm` | 厘米 |
| `in` | 英寸（1in = 2.54cm） |

### 相对单位

| 单位 | 描述 |
| :--- | :--- |
| `em` | 相对于当前元素的字体大小 |
| `ex` | 相对于当前元素的 x-height |
| `ch` | 相对于数字 0 的宽度 |
| `rem` | 相对于根元素的字体大小 |
| `lh` | 相对于行高 |
| `rlh` | 相对于根元素的行高 |

### 视口单位

| 单位 | 描述 |
| :--- | :--- |
| `vw` | 视口宽度的 1% |
| `vh` | 视口高度的 1% |
| `vmin` | 视口较小维度的 1% |
| `vmax` | 视口较大维度的 1% |

### 百分比

| 单位 | 描述 |
| :--- | :--- |
| `%` | 相对于包含块的百分比 |

## 示例

### 像素 (px)

```css
/* 固定宽度 */
.element {
  width: 100px;
  height: 50px;
}

/* 边框 */
.element {
  border: 1px solid #000;
}
```

### em

```css
/* 相对字体大小 */
.element {
  font-size: 1.5em;
}

/* 相对边距 */
.element {
  margin: 1em;
  padding: 0.5em;
}
```

### rem

```css
/* 相对根元素字体大小 */
html {
  font-size: 16px;
}

.element {
  font-size: 1.5rem; /* 24px */
  margin: 1rem; /* 16px */
}
```

### 百分比

```css
/* 相对父元素宽度 */
.element {
  width: 50%;
}

/* 相对父元素高度 */
.element {
  height: 100%;
}
```

### 视口单位

```css
/* 视口宽度 */
.element {
  width: 100vw;
}

/* 视口高度 */
.element {
  height: 100vh;
}

/* 响应式字体大小 */
.element {
  font-size: 4vw;
}
```

### 实用示例

```css
/* 响应式布局 */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 响应式图片 */
.image {
  width: 100%;
  height: auto;
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

- [MDN Web Docs: length](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#lengths)
