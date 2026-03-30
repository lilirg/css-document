# outline-style

该属性设置轮廓的样式。

## 语法

```css
outline-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `none`

无轮廓。默认值。

### `hidden`

隐藏轮廓。与 `none` 类似，但在表格中用于处理冲突。

### `dotted`

点线轮廓。由圆点组成。

### `dashed`

虚线轮廓。由短线段组成。

### `solid`

实线轮廓。单条实线。

### `double`

双线轮廓。两条实线，线宽由 `outline-width` 控制。

### `groove`

凹槽轮廓。看起来像雕刻在页面中。

### `ridge`

脊线轮廓。看起来像凸出在页面中。

### `inset`

内嵌轮廓。看起来像嵌入到页面中。

### `outset`

外凸轮廓。看起来像凸出在页面外。

## 注意

- 该属性是 `outline` 速记属性的一部分
- 必须设置 `outline-width` 和 `outline-color` 才能看到轮廓
- 3D 效果（`groove`、`ridge`、`inset`、`outset`）使用边框颜色

## 示例

```css
/* 点线 */
.el1 {
  outline-style: dotted;
  outline-width: 2px;
  outline-color: blue;
}

/* 虚线 */
.el2 {
  outline-style: dashed;
  outline-width: 2px;
  outline-color: blue;
}

/* 实线 */
.el3 {
  outline-style: solid;
  outline-width: 2px;
  outline-color: blue;
}

/* 双线 */
.el4 {
  outline-style: double;
  outline-width: 4px;
  outline-color: blue;
}

/* 凹槽 */
.el5 {
  outline-style: groove;
  outline-width: 4px;
}

/* 脊线 */
.el6 {
  outline-style: ridge;
  outline-width: 4px;
}

/* 内嵌 */
.el7 {
  outline-style: inset;
  outline-width: 4px;
}

/* 外凸 */
.el8 {
  outline-style: outset;
  outline-width: 4px;
}
```

```html
<!-- 轮廓样式示例 -->
<div class="dotted">点线</div>
<div class="dashed">虚线</div>
<div class="solid">实线</div>
<div class="double">双线</div>
<div class="groove">凹槽</div>
<div class="ridge">脊线</div>
<div class="inset">内嵌</div>
<div class="outset">外凸</div>
```

## 使用场景

```css
/* 点线焦点 */
.dotted-focus {
  outline-style: dotted;
  outline-width: 2px;
  outline-color: blue;
}

/* 虚线焦点 */
.dashed-focus {
  outline-style: dashed;
  outline-width: 2px;
  outline-color: blue;
}

/* 实线焦点 */
.solid-focus {
  outline-style: solid;
  outline-width: 2px;
  outline-color: blue;
}

/* 双线效果 */
.double-effect {
  outline-style: double;
  outline-width: 4px;
  outline-color: #666;
}

/* 凹槽效果 */
.groove-effect {
  outline-style: groove;
  outline-width: 4px;
}

/* 脊线效果 */
.ridge-effect {
  outline-style: ridge;
  outline-width: 4px;
}

/* 内嵌效果 */
.inset-effect {
  outline-style: inset;
  outline-width: 4px;
}

/* 外凸效果 */
.outset-effect {
  outline-style: outset;
  outline-width: 4px;
}

/* 隐藏轮廓 */
.hidden-outline {
  outline-style: hidden;
}

/* 无轮廓 */
.no-outline {
  outline-style: none;
}

/* 悬停样式 */
.hover-style {
  outline-style: none;
  transition: outline-style 0.3s;
}

.hover-style:hover {
  outline-style: solid;
  outline-width: 2px;
  outline-color: blue;
}

/* 响应式样式 */
.responsive-style {
  outline-style: dotted;
  outline-width: 2px;
}

@media (min-width: 768px) {
  .responsive-style {
    outline-style: solid;
  }
}

/* 动画样式 */
.animated-style {
  outline-style: solid;
  outline-width: 2px;
  outline-color: blue;
  animation: styleChange 3s infinite;
}

@keyframes styleChange {
  0%, 100% { outline-style: solid; }
  25% { outline-style: dashed; }
  50% { outline-style: dotted; }
  75% { outline-style: double; }
}

/* 错误状态 */
.error-style {
  outline-style: solid;
  outline-width: 2px;
  outline-color: red;
}

/* 成功状态 */
.success-style {
  outline-style: solid;
  outline-width: 2px;
  outline-color: green;
}

/* 警告状态 */
.warning-style {
  outline-style: dashed;
  outline-width: 2px;
  outline-color: orange;
}
