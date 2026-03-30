# mask-border-mode

该属性用于指定遮罩边框图像是使用 Alpha 通道还是亮度值作为遮罩源。

## 语法

```css
mask-border-mode: alpha | luminance
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `alpha` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### alpha
使用 Alpha 通道作为遮罩（默认值）：
- 不透明区域显示内容
- 透明区域隐藏内容
- 半透明区域部分显示

### luminance
使用亮度值作为遮罩：
- 白色（亮度 100%）显示内容
- 黑色（亮度 0%）隐藏内容
- 灰色根据亮度值部分显示

## 注意
- 该属性通常与 `mask-border-image-source` 配合使用
- 与 `mask-mode` 类似，但专门用于遮罩边框
- 默认值为 `alpha`，与 `mask-type` 的默认值不同
- 对于带透明度的 PNG 图像，使用 `alpha` 更合适
- 对于灰度图像，使用 `luminance` 更合适

## 示例

```css
/* 使用 Alpha 通道（默认） */
.box {
  mask-border-image-source: url('border.png');
  mask-border-mode: alpha;
}

/* 使用亮度值 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-mode: luminance;
}

/* 配合其他遮罩边框属性 */
.box {
  mask-border: url('border.png') 30 / 10px / 2 stretch alpha;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩边框内容</div>
```

## 使用场景

```css
/* 1. PNG 透明遮罩边框 */
.png-border {
  mask-border-image-source: url('border.png');
  mask-border-mode: alpha;
}

/* 2. 灰度图像遮罩边框 */
.grayscale-border {
  mask-border-image-source: url('border.png');
  mask-border-mode: luminance;
}

/* 3. SVG 遮罩边框 */
.svg-border {
  mask-border-image-source: url('border.svg');
  mask-border-mode: alpha;
}

/* 4. 渐变遮罩边框 */
.gradient-border {
  mask-border-image-source: linear-gradient(to right, black, white);
  mask-border-mode: luminance;
}

/* 5. 带透明度的边框 */
.transparent-border {
  mask-border-image-source: url('border.png');
  mask-border-mode: alpha;
  mask-border-width: 10px;
}

/* 6. 黑白边框 */
.bw-border {
  mask-border-image-source: url('border.png');
  mask-border-mode: luminance;
  mask-border-width: 10px;
}

/* 7. 响应式遮罩边框 */
.responsive-border {
  mask-border-image-source: url('border.png');
  mask-border-mode: alpha;
}
@media (max-width: 768px) {
  .responsive-border {
    mask-border-mode: luminance;
  }
}

/* 8. 多模式边框 */
.multi-mode-border {
  mask-border: url('border.png') 30 / 10px / 2 stretch alpha;
}
