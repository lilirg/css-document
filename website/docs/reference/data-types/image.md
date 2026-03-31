---
sidebar_position: 58
---

# image

image 数据类型表示图像值。

## 示例

```css
/* url 图像 */
.element {
  background-image: url('image.png');
}

/* 渐变图像 */
.element {
  background-image: linear-gradient(red, blue);
}

/* 多重背景 */
.element {
  background-image: url('bg.png'), linear-gradient(red, blue);
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

- [MDN Web Docs: image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/image)
- [CSS-Tricks: image](https://css-tricks.com/almanac/properties/b/background-image/)