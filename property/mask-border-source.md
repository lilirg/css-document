# mask-border-source

该属性指定用于遮罩边框的图像源。

## 语法

```css
mask-border-source: none | <image>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `none`

不使用图像作为遮罩边框源。

### `<image>`

指定图像源，可以是：
- `url()` - 图像文件路径
- `linear-gradient()` - 线性渐变
- `radial-gradient()` - 径向渐变
- `conic-gradient()` - 圆锥渐变
- SVG 函数

## 注意

- 该属性是 `mask-border` 速记属性的一部分
- 图像将被切割为边框的四个部分
- 支持 CSS 渐变作为图像源

## 示例

```css
/* 图像源 */
.el1 {
  mask-border-source: url("border.png");
}

/* 线性渐变 */
.el2 {
  mask-border-source: linear-gradient(to right, transparent, black);
}

/* 径向渐变 */
.el3 {
  mask-border-source: radial-gradient(circle, transparent, black);
}

/* 无源 */
.el4 {
  mask-border-source: none;
}
```

```html
<!-- 遮罩边框源示例 -->
<div class="image-source">
  <p>图像源遮罩边框</p>
</div>

<div class="gradient-source">
  <p>渐变源遮罩边框</p>
</div>
```

## 使用场景

```css
/* PNG 图像源 */
.png-source {
  mask-border-source: url("border.png");
}

/* SVG 图像源 */
.svg-source {
  mask-border-source: url("border.svg");
}

/* 线性渐变源 */
.linear-source {
  mask-border-source: linear-gradient(to right, transparent, black, transparent);
}

/* 径向渐变源 */
.radial-source {
  mask-border-source: radial-gradient(circle, transparent 20%, black 80%);
}

/* 圆锥渐变源 */
.conic-source {
  mask-border-source: conic-gradient(from 0deg, transparent, black, transparent);
}

/* 重复渐变源 */
.repeating-source {
  mask-border-source: repeating-linear-gradient(
    to right,
    transparent,
    transparent 10px,
    black 10px,
    black 20px
  );
}

/* 多渐变源 */
.multi-gradient-source {
  mask-border-source: linear-gradient(
    to right,
    transparent 0%,
    black 25%,
    transparent 50%,
    black 75%,
    transparent 100%
  );
}

/* 响应式源 */
.responsive-source {
  mask-border-source: url("border-mobile.png");
}

@media (min-width: 768px) {
  .responsive-source {
    mask-border-source: url("border-desktop.png");
  }
}

/* 动画源 */
.animated-source {
  mask-border-source: url("border1.png");
  animation: sourceChange 3s infinite;
}

@keyframes sourceChange {
  0%, 100% { mask-border-source: url("border1.png"); }
  50% { mask-border-source: url("border2.png"); }
}

/* 渐变动画源 */
.gradient-animated-source {
  mask-border-source: linear-gradient(to right, transparent, black);
  animation: gradientChange 3s infinite;
}

@keyframes gradientChange {
  0%, 100% { 
    mask-border-source: linear-gradient(to right, transparent, black); 
  }
  50% { 
    mask-border-source: linear-gradient(to left, transparent, black); 
  }
}
