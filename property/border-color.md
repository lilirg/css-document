# border-color

该属性设置元素的边框颜色。

## 语法

```css
border-color: <color>{1,4}
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 取决于用户代理 |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<color>`

定义边框的颜色。可以使用任何有效的 CSS 颜色值：

| 类型 | 示例 |
|------|------|
| 颜色关键字 | `red`、`blue`、`green`、`#333` |
| 十六进制 | `#ff0000`、`#f00`、`#ff000080` |
| RGB | `rgb(255, 0, 0)`、`rgb(100% 0% 0%)` |
| RGBA | `rgba(255, 0, 0, 0.5)` |
| HSL | `hsl(0, 100%, 50%)` |
| HSLA | `hsla(0, 100%, 50%, 0.5)` |
| 关键字 | `transparent`、`currentcolor` |

### 多值语法

可以指定 1 到 4 个值，分别设置不同边的颜色：

```css
border-color: red;                    /* 所有边 */
border-color: red blue;               /* 上下，左右 */
border-color: red blue green;         /* 上，左右，下 */
border-color: red blue green yellow;  /* 上，右，下，左 */
```

## 注意

- 如果边框样式为 `none` 或 `hidden`，边框颜色不会显示
- 边框颜色默认继承元素的 `color` 属性值
- 可以使用 `transparent` 创建透明边框

## 示例

```css
/* 颜色关键字 */
.el1 {
  border-color: red;
  border-style: solid;
  border-width: 2px;
}

.el2 {
  border-color: blue;
  border-style: solid;
  border-width: 2px;
}

.el3 {
  border-color: green;
  border-style: solid;
  border-width: 2px;
}

/* 十六进制颜色 */
.el4 {
  border-color: #ff0000;
  border-style: solid;
  border-width: 2px;
}

.el5 {
  border-color: #00ff00;
  border-style: solid;
  border-width: 2px;
}

.el6 {
  border-color: #0000ff;
  border-style: solid;
  border-width: 2px;
}

/* RGBA 颜色 */
.el7 {
  border-color: rgba(255, 0, 0, 0.5);
  border-style: solid;
  border-width: 2px;
}

/* HSL 颜色 */
.el8 {
  border-color: hsl(120, 100%, 50%);
  border-style: solid;
  border-width: 2px;
}

/* 透明边框 */
.el9 {
  border-color: transparent;
  border-style: solid;
  border-width: 2px;
}

/* 当前颜色 */
.el10 {
  border-color: currentcolor;
  border-style: solid;
  border-width: 2px;
  color: purple;
}

/* 多值设置 */
.el11 {
  border-color: red blue green yellow;
  border-style: solid;
  border-width: 2px;
}
```

```html
<div class="el1">red</div>
<div class="el2">blue</div>
<div class="el3">green</div>
<div class="el4">#ff0000</div>
<div class="el5">#00ff00</div>
<div class="el6">#0000ff</div>
<div class="el7">rgba(255,0,0,0.5)</div>
<div class="el8">hsl(120,100%,50%)</div>
<div class="el9">transparent</div>
<div class="el10">currentcolor</div>
<div class="el11">多值设置</div>
```

## 使用场景

```css
/* 成功状态 */
.success {
  border-color: #28a745;
  border-style: solid;
  border-width: 2px;
  padding: 15px;
}

/* 警告状态 */
.warning {
  border-color: #ffc107;
  border-style: solid;
  border-width: 2px;
  padding: 15px;
}

/* 错误状态 */
.error {
  border-color: #dc3545;
  border-style: solid;
  border-width: 2px;
  padding: 15px;
}

/* 信息状态 */
.info {
  border-color: #17a2b8;
  border-style: solid;
  border-width: 2px;
  padding: 15px;
}

/* 焦点状态 */
.focused {
  border-color: #007bff;
  border-style: solid;
  border-width: 2px;
  outline: none;
}

/* 禁用状态 */
.disabled {
  border-color: #6c757d;
  border-style: solid;
  border-width: 1px;
  opacity: 0.6;
}

/* 彩虹边框 */
.rainbow {
  border-color: red orange yellow green blue indigo violet;
  border-style: solid;
  border-width: 4px 4px 4px 4px;
  padding: 20px;
}

/* 渐变边框（配合 border-image） */
.gradient-border {
  border-color: transparent;
  border-style: solid;
  border-width: 4px;
  border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;
  padding: 20px;
}

/* 四色边框 */
.four-color {
  border-color: #ff6b6b #4ecdc4 #45b7d1 #96ceb4;
  border-style: solid;
  border-width: 3px;
  padding: 20px;
}
