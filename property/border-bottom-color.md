# border-bottom-color

该属性设置元素的下边框颜色。

## 语法

```css
border-bottom-color: <color>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 取决于用户代理 |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<color>`

定义下边框的颜色。可以使用任何有效的 CSS 颜色值：

| 类型 | 示例 |
|------|------|
| 颜色关键字 | `red`、`blue`、`green`、`#333` |
| 十六进制 | `#ff0000`、`#f00`、`#ff000080` |
| RGB | `rgb(255, 0, 0)`、`rgb(100% 0% 0%)` |
| RGBA | `rgba(255, 0, 0, 0.5)` |
| HSL | `hsl(0, 100%, 50%)` |
| HSLA | `hsla(0, 100%, 50%, 0.5)` |
| 关键字 | `transparent`、`currentcolor` |

## 注意

- 如果边框样式为 `none` 或 `hidden`，边框颜色不会显示
- 边框颜色默认继承元素的 `color` 属性值
- 可以使用 `transparent` 创建透明边框

## 示例

```css
/* 颜色关键字 */
.el1 {
  border-bottom-color: red;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.el2 {
  border-bottom-color: blue;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.el3 {
  border-bottom-color: green;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

/* 十六进制颜色 */
.el4 {
  border-bottom-color: #ff0000;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.el5 {
  border-bottom-color: #00ff00;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.el6 {
  border-bottom-color: #0000ff;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

/* RGBA 颜色 */
.el7 {
  border-bottom-color: rgba(255, 0, 0, 0.5);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

/* HSL 颜色 */
.el8 {
  border-bottom-color: hsl(120, 100%, 50%);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

/* 透明边框 */
.el9 {
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

/* 当前颜色 */
.el10 {
  border-bottom-color: currentcolor;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  color: purple;
}
```

```html
<div class="el1">red</div>
<div class="el2">blue</div>
<div class="el3">green</div>
<div class="el4">#ff0000</div>
<div class="el5">#00ff00</div>
<div class="el6">#0000ff</div>
<div class="el7">rgba</div>
<div class="el8">hsl</div>
<div class="el9">transparent</div>
<div class="el10">currentcolor</div>
```

## 使用场景

```css
/* 成功状态 */
.success-bottom {
  border-bottom-color: #28a745;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 15px;
}

/* 警告状态 */
.warning-bottom {
  border-bottom-color: #ffc107;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 15px;
}

/* 错误状态 */
.error-bottom {
  border-bottom-color: #dc3545;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 15px;
}

/* 信息状态 */
.info-bottom {
  border-bottom-color: #17a2b8;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 15px;
}

/* 焦点状态 */
.focused-bottom {
  border-bottom-color: #007bff;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  outline: none;
}

/* 禁用状态 */
.disabled-bottom {
  border-bottom-color: #6c757d;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  opacity: 0.6;
}

/* 渐变边框（配合 border-image） */
.gradient-bottom {
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4) 1;
  padding-bottom: 15px;
}

/* 动态颜色（配合动画） */
.animated-bottom {
  border-bottom-color: #28a745;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 15px;
  animation: colorChange 2s infinite;
}

@keyframes colorChange {
  0%, 100% { border-bottom-color: #28a745; }
  50% { border-bottom-color: #dc3545; }
}
