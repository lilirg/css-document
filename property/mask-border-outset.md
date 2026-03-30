# mask-border-outset

该属性设置遮罩边框图像向外扩展的距离。

## 语法

```css
mask-border-outset: <length> | <number>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `<length>`

使用长度值指定外扩距离。可以是 `px`、`em`、`rem` 等单位。

### `<number>`

使用无单位数字，相对于 `mask-border-width` 的倍数。

## 注意

- 该属性是 `mask-border` 速记属性的一部分
- 正值向外扩展，负值向内收缩
- 可以指定 1-4 个值（类似 `border-outset`）

## 示例

```css
/* 基本外扩 */
.el1 {
  mask-border: url("border.png") 30 / 10px / 5px;
}

/* 使用数字 */
.el2 {
  mask-border: url("border.png") 30 / 10px / 0.5;
}

/* 四边不同外扩 */
.el3 {
  mask-border: url("border.png") 30 / 10px / 5px 10px 5px 10px;
}
```

```html
<!-- 遮罩边框外扩示例 -->
<div class="outset-border">
  <p>带有外扩的遮罩边框</p>
</div>
```

## 使用场景

```css
/* 基本外扩 */
.basic-outset {
  mask-border: url("border.png") 30 / 10px / 5px;
}

/* 无外扩 */
.no-outset {
  mask-border: url("border.png") 30 / 10px / 0;
}

/* 大外扩 */
.large-outset {
  mask-border: url("border.png") 30 / 10px / 20px;
}

/* 四边不同外扩 */
.custom-outset {
  mask-border: url("border.png") 30 / 10px / 5px 10px 5px 10px;
}

/* 上外扩 */
.top-outset {
  mask-border: url("border.png") 30 / 10px / 10px 0 0 0;
}

/* 左右外扩 */
.side-outset {
  mask-border: url("border.png") 30 / 10px / 0 15px 0 15px;
}

/* 数字倍数 */
.multiplier-outset {
  mask-border: url("border.png") 30 / 10px / 1;
}

/* 响应式外扩 */
.responsive-outset {
  mask-border: url("border.png") 30 / 10px / 5px;
}

@media (min-width: 768px) {
  .responsive-outset {
    mask-border: url("border.png") 30 / 15px / 10px;
  }
}

/* 动画外扩 */
.animated-outset {
  mask-border: url("border.png") 30 / 10px / 5px;
  animation: outsetChange 3s infinite;
}

@keyframes outsetChange {
  0%, 100% { mask-border-outset: 5px; }
  50% { mask-border-outset: 15px; }
}
