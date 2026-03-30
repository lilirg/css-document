# mask-border-slice

该属性定义如何切割遮罩边框图像。

## 语法

```css
mask-border-slice: <number> | <percentage> | fill
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `<number>`

无单位数字，表示图像尺寸的百分比。

### `<percentage>`

百分比值，指定切割区域的大小。

### `fill`

保留图像中心部分作为填充。

## 注意

- 该属性是 `mask-border` 速记属性的一部分
- 可以指定 1-4 个值（上、右、下、左）
- 类似于 `border-image-slice`

## 示例

```css
/* 基本切割 */
.el1 {
  mask-border: url("border.png") 30;
}

/* 百分比切割 */
.el2 {
  mask-border: url("border.png") 30%;
}

/* 四边不同切割 */
.el3 {
  mask-border: url("border.png") 10 20 10 20;
}

/* 保留中心 */
.el4 {
  mask-border: url("border.png") 30 fill;
}
```

```html
<!-- 遮罩边框切割示例 -->
<div class="slice-border">
  <p>带有切割的遮罩边框</p>
</div>
```

## 使用场景

```css
/* 基本切割 */
.basic-slice {
  mask-border: url("border.png") 30;
}

/* 百分比切割 */
.percentage-slice {
  mask-border: url("border.png") 25%;
}

/* 四边相同切割 */
.uniform-slice {
  mask-border: url("border.png") 20;
}

/* 四边不同切割 */
.custom-slice {
  mask-border: url("border.png") 10 20 10 20;
}

/* 上切割 */
.top-slice {
  mask-border: url("border.png") 30 0 0 0;
}

/* 左右切割 */
.side-slice {
  mask-border: url("border.png") 0 20 0 20;
}

/* 保留中心填充 */
.fill-slice {
  mask-border: url("border.png") 30 fill;
}

/* 不填充中心 */
.no-fill-slice {
  mask-border: url("border.png") 30;
}

/* 响应式切割 */
.responsive-slice {
  mask-border: url("border.png") 20;
}

@media (min-width: 768px) {
  .responsive-slice {
    mask-border: url("border.png") 30;
  }
}

/* 动画切割 */
.animated-slice {
  mask-border: url("border.png") 20;
  animation: sliceChange 3s infinite;
}

@keyframes sliceChange {
  0%, 100% { mask-border-slice: 20; }
  50% { mask-border-slice: 40; }
}
