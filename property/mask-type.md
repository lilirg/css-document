# mask-type

该属性用于指定 SVG 遮罩元素的渲染类型，决定如何使用 SVG 内容作为遮罩。

## 语法

```css
mask-type: luminance | alpha
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `luminance` |
| 适用 HTML 元素 | `<mask>` SVG 元素 |
| 动画 | 否 |

## 值

### luminance
使用亮度值作为遮罩（默认值）：
- 白色（亮度 100%）完全显示内容
- 黑色（亮度 0%）完全隐藏内容
- 灰色根据亮度值部分显示
- 计算 RGB 值的加权平均

### alpha
使用 Alpha 通道作为遮罩：
- 不透明区域完全显示内容
- 透明区域完全隐藏内容
- 半透明区域部分显示内容
- 直接使用 Alpha 通道值

## 注意
- 该属性仅适用于 SVG 的 `<mask>` 元素
- 在 CSS 中使用时，通常通过 `mask-mode` 属性设置
- `luminance` 是默认值，符合早期规范
- `alpha` 更符合现代使用习惯

## 示例

```css
/* 使用亮度值（默认） */
mask {
  mask-type: luminance;
}

/* 使用 Alpha 通道 */
mask {
  mask-type: alpha;
}
```

```html
<!-- HTML 示例 - SVG 遮罩 -->
<svg>
  <defs>
    <mask id="myMask" mask-type="alpha">
      <rect x="0" y="0" width="100" height="100" fill="white"/>
    </mask>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="blue" mask="url(#myMask)"/>
</svg>
```

## 使用场景

```css
/* 1. 亮度遮罩（灰度图像） */
.luminance-mask {
  mask-type: luminance;
}

/* 2. Alpha 遮罩（透明图像） */
.alpha-mask {
  mask-type: alpha;
}

/* 3. SVG 内部设置 */
<mask id="luminanceMask" mask-type="luminance">
  <!-- 使用灰度值 -->
</mask>

<mask id="alphaMask" mask-type="alpha">
  <!-- 使用透明度 -->
</mask>

/* 4. 渐变遮罩 */
.gradient-mask {
  mask-type: luminance;
}

/* 5. 图案遮罩 */
.pattern-mask {
  mask-type: alpha;
}

/* 6. 文本遮罩 */
.text-mask {
  mask-type: alpha;
}

/* 7. 视频帧遮罩 */
.video-mask {
  mask-type: alpha;
}

/* 8. 混合遮罩 */
.composite-mask {
  mask-type: luminance;
}
