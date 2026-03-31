# mask-position

`mask-position` 属性定义遮罩图像的初始位置。

## 语法

```css
mask-position: <position>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0% 0%` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<length>` | 使用长度值定位 |
| `<percentage>` | 使用百分比定位 |
| `top` | 顶部对齐 |
| `bottom` | 底部对齐 |
| `left` | 左侧对齐 |
| `right` | 右侧对齐 |
| `center` | 居中对齐 |

## 注意

- 可以指定一个或两个值
- 单个值时，第二个值默认为 `center`
- 可以指定多个值，对应多个遮罩层

## 示例

```css
/* 遮罩居中 */
.element {
  mask-position: center;
  mask-image: url('mask.svg);
}

/* 遮罩在左上角 */
.element {
  mask-position: 0% 0%;
  mask-image: url('mask.svg);
}

/* 多个遮罩层，不同的位置 */
.element {
  mask-position: left, right;
  mask-image: url('mask1.svg), url('mask2.svg);
}
```

## 使用场景

```css
/* 背景式遮罩效果 */
.background-mask {
  mask-position: center center;
  mask-size: cover;
  mask-image: url('pattern.svg);
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
- [`mask-size`](mask-size.md) - 遮罩尺寸
- [`mask-repeat`](mask-repeat.md) - 遮罩重复
- [`mask`](mask.md) - 遮罩速记

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-position)
