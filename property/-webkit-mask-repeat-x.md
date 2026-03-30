# -webkit-mask-repeat-x

该属性指定 WebKit 浏览器中遮罩图像在 X 轴方向的重复方式。

## 语法

```css
-webkit-mask-repeat-x: repeat | no-repeat | repeat-x | space | round
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `repeat` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `repeat`
在 X 轴方向重复图像（默认）。

### `no-repeat`
不在 X 轴方向重复图像。

### `repeat-x`
在 X 轴方向重复图像（与 `repeat` 相同）。

### `space`
在 X 轴方向均匀分布图像，不裁剪。

### `round`
在 X 轴方向重复图像，必要时调整大小以适应。

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 与 `mask-repeat-x` 类似，但带有 WebKit 前缀
- 通常与 `-webkit-mask-repeat-y` 配合使用

## 示例

```css
/* 不重复 */
.element {
  -webkit-mask-repeat-x: no-repeat;
}

/* 重复 */
.element {
  -webkit-mask-repeat-x: repeat;
}

/* 均匀分布 */
.element {
  -webkit-mask-repeat-x: space;
}
```

## 使用场景

```css
/* 场景 1：水平条纹遮罩 */
.horizontal-stripes {
  -webkit-mask-image: url("stripe.png");
  -webkit-mask-repeat-x: repeat;
  -webkit-mask-repeat-y: no-repeat;
}

/* 场景 2：单次显示遮罩 */
.single-mask {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: no-repeat;
  -webkit-mask-repeat-y: no-repeat;
}

/* 场景 3：均匀分布遮罩 */
.distributed-mask {
  -webkit-mask-image: url("pattern.png");
  -webkit-mask-repeat-x: space;
  -webkit-mask-repeat-y: space;
}

/* 场景 4：自适应重复遮罩 */
.adaptive-mask {
  -webkit-mask-image: url("border.png");
  -webkit-mask-repeat-x: round;
  -webkit-mask-repeat-y: no-repeat;
}