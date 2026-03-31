# 图像（Image）

图像是 CSS 中用于表示图像的数据类型。

## 图像类型

### 1. URL 图像

```css
/* URL 图像 */
.element {
  background-image: url('image.png');
  background-image: url('image.jpg');
  background-image: url('image.svg');
}
```

### 2. 渐变图像

```css
/* 线性渐变 */
.element {
  background-image: linear-gradient(red, blue);
}

/* 径向渐变 */
.element {
  background-image: radial-gradient(red, blue);
}

/* 圆锥渐变 */
.element {
  background-image: conic-gradient(red, blue);
}
```

### 3. image-set()

```css
/* 多分辨率图像 */
.element {
  background-image: image-set(
    url('image-1x.png') 1x,
    url('image-2x.png') 2x,
    url('image-3x.png') 3x
  );
}
```

## 图像应用

### 1. background-image

```css
/* URL 图像 */
.background {
  background-image: url('image.png');
}

/* 渐变图像 */
.gradient {
  background-image: linear-gradient(red, blue);
}

/* 多图像 */
.multi {
  background-image: url('image1.png'), url('image2.png');
}
```

### 2. list-style-image

```css
/* 列表样式图像 */
.list {
  list-style-image: url('bullet.png');
}
```

### 3. cursor

```css
/* 自定义光标 */
.cursor {
  cursor: url('cursor.png'), auto;
}
```

### 4. mask-image

```css
/* 掩码图像 */
.mask {
  mask-image: url('mask.png');
}
```

### 5. border-image

```css
/* 边框图像 */
.border {
  border-image: url('border.png') 30;
}
```

## 图像示例

```css
/* 背景图像 */
.background {
  background-image: url('image.png');
}

/* 渐变图像 */
.gradient {
  background-image: linear-gradient(red, blue);
}

/* 圆锥渐变 */
.conic {
  background-image: conic-gradient(red, blue);
}

/* 多分辨率图像 */
.responsive {
  background-image: image-set(
    url('image-1x.png') 1x,
    url('image-2x.png') 2x
  );
}
```

## 图像最佳实践

1. **使用现代格式** - WebP, AVIF
2. **提供多分辨率** - 适配不同设备
3. **优化图像** - 减小文件大小
4. **了解限制** - 浏览器兼容性

## 相关链接

- [MDN: 图像](https://developer.mozilla.org/zh-CN/docs/Web/CSS/image)
- [W3C: CSS Images Module Level 3](https://www.w3.org/TR/css-images-3/)