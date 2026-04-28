# 混合模式（Blend Mode）

混合模式定义了元素如何与背景混合。

## 什么是混合模式？

混合模式（Blend Mode）是 CSS 中定义元素如何与背景混合的属性。CSS 支持多种混合模式，包括 normal、multiply、screen、overlay 等。

## mix-blend-mode 属性

```css
.element {
  mix-blend-mode: normal;      /* 正常 */
  mix-blend-mode: multiply;    /* 乘法 */
  mix-blend-mode: screen;      /* 屏幕 */
  mix-blend-mode: overlay;     /* 叠加 */
  mix-blend-mode: darken;      /* 变暗 */
  mix-blend-mode: lighten;     /* 变亮 */
  mix-blend-mode: color-dodge; /* 颜色减淡 */
  mix-blend-mode: color-burn;  /* 颜色加深 */
  mix-blend-mode: hard-light;  /* 强光 */
  mix-blend-mode: soft-light;  /* 柔光 */
  mix-blend-mode: difference;  /* 差值 */
  mix-blend-mode: exclusion;   /* 排除 */
  mix-blend-mode: hue;         /* 色相 */
  mix-blend-mode: saturation;  /* 饱和度 */
  mix-blend-mode: color;       /* 颜色 */
  mix-blend-mode: luminosity;  /* 亮度 */
}
```

## background-blend-mode 属性

```css
.element {
  background-image: url(image1.jpg);
  background-color: red;
  background-blend-mode: multiply;
}
```

## 混合模式示例

```css
/* 乘法混合模式 */
.multiply {
  background-color: red;
  mix-blend-mode: multiply;
}

/* 屏幕混合模式 */
.screen {
  background-color: blue;
  mix-blend-mode: screen;
}

/* 叠加混合模式 */
.overlay {
  background-color: green;
  mix-blend-mode: overlay;
}
```

## 相关资源

- [MDN Web Docs: 混合模式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)
- [CSS-Tricks: Blend Modes](https://css-tricks.com/almanac/properties/m/mix-blend-mode/)