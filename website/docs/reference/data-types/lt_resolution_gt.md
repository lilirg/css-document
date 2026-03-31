---
sidebar_position: 75
---

# `resolution`

`resolution` 数据类型表示分辨率值。

## 单位

- `dpi` - 每英寸点�?
- `dpcm` - 每厘米点�?
- `dppx` - �?CSS 像素点数

## 示例

```css
/* 媒体查询 */
@media (min-resolution: 2dppx) {
  .high-dpi {
    background-image: url(image@2x.png);
  }
}

/* image-set */
.element {
  background-image: image-set(
    url(image.png) 1x,
    url(image@2x.png) 2x
  );
}
```

## 相关资源

- [MDN Web Docs: resolution](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resolution)
- [CSS-Tricks: resolution](https://css-tricks.com/almanac/properties/r/resolution/)
