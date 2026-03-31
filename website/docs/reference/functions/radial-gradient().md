---
sidebar_position: 37
---

# radial-gradient()

radial-gradient() 函数用于创建径向渐变图像。

## 语法

```css
radial-gradient(
  [ <shape> || <size> ]?
  [ at <position> ]?,
  <color-stop-list>
)
```

## 示例

```css
/* 默认径向渐变 */
.background {
  background: radial-gradient(red, blue);
}

/* 圆形渐变 */
.background {
  background: radial-gradient(circle, red, blue);
}

/* 椭圆渐变 */
.background {
  background: radial-gradient(ellipse, red, blue);
}

/* 指定位置 */
.background {
  background: radial-gradient(circle at center, red, blue);
}

/* 多色渐变 */
.background {
  background: radial-gradient(red, yellow, blue);
}
```

## 相关资源

- [MDN Web Docs: radial-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/radial-gradient)
- [CSS-Tricks: radial-gradient()](https://css-tricks.com/snippets/css/radial-gradients/)