# URL（Uniform Resource Locator）

URL 是 CSS 中用于表示资源位置的数据类型。

## URL 语法

```css
/* url() 函数 */
.element {
  background-image: url('image.png');
  background-image: url("image.png");
  background-image: url(image.png);
}

/* url() 函数带引号 */
.element {
  background-image: url('path/to/image.png');
  background-image: url("path/to/image.png");
}
```

## URL 应用

### 1. background-image

```css
/* 简单 URL */
.element {
  background-image: url('image.png');
}

/* 相对路径 */
.element {
  background-image: url('images/image.png');
}

/* 绝对路径 */
.element {
  background-image: url('/images/image.png');
}

/* 完整 URL */
.element {
  background-image: url('https://example.com/image.png');
}
```

### 2. content

```css
/* URL in content */
.element::before {
  content: url('icon.png');
}
```

### 3. cursor

```css
/* 自定义光标 */
.element {
  cursor: url('cursor.png'), auto;
}
```

### 4. list-style-image

```css
/* 列表样式图像 */
.element {
  list-style-image: url('bullet.png');
}
```

### 5. mask-image

```css
/* 掩码图像 */
.element {
  mask-image: url('mask.png');
}
```

## URL 示例

```css
/* 背景图像 */
.background {
  background-image: url('image.png');
}

/* 内容图像 */
.content {
  content: url('icon.png');
}

/* 光标 */
.cursor {
  cursor: url('cursor.png'), auto;
}

/* 列表样式 */
.list {
  list-style-image: url('bullet.png');
}

/* 掩码图像 */
.mask {
  mask-image: url('mask.png');
}
```

## URL 转义

```css
/* 转义特殊字符 */
.element {
  background-image: url('image with spaces.png');
  background-image: url('image#hash.png');
  background-image: url('image?query.png');
}
```

## 最佳实践

1. **使用引号** - 避免特殊字符问题
2. **相对路径** - 保持可移植性
3. **了解限制** - 某些浏览器限制
4. **优化图像** - 减小文件大小

## 相关链接

- [MDN: URL](https://developer.mozilla.org/zh-CN/docs/Web/CSS/url)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)