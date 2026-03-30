# mask-type

该属性设置 SVG 遮罩元素的类型。

## 语法

```css
mask-type: luminance | alpha
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `luminance`    |
| 适用 HTML 元素 | SVG `<mask>` 元素 |
| 动画         | 是             |

## 值

### `luminance`

使用图像的亮度值作为遮罩。白色部分显示元素，黑色部分隐藏元素。这是默认值。

### `alpha`

使用图像的 Alpha 通道作为遮罩。不透明部分显示元素，透明部分隐藏元素。

## 注意

- 该属性仅适用于 SVG 的 `<mask>` 元素
- 对于 CSS 遮罩，使用 `mask-mode` 属性
- `luminance` 适合灰度图像
- `alpha` 适合带透明度的图像

## 示例

```css
/* 使用亮度模式 */
.el1 {
  mask-type: luminance;
}

/* 使用 Alpha 模式 */
.el2 {
  mask-type: alpha;
}
```

```html
<!-- SVG 遮罩示例 -->
<svg width="200" height="200">
  <defs>
    <!-- 亮度模式遮罩 -->
    <mask id="luminanceMask" mask-type="luminance">
      <rect width="100%" height="100%" fill="url(#gradient)"/>
    </mask>
    
    <!-- Alpha 模式遮罩 -->
    <mask id="alphaMask" mask-type="alpha">
      <rect width="100%" height="100%" fill="url(#gradient)"/>
    </mask>
  </defs>
  
  <rect width="200" height="200" fill="blue" mask="url(#luminanceMask)"/>
</svg>
```

## 使用场景

```css
/* SVG 亮度遮罩 */
.luminance-mask {
  mask-type: luminance;
}

/* SVG Alpha 遮罩 */
.alpha-mask {
  mask-type: alpha;
}

/* 渐变遮罩 - 亮度 */
.gradient-luminance {
  mask-type: luminance;
}

/* 渐变遮罩 - Alpha */
.gradient-alpha {
  mask-type: alpha;
}

/* 图像遮罩 - 亮度 */
.image-luminance {
  mask-type: luminance;
}

/* 图像遮罩 - Alpha */
.image-alpha {
  mask-type: alpha;
}

/* 动态模式（配合动画） */
.animated-type {
  mask-type: luminance;
  animation: typeChange 3s infinite;
}

@keyframes typeChange {
  0%, 100% { mask-type: luminance; }
  50% { mask-type: alpha; }
}

/* 响应式遮罩类型 */
.responsive-type {
  mask-type: luminance;
}

@media (min-width: 768px) {
  .responsive-type {
    mask-type: alpha;
  }
}
