# -webkit-mask-position-x

该属性指定 WebKit 浏览器中遮罩图像在 X 轴方向的位置。

## 语法

```css
-webkit-mask-position-x: <position>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0%` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<length>`
使用长度值指定位置（如 `10px`、`-5px`）。

### `<percentage>`
使用百分比指定位置（如 `50%`、`100%`）。

### `left`
对齐到左侧。

### `center`
居中对齐。

### `right`
对齐到右侧。

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 与 `mask-position-x` 类似，但带有 WebKit 前缀
- 通常与 `-webkit-mask-position-y` 配合使用

## 示例

```css
/* 居中对齐 */
.element {
  -webkit-mask-position-x: center;
}

/* 使用百分比 */
.element {
  -webkit-mask-position-x: 50%;
}

/* 使用长度值 */
.element {
  -webkit-mask-position-x: 10px;
}
```

## 使用场景

```css
/* 场景 1：遮罩图像水平居中 */
.centered-mask {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
}

/* 场景 2：遮罩图像靠左 */
.left-aligned-mask {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-x: left;
}

/* 场景 3：遮罩图像靠右 */
.right-aligned-mask {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-x: right;
}

/* 场景 4：自定义水平位置 */
.custom-position-mask {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-x: 25%;
}