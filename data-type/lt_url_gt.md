# url

`url` 数据类型表示 URL 值，用于引用外部资源。

## 语法

```css
/* 基本用法 */
.element {
  background-image: url('image.png');
  list-style-image: url('bullet.png');
  cursor: url('cursor.png'), auto;
}

/* 绝对路径 */
.element {
  background-image: url('/images/image.png');
}

/* 相对路径 */
.element {
  background-image: url('../images/image.png');
}

/* 数据 URI */
.element {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==');
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 示例

### background-image

```css
/* 基本 URL */
.element {
  background-image: url('image.png');
}

/* 绝对路径 */
.element {
  background-image: url('/images/image.png');
}

/* 相对路径 */
.element {
  background-image: url('../images/image.png');
}

/* 数据 URI */
.element {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==');
}
```

### list-style-image

```css
/* 列表图像 */
.element {
  list-style-image: url('bullet.png');
}
```

### cursor

```css
/* 自定义光标 */
.element {
  cursor: url('cursor.png'), auto;
}
```

### font-face

```css
/* 字体文件 */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
}
```

### 实用示例

```css
/* 背景图像 */
.element {
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* 响应式图像 */
.image {
  background-image: url('image-1x.png');
}

@media (min-resolution: 2dppx) {
  .image {
    background-image: url('image-2x.png');
  }
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 3+ |

## 相关链接

- [MDN Web Docs: url](https://developer.mozilla.org/zh-CN/docs/Web/CSS/url)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#urls)
