# mask-image

该属性设置用于元素遮罩的图像。

## 语法

```css
mask-image: <mask-source> | none
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `none`

不使用图像作为遮罩。这是默认值。

### `<mask-source>`

指定用作遮罩的图像。可以是：

| 类型 | 示例 |
|------|------|
| URL | `url('mask.png')` |
| 渐变 | `linear-gradient(...)`, `radial-gradient(...)` |
| 元素引用 | `url(#element-id)` |
| 图像函数 | `image-set(...)`, `element(...)` |

### 多图层

可以指定多个遮罩图层：

```css
mask-image: url('mask1.png'), url('mask2.png');
```

## 注意

- 遮罩图像中的透明部分会隐藏元素内容
- 遮罩图像中的不透明部分会显示元素内容
- 可以使用渐变创建平滑的遮罩效果

## 示例

```css
/* 使用图片 */
.el1 {
  mask-image: url('mask.png');
  padding: 20px;
}

/* 使用线性渐变 */
.el2 {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  padding: 20px;
}

/* 使用径向渐变 */
.el3 {
  mask-image: radial-gradient(circle, black 50%, transparent 100%);
  padding: 20px;
}

/* 使用圆锥渐变 */
.el4 {
  mask-image: conic-gradient(from 0deg, black 0%, transparent 100%);
  padding: 20px;
}

/* 使用重复渐变 */
.el5 {
  mask-image: repeating-linear-gradient(90deg, black, black 10px, transparent 10px, transparent 20px);
  padding: 20px;
}

/* 多图层遮罩 */
.el6 {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%),
              radial-gradient(circle, transparent 30%, black 70%);
  padding: 20px;
}

/* 使用元素引用 */
.el7 {
  mask-image: url(#my-mask);
  padding: 20px;
}

/* 无遮罩 */
.el8 {
  mask-image: none;
  padding: 20px;
}
```

```html
<div class="el1">图片</div>
<div class="el2">线性渐变</div>
<div class="el3">径向渐变</div>
<div class="el4">圆锥渐变</div>
<div class="el5">重复渐变</div>
<div class="el6">多图层</div>
<div class="el7">元素引用</div>
<div class="el8">无遮罩</div>
```

## 使用场景

```css
/* 渐隐效果 */
.fade-mask {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  padding: 20px;
}

/* 圆形遮罩 */
.circle-mask {
  width: 200px;
  height: 200px;
  mask-image: radial-gradient(circle, black 70%, transparent 100%);
}

/* 图片渐隐 */
.image-fade {
  mask-image: linear-gradient(to right, black 80%, transparent 100%);
  padding: 20px;
}

/* 边框渐隐 */
.border-fade {
  mask-image: linear-gradient(black, black),
              radial-gradient(ellipse at top, transparent, black),
              radial-gradient(ellipse at bottom, transparent, black),
              radial-gradient(ellipse at left, transparent, black),
              radial-gradient(ellipse at right, transparent, black);
  padding: 20px;
}

/* 文字遮罩 */
.text-mask {
  font-size: 48px;
  font-weight: bold;
  mask-image: linear-gradient(90deg, black 0%, transparent 100%);
}

/* 卡片遮罩 */
.card-mask {
  mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
  padding: 20px;
  border-radius: 12px;
}

/* 条纹遮罩 */
.stripe-mask {
  mask-image: repeating-linear-gradient(
    45deg,
    black,
    black 10px,
    transparent 10px,
    transparent 20px
  );
  padding: 20px;
}

/* 菱形遮罩 */
.diamond-mask {
  mask-image: linear-gradient(45deg, black 50%, transparent 50%),
              linear-gradient(-45deg, black 50%, transparent 50%);
  padding: 20px;
}

/* 中心聚焦遮罩 */
.center-focus {
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 100%);
  padding: 20px;
}

/* 边缘聚焦遮罩 */
.edge-focus {
  mask-image: radial-gradient(ellipse at center, transparent 30%, black 100%);
  padding: 20px;
}
