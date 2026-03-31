---
sidebar_position: 35
---

# linear-gradient()

linear-gradient() 函数用于创建线性渐变图像。

## 语法

```css
linear-gradient(
  [ <angle> | to <side-or-corner> ]?,
  <color-stop-list>
)
```

## 示例

```css
/* 从上到下的线性渐变 */
.background {
  background: linear-gradient(red, blue);
}

/* 45 度角渐变 */
.background {
  background: linear-gradient(45deg, red, blue);
}

/* 指定方向 */
.background {
  background: linear-gradient(to right, red, blue);
}

/* 多色渐变 */
.background {
  background: linear-gradient(red, yellow, blue);
}

/* 带位置的渐变 */
.background {
  background: linear-gradient(to bottom right, red 0%, blue 100%);
}
```

## 相关资源

- [MDN Web Docs: linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient)
- [CSS-Tricks: linear-gradient()](https://css-tricks.com/snippets/css/linear-gradient/)