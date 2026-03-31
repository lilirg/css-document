# mask-clip

`mask-clip` 属性定义遮罩图像裁剪的区域。

## 语法

```css
mask-clip: <clip-box>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `border-box` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `border-box` | 遮罩应用于边框盒 |
| `padding-box` | 遮罩应用于内边距盒 |
| `content-box` | 遮罩应用于内容盒 |
| `fill-box` | 遮罩应用于 SVG 填充边界盒 |
| `stroke-box` | 遮罩应用于 SVG 描边边界盒 |
| `view-box` | 遮罩应用于 SVG 视图边界盒 |
| `no-clip` | 遮罩不被裁剪，超出部分可见 |

## 注意

- 可以指定多个值，用逗号分隔，对应多个遮罩层
- 与 `mask-origin` 配合使用定义遮罩的参考框
- 在 SVG 中有特殊的边界盒选项

## 示例

```css
/* 遮罩裁剪到内容区域 */
.element {
  mask-clip: content-box;
  mask-image: url('mask.svg');
}

/* 多个遮罩层，不同的裁剪区域 */
.element {
  mask-clip: padding-box, content-box;
  mask-image: url('mask1.svg), url('mask2.svg');
}
```

## 使用场景

```css
/* 文字遮罩，裁剪到文字内容 */
.masked-text {
  mask-clip: content-box;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
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

- [`mask-origin`](mask-origin.md) - 遮罩原点
- [`mask-image`](mask-image.md) - 遮罩图像
- [`mask`](mask.md) - 遮罩速记

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-clip)
