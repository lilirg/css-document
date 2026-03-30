# mask-origin

该属性设置遮罩图像的定位区域。

## 语法

```css
mask-origin: <box>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `border-box`   |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 定位区域

| 值 | 说明 |
|------|------|
| `border-box` | 从边框区域开始定位（默认） |
| `padding-box` | 从内边距区域开始定位 |
| `content-box` | 从内容区域开始定位 |
| `fill-box` | 相对于 SVG 填充边界框 |
| `stroke-box` | 相对于 SVG 描边边界框 |
| `view-box` | 相对于 SVG 视口 |

## 注意

- 该属性与 `mask-position` 配合使用
- 对于非 SVG 元素，通常使用 `border-box`、`padding-box`、`content-box`
- 对于 SVG 元素，可以使用 `fill-box`、`stroke-box`、`view-box`

## 示例

```css
/* 从边框区域开始 */
.el1 {
  mask-image: url('mask.png');
  mask-origin: border-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 从内边距区域开始 */
.el2 {
  mask-image: url('mask.png');
  mask-origin: padding-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 从内容区域开始 */
.el3 {
  mask-image: url('mask.png');
  mask-origin: content-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 使用 position 配合 */
.el4 {
  mask-image: url('mask.png');
  mask-origin: padding-box;
  mask-position: 0 0;
  padding: 20px;
}

/* 居中定位 */
.el5 {
  mask-image: url('mask.png');
  mask-origin: content-box;
  mask-position: center;
  padding: 20px;
}
```

```html
<div class="el1">border-box</div>
<div class="el2">padding-box</div>
<div class="el3">content-box</div>
<div class="el4">padding-box + position</div>
<div class="el5">content-box + center</div>
```

## 使用场景

```css
/* 边框内遮罩 */
.border-mask {
  mask-image: url('images/mask.png');
  mask-origin: border-box;
  mask-size: cover;
  padding: 20px;
  border: 10px solid #333;
}

/* 内边距内遮罩 */
.padding-mask {
  mask-image: url('images/mask.png');
  mask-origin: padding-box;
  mask-size: cover;
  padding: 20px;
  border: 10px solid #333;
}

/* 内容区遮罩 */
.content-mask {
  mask-image: url('images/mask.png');
  mask-origin: content-box;
  mask-size: cover;
  padding: 20px;
  border: 10px solid #333;
}

/* 卡片遮罩 */
.card-mask {
  mask-image: url('images/card-mask.png');
  mask-origin: padding-box;
  mask-size: cover;
  padding: 20px;
  border-radius: 12px;
}

/* 渐变遮罩 */
.gradient-mask {
  mask-image: linear-gradient(to right, black 50%, transparent 100%);
  mask-origin: content-box;
  padding: 20px;
}

/* 图片渐隐 */
.image-fade {
  mask-image: url('images/fade.png');
  mask-origin: padding-box;
  mask-size: 100% 100%;
  padding: 20px;
}

/* 边框渐隐 */
.border-fade {
  mask-image: linear-gradient(black, black),
              radial-gradient(ellipse at top, transparent, black);
  mask-origin: border-box;
  padding: 20px;
}

/* 响应式遮罩 */
.responsive-mask {
  mask-image: url('images/mask.png');
  mask-origin: content-box;
  mask-size: cover;
  padding: 20px;
}

@media (min-width: 768px) {
  .responsive-mask {
    mask-origin: padding-box;
  }
}

/* 动态原点（配合动画） */
.animated-origin {
  mask-image: url('images/mask.png');
  mask-origin: border-box;
  padding: 20px;
  animation: originChange 3s infinite;
}

@keyframes originChange {
  0%, 100% { mask-origin: border-box; }
  50% { mask-origin: content-box; }
}
