# 分辨率（Resolution）

分辨率是 CSS 中用于表示图像分辨率的数据类型。

## 分辨率单位

### 1. DPI（Dots Per Inch）

```css
/* 媒体查询 */
@media (min-resolution: 96dpi) {
  /* 高分辨率设备 */
}
```

### 2. DPCM（Dots Per Centimeter）

```css
/* 媒体查询 */
@media (min-resolution: 38dpcm) {
  /* 高分辨率设备 */
}
```

### 3. DPR（Device Pixel Ratio）

```css
/* 媒体查询 */
@media (min-resolution: 2dppx) {
  /* 高分辨率设备 */
}
```

## 分辨率转换

| DPI | DPCM | DPR |
| :--- | :--- | :--- |
| 96dpi | 38dpcm | 1dppx |
| 192dpi | 76dpcm | 2dppx |
| 288dpi | 114dpcm | 3dppx |

## 分辨率应用

### 1. min-resolution / max-resolution

```css
/* 媒体查询 */
@media (min-resolution: 96dpi) {
  /* 标准分辨率 */
}

@media (min-resolution: 192dpi) {
  /* 高分辨率 */
}

@media (max-resolution: 96dpi) {
  /* 低分辨率 */
}
```

### 2. image-set()

```css
/* 高分辨率图像 */
.image {
  background-image: image-set(
    url(image-1x.png) 1x,
    url(image-2x.png) 2x,
    url(image-3x.png) 3x
  );
}
```

### 3. srcset

```html
<!-- HTML -->
<img src="image-1x.png"
     srcset="image-1x.png 1x,
             image-2x.png 2x,
             image-3x.png 3x"
     alt="Image">
```

## 分辨率示例

```css
/* 媒体查询 */
@media (min-resolution: 192dpi) {
  .high-res {
    background-image: url(image-2x.png);
  }
}

/* image-set */
.image {
  background-image: image-set(
    url(image-1x.png) 1x,
    url(image-2x.png) 2x
  );
}
```

## 最佳实践

1. **使用 DPR** - 更直观的分辨率单位
2. **提供多分辨率图像** - 适配不同设备
3. **使用 srcset** - HTML 图像响应式
4. **了解限制** - 浏览器兼容性

## 相关链接

- [MDN: 分辨率](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resolution)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)