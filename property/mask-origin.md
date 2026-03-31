# mask-origin

`mask-origin` 属性定义遮罩图像的定位原点。

## 语法

```css
mask-origin: <box>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `border-box` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `border-box` | 相对于边框盒定位 |
| `padding-box` | 相对于内边距盒定位 |
| `content-box` | 相对于内容盒定位 |
| `fill-box` | 相对于 SVG 填充边界盒 |
| `stroke-box` | 相对于 SVG 描边边界盒 |
| `view-box` | 相对于 SVG 视图边界盒 |

## 注意

- 与 `mask-clip` 配合使用定义遮罩的参考框
- 可以指定多个值，对应多个遮罩层
- 在 SVG 中有特殊的边界盒选项

## 示例

```css
/* 遮罩相对于内边距定位 */
.element {
  mask-origin: padding-box;
  mask-image: url('mask.svg);
}

/* 多个遮罩层，不同的原点 */
.element {
  mask-origin: content-box, padding-box;
  mask-image: url('mask1.svg), url('mask2.svg);
}
```

## 使用场景

```css
/* 文字遮罩，相对于内容定位 */
.masked-text {
  mask-origin: content-box;
  mask-image: linear-gradient(to right, black, transparent);
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

- [`mask-clip`](mask-clip.md) - 遮罩裁剪
- [`mask-image`](mask-image.md) - 遮罩图像
- [`mask`](mask.md) - 遮罩速记

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-origin)
