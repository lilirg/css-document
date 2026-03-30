# mask-border

该属性是遮罩边框的速记属性，用于设置元素边缘的遮罩效果。

## 语法

```css
mask-border: <mask-border-source> || <mask-border-slice> || <mask-border-width> || <mask-border-outset> || <mask-border-repeat> || <mask-border-mode>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 各属性的初始值 |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### 组成部分

| 属性 | 说明 |
| :--- | :--- |
| `mask-border-source` | 遮罩边框图像源 |
| `mask-border-slice` | 遮罩边框图像切片 |
| `mask-border-width` | 遮罩边框宽度 |
| `mask-border-outset` | 遮罩边框外扩 |
| `mask-border-repeat` | 遮罩边框重复方式 |
| `mask-border-mode` | 遮罩边框模式 |

## 注意

- 该属性是 `mask-border-*` 系列属性的速记
- 类似于 `border-image` 属性
- 主要用于 SVG 遮罩边框效果
- 浏览器支持有限

## 示例

```css
/* 基本遮罩边框 */
.el {
  mask-border: url("mask.svg") 30;
}

/* 完整语法 */
.el {
  mask-border: url("mask.svg") 30 30 30 30 / 10px 10px 10px 10px / 0 0 stretch stretch alpha;
}

/* 使用渐变 */
.el {
  mask-border: linear-gradient(to right, transparent, black) 30;
}
```

```html
<!-- 遮罩边框示例 -->
<div class="masked-border">
  <p>带有遮罩边框的内容</p>
</div>
```

## 使用场景

```css
/* 图像遮罩边框 */
.image-mask-border {
  mask-border: url("border-mask.png") 30;
}

/* 渐变遮罩边框 */
.gradient-mask-border {
  mask-border: linear-gradient(to right, transparent, black, transparent) 30;
}

/* 径向渐变 */
.radial-mask-border {
  mask-border: radial-gradient(circle, transparent 20%, black 80%) 30;
}

/* 四边不同切片 */
.custom-slice {
  mask-border: url("mask.svg") 20 30 20 30;
}

/* 自定义宽度 */
.custom-width {
  mask-border: url("mask.svg") 30 / 20px;
}

/* 外扩效果 */
.outset-effect {
  mask-border: url("mask.svg") 30 / 20px / 5px;
}

/* 重复方式 */
.repeat-mask {
  mask-border: url("mask.svg") 30 / 20px / 0 stretch;
}

/* Alpha 模式 */
.alpha-mode {
  mask-border: url("mask.svg") 30 alpha;
}

/* Luminance 模式 */
.luminance-mode {
  mask-border: url("mask.svg") 30 luminance;
}

/* 完整配置 */
.full-config {
  mask-border: url("mask.svg") 30 30 30 30 / 15px 15px 15px 15px / 0 0 round round alpha;
}

/* 响应式遮罩边框 */
.responsive-mask {
  mask-border: url("mask-mobile.svg") 30;
}

@media (min-width: 768px) {
  .responsive-mask {
    mask-border: url("mask-desktop.svg") 40;
  }
}

/* 动画遮罩边框 */
.animated-mask {
  mask-border: url("mask.svg") 30;
  animation: maskChange 3s infinite;
}

@keyframes maskChange {
  0%, 100% { mask-border: url("mask.svg") 30; }
  50% { mask-border: url("mask-alt.svg") 40; }
}
