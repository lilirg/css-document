# mask-type

`mask-type` 属性定义 SVG `<mask>` 元素是作为线性遮罩还是 Alpha 遮罩。

## 语法

```css
mask-type: <mask-type>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `luminance` |
| 适用 HTML 元素 | SVG `<mask>` 元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `luminance` | 使用图像的亮度值作为遮罩 |
| `alpha` | 使用图像的 Alpha 通道作为遮罩 |

## 注意

- 仅适用于 SVG 的 `<mask>` 元素
- 控制如何解释遮罩图像的值
- `luminance` 是默认值

## 示例

```css
/* 使用亮度作为遮罩 */
mask {
  mask-type: luminance;
}

/* 使用 Alpha 通道作为遮罩 */
mask {
  mask-type: alpha;
}
```

## 使用场景

```xml
<!-- SVG 中使用 -->
<svg>
  <mask id="myMask" mask-type="alpha">
    <rect x="0" y="0" width="100" height="100" fill="white"/>
  </mask>
  <rect x="0" y="0" width="100" height="100" fill="blue" mask="url(#myMask)"/>
</svg>
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 支持 |
| Edge | 支持 |

## 相关属性

- [`mask`](mask.md) - 遮罩速记
- [`mask-mode`](mask-mode.md) - 遮罩模式

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-type)
