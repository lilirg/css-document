# CSS 值与单位

CSS 值与单位是 CSS 样式的基础，理解各种值类型和单位对于编写有效的 CSS 至关重要。

## CSS 值类型

### 关键字值

关键字值是预定义的字符串值。

```css
/* 颜色关键字 */
color: red;
color: blue;
color: transparent;

/* 显示关键字 */
display: block;
display: inline;
display: none;

/* 其他关键字 */
cursor: pointer;
text-align: center;
overflow: hidden;
```

### 全局关键字值

| 值 | 说明 |
| :--- | :--- |
| `initial` | 设置为属性的默认值 |
| `inherit` | 从父元素继承属性值 |
| `unset` | 如果属性是继承属性则等同于 `inherit`，否则等同于 `initial` |
| `revert` | 回退到用户代理默认样式 |
| `revert-layer` | 回退到上一层级样式 |

```css
.box {
  color: initial; /* 黑色 */
  margin: inherit; /* 从父元素继承 */
  padding: unset;
}
```

## 长度单位

### 绝对长度单位

| 单位 | 说明 | 换算 |
| :--- | :--- | :--- |
| `px` | 像素 | 1px = 1/96 英寸 |
| `cm` | 厘米 | 1cm = 96px/2.54 |
| `mm` | 毫米 | 1mm = 1/10cm |
| `q` | 四分之一毫米 | 1q = 1/40cm |
| `in` | 英寸 | 1in = 96px |
| `pt` | 点 | 1pt = 1/72in |
| `pc` | 派卡 | 1pc = 12pt |

```css
.box {
  width: 100px;
  font-size: 12pt;
  margin: 1cm;
}
```

### 相对长度单位

| 单位 | 说明 |
| :--- | :--- |
| `em` | 相对于父元素的字体大小 |
| `rem` | 相对于根元素的字体大小 |
| `ex` | 相对于 x-height（小写 x 的高度） |
| `ch` | 相对于数字 0 的宽度 |
| `vw` | 相对于视口宽度的 1% |
| `vh` | 相对于视口高度的 1% |
| `vmin` | 相对于视口较小边的 1% |
| `vmax` | 相对于视口较大边的 1% |
| `%` | 相对于父元素的百分比 |

```css
.box {
  font-size: 16px;
  width: 50%;
  margin: 1em; /* 16px */
  padding: 2rem; /* 32px */
  height: 100vh;
}
```

## 百分比

百分比值相对于父元素或元素的某个属性。

```css
.container {
  width: 800px;
}

.box {
  width: 50%; /* 400px */
  margin-top: 10%; /* 相对于父元素宽度 */
}
```

### 百分比的特殊用法

```css
/* padding 的百分比相对于宽度 */
.square {
  width: 200px;
  padding-top: 100%; /* 高度 = 宽度，形成正方形 */
}

/* font-size 的百分比 */
.parent {
  font-size: 16px;
}

.child {
  font-size: 150%; /* 24px */
}
```

## 颜色单位

### 十六进制

```css
color: #ff0000;
color: #f00; /* 简写 */
color: #ff000080; /* 带透明度 */
color: #f008; /* 简写带透明度 */
```

### RGB/RGBA

```css
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
color: rgb(255 0 0 / 0.5); /* 现代语法 */
```

### HSL/HSLA

```css
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);
color: hsl(0 100% 50% / 0.5); /* 现代语法 */
```

### 颜色关键字

```css
color: red;
color: blue;
color: transparent;
color: currentColor; /* 当前文本颜色 */
```

### 系统颜色

```css
color: Canvas; /* 背景色 */
color: CanvasText; /* 背景上的文本颜色 */
color: LinkText; /* 链接文本颜色 */
color: Highlight; /* 选中项背景 */
color: HighlightText; /* 选中项文本 */
```

## 时间单位

| 单位 | 说明 |
| :--- | :--- |
| `s` | 秒 |
| `ms` | 毫秒 |

```css
animation-duration: 2s;
transition-duration: 500ms;
```

## 频率单位

| 单位 | 说明 |
| :--- | :--- |
| `Hz` | 赫兹 |
| `kHz` | 千赫兹 |

```css
@keyframes beep {
  0% { volume: 100Hz; }
}
```

## 角度单位

| 单位 | 说明 |
| :--- | :--- |
| `deg` | 度 |
| `grad` | 梯度 |
| `rad` | 弧度 |
| `turn` | 圈 |

```css
transform: rotate(90deg);
transform: rotate(100grad);
transform: rotate(1.57rad);
transform: rotate(0.25turn);
```

## 分辨率单位

| 单位 | 说明 |
| :--- | :--- |
| `dpi` | 每英寸点数 |
| `dpcm` | 每厘米点数 |
| `dppx` | 每像素点数 |

```css
@media (min-resolution: 192dpi) {
  /* 高分辨率屏幕 */
}
```

## 字符串

```css
content: "Hello, World!";
content: 'Hello, World!';
```

### 转义字符

```css
content: "Hello\nWorld"; /* 换行 */
content: "Hello\tWorld"; /* 制表符 */
content: "Hello\"World"; /* 引号 */
```

## URL

```css
background-image: url("image.png");
background-image: url('image.png');
background-image: url(image.png);
```

## 计算值

### calc()

```css
width: calc(100% - 40px);
height: calc(100vh - 100px);
margin: calc(1rem + 10px);
```

### min()

```css
width: min(500px, 100%);
font-size: min(2rem, 4vw);
```

### max()

```css
width: max(300px, 50%);
font-size: max(1rem, 2vw);
```

### clamp()

```css
font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
/* 最小 1rem，首选 2vw + 0.5rem，最大 2rem */
```

## 函数值

### 渐变

```css
background: linear-gradient(to right, red, blue);
background: radial-gradient(circle, red, blue);
background: repeating-linear-gradient(45deg, red, blue 10px);
```

### 变换

```css
transform: translate(100px, 50px);
transform: scale(1.5);
transform: rotate(45deg);
transform: skew(10deg, 5deg);
```

### 其他函数

```css
/* 模糊 */
filter: blur(5px);

/* 亮度 */
filter: brightness(1.5);

/* 对比度 */
filter: contrast(2);

/* 阴影 */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
```

## 最佳实践

1. **使用 rem 而非 px**：便于统一调整字体大小
2. **使用百分比或视口单位**：便于响应式设计
3. **使用 calc() 进行动态计算**：避免手动计算
4. **使用 CSS 变量**：便于统一管理和修改
5. **避免过度使用绝对单位**：提高可访问性

## 相关链接

- [MDN: CSS 数据类型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Types)
- [MDN: CSS 单位](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)
- [W3C CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/)