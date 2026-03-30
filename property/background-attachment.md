# background-attachment

该属性设置背景图像是否固定或者随着页面的其余部分滚动。

## 语法

```css
background-attachment: scroll | fixed | local
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `scroll`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `scroll`

默认值。背景图像相对于元素本身固定，不随元素的内容滚动。

### `fixed`

背景图像相对于视口固定，即使元素有滚动，背景也不会移动。

### `local`

背景图像相对于元素内容固定，当元素有滚动时，背景图像会随内容一起滚动。

## 注意

- 如果指定了多个背景层，每个层的附着方式用逗号分隔
- `fixed` 值在某些移动浏览器上可能不被支持
- 当父元素有 `transform`、`perspective` 或 `filter` 时，`fixed` 值可能不起作用

## 示例

```css
/* 背景随元素滚动 */
.el {
  background-attachment: scroll;
  background-image: url('bg.jpg');
  background-size: cover;
}

/* 背景固定在视口 */
.el2 {
  background-attachment: fixed;
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: center;
}

/* 背景随内容滚动 */
.el3 {
  background-attachment: local;
  background-image: url('bg.jpg');
  background-size: cover;
  overflow: auto;
}

/* 多个背景层，不同的附着方式 */
.el4 {
  background-image: url('pattern.png'), url('bg.jpg');
  background-attachment: scroll, fixed;
  background-size: cover;
}
```

```html
<div class="el">scroll</div>
<div class="el2">fixed</div>
<div class="el3">local</div>
<div class="el4">多个背景</div>
```

## 使用场景

```css
/* 全屏固定背景 */
.hero {
  height: 100vh;
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* 视差滚动效果 */
.parallax {
  height: 500px;
  background-image: url('parallax-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* 内容区域滚动背景 */
.content-box {
  height: 300px;
  overflow-y: auto;
  background-image: url('texture.png');
  background-attachment: local;
}
