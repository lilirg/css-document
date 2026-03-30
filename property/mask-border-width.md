# mask-border-width

该属性设置遮罩边框图像的宽度。

## 语法

```css
mask-border-width: auto | <length> | <percentage> | <number>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `auto`

使用 `mask-border-slice` 的值作为宽度。

### `<length>`

使用长度值指定宽度。可以是 `px`、`em`、`rem` 等单位。

### `<percentage>`

使用百分比值，相对于元素尺寸。

### `<number>`

无单位数字，相对于 `mask-border-slice` 的倍数。

## 注意

- 该属性是 `mask-border` 速记属性的一部分
- 可以指定 1-4 个值（上、右、下、左）
- 类似于 `border-image-width`

## 示例

```css
/* 自动宽度 */
.el1 {
  mask-border: url("border.png") 30 auto;
}

/* 固定宽度 */
.el2 {
  mask-border: url("border.png") 30 / 10px;
}

/* 百分比宽度 */
.el3 {
  mask-border: url("border.png") 30 / 20%;
}

/* 四边不同宽度 */
.el4 {
  mask-border: url("border.png") 30 / 10px 20px 10px 20px;
}
```

```html
<!-- 遮罩边框宽度示例 -->
<div class="width-border">
  <p>带有宽度的遮罩边框</p>
</div>
```

## 使用场景

```css
/* 自动宽度 */
.auto-width {
  mask-border: url("border.png") 30 auto;
}

/* 固定宽度 */
.fixed-width {
  mask-border: url("border.png") 30 / 10px;
}

/* 粗宽度 */
.thick-width {
  mask-border: url("border.png") 30 / 30px;
}

/* 细宽度 */
.thin-width {
  mask-border: url("border.png") 30 / 5px;
}

/* 百分比宽度 */
.percentage-width {
  mask-border: url("border.png") 30 / 15%;
}

/* 四边不同宽度 */
.custom-width {
  mask-border: url("border.png") 30 / 10px 20px 10px 20px;
}

/* 上宽度 */
.top-width {
  mask-border: url("border.png") 30 / 20px 0 0 0;
}

/* 左右宽度 */
.side-width {
  mask-border: url("border.png") 30 / 0 15px 0 15px;
}

/* 数字倍数 */
.multiplier-width {
  mask-border: url("border.png") 30 / 1.5;
}

/* 响应式宽度 */
.responsive-width {
  mask-border: url("border.png") 30 / 10px;
}

@media (min-width: 768px) {
  .responsive-width {
    mask-border: url("border.png") 30 / 20px;
  }
}

/* 动画宽度 */
.animated-width {
  mask-border: url("border.png") 30 / 10px;
  animation: widthChange 3s infinite;
}

@keyframes widthChange {
  0%, 100% { mask-border-width: 10px; }
  50% { mask-border-width: 30px; }
}
