# -webkit-mask-composite

该属性指定 WebKit 浏览器中多个遮罩图像的组合方式。

## 语法

```css
-webkit-mask-composite: <composite-style>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `source-over` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `source-over`
源图像覆盖在目标图像之上（默认）。

### `source-in`
仅显示源图像与目标图像重叠的部分。

### `source-out`
显示源图像中不与目标图像重叠的部分。

### `source-atop`
仅在目标图像之上显示源图像。

### `destination-over`
目标图像覆盖在源图像之上。

### `destination-in`
仅显示目标图像与源图像重叠的部分。

### `destination-out`
显示目标图像中不与源图像重叠的部分。

### `destination-atop`
仅在源图像之上显示目标图像。

### `xor`
异或组合，显示不重叠的部分。

### `lighter`
颜色叠加，重叠部分颜色相加。

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 用于控制多个遮罩图像如何组合
- 现代开发中建议使用标准的 `mask-composite` 属性

## 示例

```css
/* 使用多个遮罩图像 */
.element {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-composite: source-in;
}
```

## 使用场景

```css
/* 场景 1：遮罩交集效果 */
.intersection-mask {
  -webkit-mask-image: url("shape1.png"), url("shape2.png");
  -webkit-mask-composite: source-in;
}

/* 场景 2：遮罩并集效果 */
.union-mask {
  -webkit-mask-image: url("shape1.png"), url("shape2.png");
  -webkit-mask-composite: lighter;
}

/* 场景 3：遮罩差集效果 */
.difference-mask {
  -webkit-mask-image: url("base.png"), url("cutout.png");
  -webkit-mask-composite: destination-out;
}

/* 场景 4：复杂遮罩组合 */
.complex-mask {
  -webkit-mask-image: 
    url("layer1.png"),
    url("layer2.png"),
    url("layer3.png");
  -webkit-mask-composite: source-over;
}