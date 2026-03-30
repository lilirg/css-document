# mask-border-mode

该属性设置遮罩边框图像的计算方式。

## 语法

```css
mask-border-mode: luminance | alpha
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `luminance`    |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `luminance`

使用图像的亮度值作为遮罩。白色部分显示元素，黑色部分隐藏元素。这是默认值。

### `alpha`

使用图像的 Alpha 通道作为遮罩。不透明部分显示元素，透明部分隐藏元素。

## 注意

- 该属性是 `mask-border` 速记属性的一部分
- 仅影响遮罩边框图像的计算方式
- 与 `mask-type` 类似，但专门用于边框

## 示例

```css
/* 亮度模式 */
.el1 {
  mask-border-mode: luminance;
}

/* Alpha 模式 */
.el2 {
  mask-border-mode: alpha;
}

/* 配合 mask-border 使用 */
.el3 {
  mask-border: url("border.png") 30 luminance;
}
```

```html
<!-- 遮罩边框模式示例 -->
<div class="luminance-border">
  <p>亮度模式遮罩边框</p>
</div>

<div class="alpha-border">
  <p>Alpha 模式遮罩边框</p>
</div>
```

## 使用场景

```css
/* 灰度图像遮罩 */
.grayscale-border {
  mask-border: url("grayscale-border.png") 30;
  mask-border-mode: luminance;
}

/* PNG 透明图像遮罩 */
.png-border {
  mask-border: url("png-border.png") 30;
  mask-border-mode: alpha;
}

/* SVG 遮罩边框 */
.svg-border {
  mask-border: url("border.svg") 30;
  mask-border-mode: alpha;
}

/* 动态模式切换 */
.dynamic-mode {
  mask-border: url("border.png") 30;
  mask-border-mode: luminance;
  animation: modeChange 3s infinite;
}

@keyframes modeChange {
  0%, 100% { mask-border-mode: luminance; }
  50% { mask-border-mode: alpha; }
}

/* 响应式模式 */
.responsive-mode {
  mask-border: url("border.png") 30;
  mask-border-mode: luminance;
}

@media (min-width: 768px) {
  .responsive-mode {
    mask-border-mode: alpha;
  }
}

/* 渐变遮罩边框 */
.gradient-border {
  mask-border: linear-gradient(to right, transparent, black) 30;
  mask-border-mode: luminance;
}

/* 图像遮罩边框 */
.image-border {
  mask-border: url("pattern.png") 30;
  mask-border-mode: alpha;
}
