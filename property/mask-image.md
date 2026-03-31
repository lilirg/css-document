# mask-image

`mask-image` 属性定义应用于元素的遮罩图像。

## 语法

```css
mask-image: <mask-reference>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 无遮罩 |
| `url()` | 遮罩图像 URL |
| `<gradient>` | 渐变作为遮罩 |
| `<mask-source>` | 其他遮罩源 |

## 注意

- 可以指定多个遮罩层，用逗号分隔
- 遮罩图像中的不透明区域显示元素内容，透明区域隐藏
- 支持 SVG、渐变等作为遮罩源

## 示例

```css
/* 使用图像作为遮罩 */
.element {
  mask-image: url('mask.svg);
}

/* 使用渐变作为遮罩 */
.element {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

/* 多个遮罩层 */
.element {
  mask-image: 
    url('mask1.svg),
    url('mask2.svg);
}
```

## 使用场景

```css
/* 文字渐隐效果 */
.fade-text {
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

/* 圆形遮罩 */
.circle-element {
  mask-image: radial-gradient(circle, black 50%, transparent 51%);
  -webkit-mask-image: radial-gradient(circle, black 50%, transparent 51%);
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

- [`mask`](mask.md) - 遮罩速记
- [`mask-position`](mask-position.md) - 遮罩位置
- [`mask-size`](mask-size.md) - 遮罩尺寸
- [`mask-repeat`](mask-repeat.md) - 遮罩重复
- [`mask-clip`](mask-clip.md) - 遮罩裁剪
- [`mask-origin`](mask-origin.md) - 遮罩原点

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-image)
