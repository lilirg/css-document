# transform-origin

该属性设置变换的原点。

## 语法

```css
transform-origin: [ <length> | <percentage> | left | center | right | top | bottom ] [ <length> | <percentage> | top | bottom | center ]? [ <length> | <percentage> ]?
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `50% 50% 0`    |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `<length>`

使用长度值指定原点位置。

### `<percentage>`

使用百分比值指定原点位置。

### `left | center | right`

水平位置关键字。

### `top | center | bottom`

垂直位置关键字。

## 注意

- 默认值为元素的中心
- 与 `transform` 配合使用
- 可以设置 3D 原点

## 示例

```css
/* 左上角 */
.top-left {
  transform-origin: top left;
}

/* 中心 */
.center {
  transform-origin: center center;
}

/* 右下角 */
.bottom-right {
  transform-origin: bottom right;
}

/* 自定义位置 */
.custom {
  transform-origin: 25% 75%;
}
```

```html
<!-- 变换原点示例 -->
<div class="origin-element">变换元素</div>
```

## 使用场景

```css
/* 左上角原点 */
.origin-top-left {
  transform-origin: top left;
}

/* 右上角原点 */
.origin-top-right {
  transform-origin: top right;
}

/* 左下角原点 */
.origin-bottom-left {
  transform-origin: bottom left;
}

/* 右下角原点 */
.origin-bottom-right {
  transform-origin: bottom right;
}

/* 顶部中心 */
.origin-top {
  transform-origin: top center;
}

/* 底部中心 */
.origin-bottom {
  transform-origin: bottom center;
}

/* 左侧中心 */
.origin-left {
  transform-origin: left center;
}

/* 右侧中心 */
.origin-right {
  transform-origin: right center;
}

/* 中心（默认） */
.origin-center {
  transform-origin: center center;
}

/* 百分比位置 */
.origin-percent {
  transform-origin: 25% 50%;
}

/* 像素位置 */
.origin-pixel {
  transform-origin: 50px 100px;
}

/* 负值位置 */
.origin-negative {
  transform-origin: -50px -50px;
}

/* 3D 原点 */
.origin-3d {
  transform-origin: 50% 50% 100px;
}

/* 门铰链效果 */
.door-hinge {
  transform-origin: left center;
  transform: rotateY(45deg);
}

/* 时钟指针 */
.clock-hand {
  transform-origin: bottom center;
  transform: rotate(45deg);
}

/* 翻书效果 */
.page-flip {
  transform-origin: left center;
  transform: rotateY(-30deg);
}

/* 下拉菜单 */
.dropdown {
  transform-origin: top center;
  transform: scaleY(0);
  transition: transform 0.3s;
}

.dropdown.open {
  transform: scaleY(1);
}

/* 缩放按钮 */
.zoom-button {
  transform-origin: center center;
  transition: transform 0.2s;
}

.zoom-button:hover {
  transform: scale(1.2);
}

/* 展开动画 */
.expand {
  transform-origin: top left;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.expand.open {
  transform: scaleX(1);
}

/* 收起动画 */
.collapse {
  transform-origin: bottom right;
  transform: scaleY(0);
  transition: transform 0.3s;
}

.collapse.open {
  transform: scaleY(1);
}

/* 旋转门 */
旋转门 {
  transform-origin: left center;
  animation: doorOpen 2s infinite;
}

@keyframes doorOpen {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
}

/* 摆锤动画 */
.pendulum {
  transform-origin: top center;
  animation: swing 2s infinite;
}

@keyframes swing {
  0%, 100% { transform: rotate(-30deg); }
  50% { transform: rotate(30deg); }
}

/* 响应式原点 */
.responsive-origin {
  transform-origin: center center;
}

@media (min-width: 768px) {
  .responsive-origin {
    transform-origin: top left;
  }
}

/* 自定义动画原点 */
.custom-animation {
  transform-origin: 30% 70%;
  animation: custom 3s infinite;
}

@keyframes custom {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
