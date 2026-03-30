# mask-border-source

该属性指定用作元素遮罩边框的图像。

## 语法

```css
mask-border-source: none | image
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `none`
不使用图像作为遮罩边框。

### `image`
指定用作遮罩边框的图像。可以是：
- `url()` - 图像 URL
- `linear-gradient()` - 线性渐变
- `radial-gradient()` - 径向渐变
- 其他 CSS 图像函数

## 注意
- 该属性通常与 `mask-border-slice`、`mask-border-width` 等属性配合使用
- 图像会被切割成 9 个区域（类似 `border-image`）
- 支持 CSS 渐变作为图像源

## 示例

```css
/* 使用图像作为遮罩边框 */
.element {
  mask-border-source: url("mask.png");
  mask-border-slice: 30;
  mask-border-width: 30px;
}

/* 使用渐变作为遮罩边框 */
.element {
  mask-border-source: linear-gradient(to right, transparent, black);
  mask-border-slice: 1;
  mask-border-width: 10px;
}
```

## 使用场景

```css
/* 场景 1：使用图像创建复杂的边框遮罩效果 */
.card {
  mask-border-source: url("border-mask.png");
  mask-border-slice: 30 fill;
  mask-border-width: 30px;
  mask-border-repeat: stretch;
}

/* 场景 2：使用渐变创建简单的线性边框遮罩 */
.highlight {
  mask-border-source: linear-gradient(90deg, transparent, black, transparent);
  mask-border-slice: 1;
  mask-border-width: 5px;
}

/* 场景 3：配合 mask-border-mode 控制遮罩类型 */
.alpha-mask {
  mask-border-source: url("alpha-mask.png");
  mask-border-mode: alpha;
}

.luminance-mask {
  mask-border-source: url("luminance-mask.png");
  mask-border-mode: luminance;
}
