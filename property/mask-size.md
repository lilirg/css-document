# mask-size

`mask-size` 属性定义遮罩图像的尺寸。

## 语法

```css
mask-size: <size>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<length>` | 使用长度值指定尺寸 |
| `<percentage>` | 使用百分比指定尺寸 |
| `auto` | 保持图像原始尺寸 |
| `cover` | 缩放以覆盖整个区域 |
| `contain` | 缩放以适应整个区域 |

## 注意

- 可以指定一个或两个值
- 单个值时，第二个值默认为 `auto`
- 可以指定多个值，对应多个遮罩层

## 示例

```css
/* 遮罩覆盖整个元素 */
.element {
  mask-size: cover;
  mask-image: url('mask.svg);
}

/* 指定具体尺寸 */
.element {
  mask-size: 100px 50px;
  mask-image: url('mask.svg);
}

/* 多个遮罩层，不同的尺寸 */
.element {
  mask-size: cover, contain;
  mask-image: url('mask1.svg), url('mask2.svg);
}
```

## 使用场景

```css
/* 背景式遮罩效果 */
.background-mask {
  mask-size: cover;
  mask-position: center;
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
- [`mask-position`](mask-position.md) - 遮罩位置
- [`mask-repeat`](mask-repeat.md) - 遮罩重复
- [`mask`](mask.md) - 遮罩速记

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-size)
