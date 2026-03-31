# mask-mode

`mask-mode` 属性定义遮罩图像如何解释为遮罩值。

## 语法

```css
mask-mode: <masking-mode>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `match-source` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `alpha` | 使用图像的 alpha 通道 |
| `luminance` | 使用图像的亮度值 |
| `match-source` | 根据源自动匹配 |

## 注意

- 控制如何从遮罩图像提取遮罩值
- `alpha` 模式使用图像的透明度通道
- `luminance` 模式使用图像的亮度值作为遮罩

## 示例

```css
/* 使用 alpha 通道作为遮罩 */
.element {
  mask-image: url('mask.svg);
  mask-mode: alpha;
}

/* 使用亮度作为遮罩 */
.element {
  mask-image: url('mask.svg);
  mask-mode: luminance;
}
```

## 使用场景

```css
/* 灰度图像作为遮罩，使用亮度 */
.grayscale-mask {
  mask-image: url('grayscale-image.png);
  mask-mode: luminance;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持（需 -webkit- 前缀） |
| Firefox | 支持 |
| Safari | 支持（需 -webkit- 前缀） |
| Edge | 支持 |

## 相关属性

- [`mask-image`](mask-image.md) - 遮罩图像
- [`mask`](mask.md) - 遮罩速记
- [`mask-border-mode`](mask-border-mode.md) - 遮罩边框模式

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-mode)
