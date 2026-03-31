# 长度（Length）

长度是 CSS 中最常用的数据类型之一，用于表示距离、尺寸等。

## 绝对长度

绝对长度单位是固定的，不随其他因素变化。

| 单位 | 说明 | 等价关系 |
| :--- | :--- | :--- |
| `px` | 像素 | 屏幕上的最小显示单位 |
| `cm` | 厘米 | 1cm = 37.8px = 96/2.54px |
| `mm` | 毫米 | 1mm = 3.78px = 96/25.4px |
| `in` | 英寸 | 1in = 2.54cm = 96px |
| `pt` | 磅 | 1pt = 1/72in = 1.33px = 96/72px |
| `pc` | 派卡 | 1pc = 12pt = 16px |

### 像素（px）

像素是最常用的长度单位，表示屏幕上的一个点：

```css
div {
  width: 200px;
  height: 100px;
  margin: 10px;
}
```

### 印刷单位

用于打印样式：

```css
@media print {
  body {
    font-size: 12pt;  /* 12 磅 */
    margin: 1in;      /* 1 英寸 */
  }
}
```

## 相对长度

相对长度单位是相对于其他值的。

### 视口单位

| 单位 | 说明 |
| :--- | :--- |
| `vw` | 视口宽度的 1% |
| `vh` | 视口高度的 1% |
| `vmin` | 视口较小尺寸的 1% |
| `vmax` | 视口较大尺寸的 1% |

```css
div {
  width: 50vw;   /* 视口宽度的 50% */
  height: 50vh;  /* 视口高度的 50% */
}
```

### 字体相关单位

| 单位 | 说明 |
| :--- | :--- |
| `em` | 相对于当前元素的字体大小 |
| `ex` | 相对于当前元素的 x-height |
| `ch` | 相对于当前元素的 "0" 字符宽度 |
| `rem` | 相对于根元素（html）的字体大小 |

```css
html {
  font-size: 16px;
}

body {
  font-size: 1.2em;  /* 19.2px (16 * 1.2) */
}

div {
  width: 20em;       /* 240px (20 * 12px) */
  margin: 2rem;      /* 32px (2 * 16px) */
}
```

### 百分比

相对于父元素的对应属性值：

```css
.parent {
  width: 800px;
}

.child {
  width: 50%;  /* 400px (800 * 50%) */
}
```

## 长度单位示例

```css
/* 绝对长度 */
.box1 {
  width: 200px;
  height: 100px;
  margin: 10px;
}

/* 相对长度 */
.box2 {
  width: 50vw;     /* 视口宽度的 50% */
  height: 20em;    /* 字体大小的 20 倍 */
  padding: 10%;    /* 父元素宽度的 10% */
}

/* 响应式设计 */
.responsive {
  font-size: 1.5rem;  /* 根元素字体大小的 1.5 倍 */
  padding: 2vh;       /* 视口高度的 2% */
}
```

## 长度计算

使用 `calc()` 函数进行长度计算：

```css
div {
  width: calc(100% - 20px);     /* 100% 减去 20px */
  height: calc(50vh + 100px);   /* 50vh 加上 100px */
  margin: calc(10px * 2);       /* 10px 乘以 2 */
}
```

## 最佳实践

1. **使用 `rem`** - 统一的字体大小基准
2. **使用百分比** - 响应式布局
3. **使用 `calc()`** - 灵活的长度计算
4. **避免混合单位** - 保持一致性

## 相关链接

- [MDN: 长度](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)