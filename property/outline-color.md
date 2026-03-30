# outline-color

该属性设置轮廓的颜色。

## 语法

```css
outline-color: <color> | invert
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `invert`       |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `<color>`

任何有效的 CSS 颜色值：
- 颜色名称：`red`、`blue`、`green`
- 十六进制：`#ff0000`、`#f00`
- RGB：`rgb(255, 0, 0)`、`rgba(255, 0, 0, 0.5)`
- HSL：`hsl(0, 100%, 50%)`、`hsla(0, 100%, 50%, 0.5)`

### `invert`

反转屏幕颜色。用于在无法确定轮廓颜色的情况下提供可见性。

## 注意

- 该属性是 `outline` 速记属性的一部分
- 必须先设置 `outline-style` 才能看到轮廓
- `invert` 值在旧版浏览器中用于提高可访问性

## 示例

```css
/* 颜色名称 */
.el1 {
  outline-color: blue;
  outline-style: solid;
  outline-width: 2px;
}

/* 十六进制 */
.el2 {
  outline-color: #ff0000;
  outline-style: solid;
  outline-width: 2px;
}

/* RGB */
.el3 {
  outline-color: rgb(0, 255, 0);
  outline-style: solid;
  outline-width: 2px;
}

/* RGBA */
.el4 {
  outline-color: rgba(0, 0, 255, 0.5);
  outline-style: solid;
  outline-width: 2px;
}

/* 反转 */
.el5 {
  outline-color: invert;
  outline-style: solid;
  outline-width: 2px;
}
```

```html
<!-- 轮廓颜色示例 -->
<div class="red-outline">红色轮廓</div>
<div class="blue-outline">蓝色轮廓</div>
<div class="green-outline">绿色轮廓</div>
```

## 使用场景

```css
/* 焦点状态 */
input:focus {
  outline-color: blue;
  outline-style: solid;
  outline-width: 2px;
}

/* 错误状态 */
.error {
  outline-color: red;
  outline-style: solid;
  outline-width: 2px;
}

/* 成功状态 */
.success {
  outline-color: green;
  outline-style: solid;
  outline-width: 2px;
}

/* 警告状态 */
.warning {
  outline-color: orange;
  outline-style: solid;
  outline-width: 2px;
}

/* 自定义颜色 */
.custom-color {
  outline-color: #0066cc;
  outline-style: solid;
  outline-width: 3px;
}

/* 半透明轮廓 */
.transparent-outline {
  outline-color: rgba(0, 102, 204, 0.5);
  outline-style: solid;
  outline-width: 2px;
}

/* HSL 颜色 */
.hsl-outline {
  outline-color: hsl(120, 100%, 25%);
  outline-style: solid;
  outline-width: 2px;
}

/* 悬停状态 */
.hover-outline {
  outline-style: solid;
  outline-width: 2px;
  outline-color: transparent;
  transition: outline-color 0.3s;
}

.hover-outline:hover {
  outline-color: blue;
}

/* 响应式颜色 */
.responsive-color {
  outline-color: blue;
  outline-style: solid;
  outline-width: 2px;
}

@media (prefers-color-scheme: dark) {
  .responsive-color {
    outline-color: #66b3ff;
  }
}

/* 动画颜色 */
.animated-color {
  outline-color: blue;
  outline-style: solid;
  outline-width: 2px;
  animation: colorChange 3s infinite;
}

@keyframes colorChange {
  0%, 100% { outline-color: blue; }
  25% { outline-color: red; }
  50% { outline-color: green; }
  75% { outline-color: orange; }
}

/* 可访问性焦点 */
.accessible-focus {
  outline-color: #ffcc00;
  outline-style: solid;
  outline-width: 3px;
  outline-offset: 2px;
}

/* 主题颜色 */
.theme-outline {
  outline-color: var(--primary-color);
  outline-style: solid;
  outline-width: 2px;
}
