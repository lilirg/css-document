# mask-composite

该属性设置多个遮罩图像的复合方式。

## 语法

```css
mask-composite: add | subtract | intersect | exclude
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `add`          |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `add`

添加模式。将新遮罩添加到现有遮罩。这是默认值。

### `subtract`

减去模式。从现有遮罩中减去新遮罩。

### `intersect`

交集模式。仅保留两个遮罩的交集部分。

### `exclude`

排除模式。保留两个遮罩的非重叠部分。

## 注意

- 该属性用于组合多个遮罩图像
- 类似于 `composition` 操作
- 与 `mask-image` 配合使用

## 示例

```css
/* 添加模式 */
.el1 {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: add;
}

/* 减去模式 */
.el2 {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: subtract;
}

/* 交集模式 */
.el3 {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: intersect;
}

/* 排除模式 */
.el4 {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: exclude;
}
```

```html
<!-- 遮罩复合示例 -->
<div class="add-composite">
  <p>添加复合</p>
</div>

<div class="subtract-composite">
  <p>减去复合</p>
</div>

<div class="intersect-composite">
  <p>交集复合</p>
</div>

<div class="exclude-composite">
  <p>排除复合</p>
</div>
```

## 使用场景

```css
/* 添加复合 */
.add-composite {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: add;
}

/* 减去复合 */
.subtract-composite {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: subtract;
}

/* 交集复合 */
.intersect-composite {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: intersect;
}

/* 排除复合 */
.exclude-composite {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: exclude;
}

/* 多个遮罩复合 */
.multi-composite {
  mask-image: 
    url("mask1.png"),
    url("mask2.png"),
    url("mask3.png");
  mask-composite: add;
}

/* 渐变复合 */
.gradient-composite {
  mask-image: 
    linear-gradient(to right, transparent, black),
    radial-gradient(circle, transparent, black);
  mask-composite: intersect;
}

/* 形状复合 */
.shape-composite {
  mask-image: 
    url("circle.png"),
    url("square.png");
  mask-composite: exclude;
}

/* 文字遮罩复合 */
.text-composite {
  mask-image: 
    url("text-mask.png"),
    url("pattern.png");
  mask-composite: intersect;
}

/* 响应式复合 */
.responsive-composite {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: add;
}

@media (min-width: 768px) {
  .responsive-composite {
    mask-composite: intersect;
  }
}

/* 动画复合 */
.animated-composite {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-composite: add;
  animation: compositeChange 3s infinite;
}

@keyframes compositeChange {
  0%, 100% { mask-composite: add; }
  25% { mask-composite: subtract; }
  50% { mask-composite: intersect; }
  75% { mask-composite: exclude; }
}
