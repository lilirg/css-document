# border

该属性是用于设置 CSS 边框属性的速记属性。

* [`border-width`](./border-width.md)
* [`border-style`](./border-style.md)
* [`border-color`](./border-color.md)

## 语法

```css
border: <border-width> || <border-style> || <border-color>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 见各独立属性   |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 各属性说明

### `border-width`

定义边框的宽度。可选值：
- `thin`、`medium`、`thick`
- 长度值（如 `1px`、`2pt`）

### `border-style`

定义边框的样式。可选值：
- `none`、`hidden`、`dotted`、`dashed`、`solid`、`double`、`groove`、`ridge`、`inset`、`outset`

### `border-color`

定义边框的颜色。可选值：
- 颜色值（如 `red`、`#ff0000`、`rgb(255, 0, 0)`）
- `transparent`

## 默认值

- `border-width: medium`
- `border-style: none`
- `border-color: currentColor`

## 注意

- 如果只指定一个值，它应用于所有四条边
- 如果 `border-style` 为 `none`，其他属性将被忽略
- 可以分别设置四条边的样式

## 示例

```css
/* 简单边框 */
.el {
  border: 1px solid #000;
}

/* 不同宽度的边框 */
.el2 {
  border: 2px dashed #333;
}

/* 彩色边框 */
.el3 {
  border: 1px solid blue;
}

/* 圆角边框 */
.el4 {
  border: 2px solid #007bff;
  border-radius: 8px;
}

/* 虚线边框 */
.el5 {
  border: 2px dashed #ccc;
}

/* 点线边框 */
.el6 {
  border: 2px dotted #999;
}

/* 双线边框 */
.el7 {
  border: 4px double #333;
}

/* 立体边框 */
.el8 {
  border: 4px groove #ccc;
}

/* 无边框 */
.el9 {
  border: none;
}
```

```html
<div class="el">1px solid</div>
<div class="el2">2px dashed</div>
<div class="el3">蓝色边框</div>
<div class="el4">圆角边框</div>
<div class="el5">虚线边框</div>
<div class="el6">点线边框</div>
<div class="el7">双线边框</div>
<div class="el8">立体边框</div>
<div class="el9">无边框</div>
```

## 使用场景

```css
/* 按钮边框 */
.button {
  border: 1px solid #007bff;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  border-color: #0056b3;
  background-color: #0056b3;
}

/* 输入框边框 */
.input {
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: #007bff;
  outline: none;
}

/* 卡片边框 */
.card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 虚线边框提示 */
.dashed-hint {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  color: #999;
}

/* 立体效果边框 */
.styled-box {
  border: 4px groove #ddd;
  padding: 20px;
  background-color: #f9f9f9;
}

/* 双线边框装饰 */
.decorated {
  border: 4px double #333;
  padding: 15px;
  margin: 20px 0;
}
