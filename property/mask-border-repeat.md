# mask-border-repeat

该属性设置遮罩边框图像的重复方式。

## 语法

```css
mask-border-repeat: stretch | repeat | round | space
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `stretch`      |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `stretch`

拉伸图像以填充边框区域。这是默认值。

### `repeat`

重复图像，裁剪超出部分。

### `round`

重复图像，调整大小以适应边框。

### `space`

重复图像，均匀分布空白。

## 注意

- 该属性是 `mask-border` 速记属性的一部分
- 可以指定 1-2 个值（水平和垂直方向）
- 类似于 `border-image-repeat`

## 示例

```css
/* 拉伸 */
.el1 {
  mask-border: url("border.png") 30 / 10px / 0 stretch;
}

/* 重复 */
.el2 {
  mask-border: url("border.png") 30 / 10px / 0 repeat;
}

/* 圆整 */
.el3 {
  mask-border: url("border.png") 30 / 10px / 0 round;
}

/* 空间 */
.el4 {
  mask-border: url("border.png") 30 / 10px / 0 space;
}

/* 不同方向 */
.el5 {
  mask-border: url("border.png") 30 / 10px / 0 round stretch;
}
```

```html
<!-- 遮罩边框重复示例 -->
<div class="stretch-border">
  <p>拉伸边框</p>
</div>

<div class="repeat-border">
  <p>重复边框</p>
</div>

<div class="round-border">
  <p>圆整边框</p>
</div>

<div class="space-border">
  <p>空间边框</p>
</div>
```

## 使用场景

```css
/* 拉伸边框 */
.stretch-border {
  mask-border: url("border.png") 30 / 10px / 0 stretch;
}

/* 重复边框 */
.repeat-border {
  mask-border: url("border.png") 30 / 10px / 0 repeat;
}

/* 圆整边框 */
.round-border {
  mask-border: url("border.png") 30 / 10px / 0 round;
}

/* 空间边框 */
.space-border {
  mask-border: url("border.png") 30 / 10px / 0 space;
}

/* 水平重复，垂直拉伸 */
.horizontal-repeat {
  mask-border: url("border.png") 30 / 10px / 0 repeat stretch;
}

/* 水平拉伸，垂直重复 */
.vertical-repeat {
  mask-border: url("border.png") 30 / 10px / 0 stretch repeat;
}

/* 双向圆整 */
.double-round {
  mask-border: url("border.png") 30 / 10px / 0 round round;
}

/* 双向空间 */
.double-space {
  mask-border: url("border.png") 30 / 10px / 0 space space;
}

/* 图案边框 */
.pattern-border {
  mask-border: url("pattern.png") 30 / 10px / 0 round;
}

/* 渐变边框 */
.gradient-border {
  mask-border: linear-gradient(to right, transparent, black) 30 / 10px / 0 stretch;
}

/* 响应式重复 */
.responsive-repeat {
  mask-border: url("border.png") 30 / 10px / 0 stretch;
}

@media (min-width: 768px) {
  .responsive-repeat {
    mask-border: url("border.png") 30 / 15px / 0 round;
  }
}
