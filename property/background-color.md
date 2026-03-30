# background-color

该属性设置元素的背景颜色。

## 语法

```css
background-color: <color> | transparent | initial | inherit
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `transparent`  |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<color>`

定义背景颜色。可以使用以下格式：

| 格式 | 示例 | 说明 |
|------|------|------|
| 颜色名称 | `red`、`blue`、`green` | 140 种预定义颜色名称 |
| 十六进制 | `#ff0000`、`#f00` | RGB 或 RGBA 值 |
| RGB | `rgb(255, 0, 0)` | RGB 值 |
| RGBA | `rgba(255, 0, 0, 0.5)` | RGB 值加透明度 |
| HSL | `hsl(0, 100%, 50%)` | 色相、饱和度、亮度 |
| HSLA | `hsla(0, 100%, 50%, 0.5)` | HSL 值加透明度 |

### `transparent`

完全透明的背景。显示底层的内容或背景。

### `initial`

设置为默认值（`transparent`）。

### `inherit`

从父元素继承背景颜色。

## 注意

- 如果指定了多个背景层，每个层的颜色只能在最后一层定义
- 背景颜色位于所有背景图像的下方
- 背景颜色支持动画过渡

## 示例

```css
/* 颜色名称 */
.el {
  background-color: lightblue;
}

/* 十六进制 */
.el2 {
  background-color: #3498db;
}

/* 短十六进制 */
.el3 {
  background-color: #39d;
}

/* RGB */
.el4 {
  background-color: rgb(52, 152, 219);
}

/* RGBA（带透明度） */
.el5 {
  background-color: rgba(52, 152, 219, 0.5);
}

/* HSL */
.el6 {
  background-color: hsl(207, 70%, 53%);
}

/* HSLA（带透明度） */
.el7 {
  background-color: hsla(207, 70%, 53%, 0.5);
}

/* 透明 */
.el8 {
  background-color: transparent;
}

/* 背景颜色与图像结合 */
.el9 {
  background-color: #3498db;
  background-image: url('pattern.png');
}
```

```html
<div class="el">lightblue</div>
<div class="el2">#3498db</div>
<div class="el3">#39d</div>
<div class="el4">rgb()</div>
<div class="el5">rgba()</div>
<div class="el6">hsl()</div>
<div class="el7">hsla()</div>
<div class="el8">transparent</div>
<div class="el9">颜色 + 图像</div>
```

## 使用场景

```css
/* 按钮背景 */
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

/* 卡片背景 */
.card {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
}

/* 半透明遮罩 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

/* 交替行背景 */
.table tr:nth-child(odd) {
  background-color: #f8f9fa;
}

.table tr:nth-child(even) {
  background-color: #fff;
}

/* 背景颜色过渡 */
.highlight {
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.highlight:hover {
  background-color: #fff3cd;
}
