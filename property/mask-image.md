# mask-image

该属性用于设置元素的遮罩层图像。

## 语法

```css
mask-image: <mask-reference>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### none
无遮罩图像。

### <image>
遮罩图像：
- `url('image.png')` - 图像 URL
- `linear-gradient(...)` - 线性渐变
- `radial-gradient(...)` - 径向渐变
- `conic-gradient(...)` - 锥形渐变
- `<image-list>` - 多个图像

### mask-source-type
图像源类型（可选）：
- `alpha` - 使用 Alpha 通道
- `luminance` - 使用亮度值

## 注意
- 遮罩图像可以是 SVG、PNG 或 CSS 渐变
- 图像的 Alpha 通道或亮度值决定遮罩效果
- 白色/不透明区域显示内容，黑色/透明区域隐藏内容
- 可以设置多个遮罩图像，从下到上叠加
- 可以使用 `mask-mode` 指定使用 alpha 还是亮度

## 示例

```css
/* 使用图像 */
.box {
  mask-image: url('mask.png');
}

/* 使用线性渐变 */
.box {
  mask-image: linear-gradient(to bottom, black, transparent);
}

/* 使用径向渐变 */
.box {
  mask-image: radial-gradient(circle, black, transparent);
}

/* 使用多个遮罩 */
.box {
  mask-image: 
    url('mask1.png'),
    url('mask2.png');
}

/* 使用 Alpha 通道 */
.box {
  mask-image: url('mask.png');
  mask-mode: alpha;
}

/* 使用亮度值 */
.box {
  mask-image: url('mask.png');
  mask-mode: luminance;
}

/* 渐变遮罩 - 从上到下渐隐 */
.fade-top {
  mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
}

/* 渐变遮罩 - 从中心向外渐隐 */
.fade-center {
  mask-image: radial-gradient(circle, black 0%, transparent 100%);
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
<div class="fade-top">顶部渐隐</div>
<div class="fade-center">中心渐隐</div>
```

## 使用场景

```css
/* 1. 图片边缘渐隐 */
.image-fade {
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

/* 2. 圆形遮罩 */
.circle-mask {
  mask-image: radial-gradient(circle, black 70%, transparent 71%);
}

/* 3. 水平渐隐 */
.horizontal-fade {
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

/* 4. 四边渐隐 */
.edge-fade {
  mask-image: radial-gradient(
    circle at center,
    black 0%,
    black 70%,
    transparent 100%
  );
}

/* 5. 文字形状遮罩 */
.text-shape {
  mask-image: url('text-shape.svg');
}

/* 6. 多图层遮罩 */
.multi-layer {
  mask-image: 
    url('pattern.png'),
    url('gradient.png');
  mask-mode: luminance;
}

/* 7. 锥形渐变遮罩 */
.conic-mask {
  mask-image: conic-gradient(from 0deg, black, transparent);
}

/* 8. 视频遮罩 */
.video-mask {
  mask-image: url('video-mask.png');
  mask-mode: alpha;
}
