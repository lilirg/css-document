# outline-width

该属性设置轮廓的宽度。

## 语法

```css
outline-width: <length> | thin | medium | thick
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `medium`       |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `<length>`

使用长度值指定宽度。可以是 `px`、`em`、`rem` 等单位。不能为负值。

### `thin`

细轮廓。具体宽度由浏览器决定。

### `medium`

中等宽度轮廓。默认值。

### `thick`

粗轮廓。具体宽度由浏览器决定。

## 注意

- 该属性是 `outline` 速记属性的一部分
- 必须设置 `outline-style` 才能看到轮廓
- 轮廓不占用空间，不影响布局
- 不能为负值

## 示例

```css
/* 细轮廓 */
.el1 {
  outline-style: solid;
  outline-width: thin;
  outline-color: blue;
}

/* 中等轮廓 */
.el2 {
  outline-style: solid;
  outline-width: medium;
  outline-color: blue;
}

/* 粗轮廓 */
.el3 {
  outline-style: solid;
  outline-width: thick;
  outline-color: blue;
}

/* 固定宽度 */
.el4 {
  outline-style: solid;
  outline-width: 2px;
  outline-color: blue;
}
```

```html
<!-- 轮廓宽度示例 -->
<div class="thin">细</div>
<div class="medium">中等</div>
<div class="thick">粗</div>
<div class="fixed">固定</div>
```

## 使用场景

```css
/* 细焦点 */
.thin-focus {
  outline-style: solid;
  outline-width: thin;
  outline-color: blue;
}

/* 中等焦点 */
.medium-focus {
  outline-style: solid;
  outline-width: medium;
  outline-color: blue;
}

/* 粗焦点 */
.thick-focus {
  outline-style: solid;
  outline-width: thick;
  outline-color: blue;
}

/* 1px 轮廓 */
.one-pixel {
  outline-style: solid;
  outline-width: 1px;
  outline-color: blue;
}

/* 2px 轮廓 */
.two-pixel {
  outline-style: solid;
  outline-width: 2px;
  outline-color: blue;
}

/* 3px 轮廓 */
.three-pixel {
  outline-style: solid;
  outline-width: 3px;
  outline-color: blue;
}

/* 4px 轮廓 */
.four-pixel {
  outline-style: solid;
  outline-width: 4px;
  outline-color: blue;
}

/* 悬停宽度 */
.hover-width {
  outline-style: solid;
  outline-width: 1px;
  outline-color: blue;
  transition: outline-width 0.3s;
}

.hover-width:hover {
  outline-width: 3px;
}

/* 响应式宽度 */
.responsive-width {
  outline-style: solid;
  outline-width: 1px;
  outline-color: blue;
}

@media (min-width: 768px) {
  .responsive-width {
    outline-width: 3px;
  }
}

/* 动画宽度 */
.animated-width {
  outline-style: solid;
  outline-width: 1px;
  outline-color: blue;
  animation: widthChange 3s infinite;
}

@keyframes widthChange {
  0%, 100% { outline-width: 1px; }
  50% { outline-width: 5px; }
}

/* 错误状态 */
.error-width {
  outline-style: solid;
  outline-width: 2px;
  outline-color: red;
}

/* 成功状态 */
.success-width {
  outline-style: solid;
  outline-width: 2px;
  outline-color: green;
}

/* 警告状态 */
.warning-width {
  outline-style: solid;
  outline-width: 2px;
  outline-color: orange;
}

/* 可访问性焦点 */
.accessible-focus {
  outline-style: solid;
  outline-width: 3px;
  outline-color: #ffcc00;
  outline-offset: 2px;
}

/* 卡片高亮 */
.card-highlight {
  outline-style: solid;
  outline-width: 2px;
  outline-color: #0066cc;
  outline-offset: 4px;
}

/* 按钮焦点 */
.button-focus {
  outline-style: solid;
  outline-width: 2px;
  outline-color: #0066cc;
  outline-offset: 3px;
}
