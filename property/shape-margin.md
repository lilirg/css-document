# shape-margin

该属性设置形状外部的边距。

## 语法

```css
shape-margin: <length> | <percentage>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | 块级元素     |
| 动画         | 是             |

## 值

### `<length>`

使用长度值指定边距。可以是 `px`、`em`、`rem` 等单位。

### `<percentage>`

使用百分比值，相对于元素的宽度。

## 注意

- 该属性与 `shape-outside` 配合使用
- 边距在形状外部增加空白区域
- 文本不会进入边距区域

## 示例

```css
/* 固定边距 */
.el1 {
  shape-outside: circle(50%);
  shape-margin: 20px;
  float: left;
}

/* 百分比边距 */
.el2 {
  shape-outside: circle(50%);
  shape-margin: 10%;
  float: left;
}
```

```html
<!-- 形状边距示例 -->
<div class="shape-container">
  <div class="floated">浮动元素</div>
  <p>文本内容环绕形状...</p>
</div>
```

## 使用场景

```css
/* 圆形边距 */
.circle-margin {
  shape-outside: circle(50%);
  shape-margin: 20px;
  float: left;
}

/* 椭圆边距 */
.ellipse-margin {
  shape-outside: ellipse(50% 30%);
  shape-margin: 15px;
  float: left;
}

/* 多边形边距 */
.polygon-margin {
  shape-outside: polygon(50% 0%, 100% 100%, 0% 100%);
  shape-margin: 10px;
  float: left;
}

/* 图像边距 */
.image-margin {
  shape-outside: url("image.png");
  shape-margin: 25px;
  float: left;
}

/* 小边距 */
.small-margin {
  shape-outside: circle(50%);
  shape-margin: 5px;
  float: left;
}

/* 大边距 */
.large-margin {
  shape-outside: circle(50%);
  shape-margin: 50px;
  float: left;
}

/* 响应式边距 */
.responsive-margin {
  shape-outside: circle(50%);
  shape-margin: 10px;
  float: left;
}

@media (min-width: 768px) {
  .responsive-margin {
    shape-margin: 30px;
  }
}

/* 动画边距 */
.animated-margin {
  shape-outside: circle(50%);
  shape-margin: 10px;
  float: left;
  animation: marginChange 3s infinite;
}

@keyframes marginChange {
  0%, 100% { shape-margin: 10px; }
  50% { shape-margin: 30px; }
}

/* 图片画廊 */
.gallery-image {
  shape-outside: circle(50%);
  shape-margin: 15px;
  float: left;
}

/* 圆形头像 */
.circle-avatar {
  shape-outside: circle(50%);
  shape-margin: 10px;
  float: left;
}

/* 文本环绕 */
.text-wrap {
  shape-outside: circle(50%);
  shape-margin: 20px;
  float: left;
  width: 200px;
}

/* 不规则形状 */
.irregular-shape {
  shape-outside: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  shape-margin: 15px;
  float: left;
}
