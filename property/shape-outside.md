# shape-outside

该属性定义一个形状，使得文本可以环绕该形状浮动。

## 语法

```css
shape-outside: none | <shape-box> | <basic-shape> | <image>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 浮动元素     |
| 动画         | 是             |

## 值

### `none`

不定义形状，文本按元素边界环绕。

### `<shape-box>`

使用几何形状定义边界。

### `<basic-shape>`

基本形状函数：

- `circle()` - 圆形
- `ellipse()` - 椭圆
- `inset()` - 矩形
- `polygon()` - 多边形

### `<image>`

使用图像定义形状。

## 注意

- 元素必须是浮动的（`float`）
- 与 `shape-margin` 配合使用
- 与 `shape-image-threshold` 配合使用

## 示例

```css
/* 圆形形状 */
.circle {
  shape-outside: circle(50%);
  float: left;
}

/* 椭圆形状 */
.ellipse {
  shape-outside: ellipse(50% 30%);
  float: left;
}

/* 矩形形状 */
.rect {
  shape-outside: inset(10%);
  float: left;
}

/* 多边形形状 */
.polygon {
  shape-outside: polygon(50% 0%, 100% 100%, 0% 100%);
  float: left;
}
```

```html
<!-- 形状外部示例 -->
<div class="container">
  <div class="floated">浮动元素</div>
  <p>文本内容环绕形状...</p>
</div>
```

## 使用场景

```css
/* 圆形头像 */
.circle-avatar {
  shape-outside: circle(50%);
  float: left;
  width: 150px;
  height: 150px;
}

/* 椭圆形状 */
.ellipse-shape {
  shape-outside: ellipse(50% 30% at 50% 50%);
  float: left;
}

/* 矩形内边距 */
.inset-shape {
  shape-outside: inset(20px 20px 20px 20px);
  float: left;
}

/* 三角形 */
.triangle {
  shape-outside: polygon(50% 0%, 0% 100%, 100% 100%);
  float: left;
}

/* 星形 */
.star {
  shape-outside: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%,
    79% 91%, 50% 70%, 21% 91%, 32% 57%,
    2% 35%, 39% 35%
  );
  float: left;
}

/* 六边形 */
.hexagon {
  shape-outside: polygon(
    25% 0%, 75% 0%, 100% 50%,
    75% 100%, 25% 100%, 0% 50%
  );
  float: left;
}

/* 图像形状 */
.image-shape {
  shape-outside: url("shape.png");
  shape-image-threshold: 0.5;
  float: left;
}

/* 带边距的形状 */
.shape-with-margin {
  shape-outside: circle(50%);
  shape-margin: 20px;
  float: left;
}

/* 响应式形状 */
.responsive-shape {
  shape-outside: circle(50%);
  float: left;
}

@media (min-width: 768px) {
  .responsive-shape {
    shape-outside: ellipse(50% 30%);
  }
}

/* 动画形状 */
.animated-shape {
  shape-outside: circle(50%);
  float: left;
  animation: shapeChange 3s infinite;
}

@keyframes shapeChange {
  0%, 100% { shape-outside: circle(50%); }
  50% { shape-outside: ellipse(50% 30%); }
}

/* 文本环绕图片 */
.text-around-image {
  shape-outside: url("image.png");
  float: left;
}

/* 自定义多边形 */
.custom-polygon {
  shape-outside: polygon(
    0% 0%, 100% 0%, 100% 75%,
    75% 100%, 0% 100%
  );
  float: left;
}

/* 圆形带位置 */
.circle-with-position {
  shape-outside: circle(50% at 50% 50%);
  float: left;
}

/* 椭圆带位置 */
.ellipse-with-position {
  shape-outside: ellipse(40% 30% at 30% 70%);
  float: left;
}
