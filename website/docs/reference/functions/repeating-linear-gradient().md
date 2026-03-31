---
sidebar_position: 36
---

# repeating-linear-gradient()

repeating-linear-gradient() 函数用于创建重复的线性渐变图像。

## 语法

```css
repeating-linear-gradient(
  [ <angle> | to <side-or-corner> ]?,
  <color-stop-list>
)
```

## 示例

```css
/* 重复线性渐变 */
.background {
  background: repeating-linear-gradient(
    45deg,
    red,
    red 10px,
    blue 10px,
    blue 20px
  );
}

/* 条纹效果 */
.background {
  background: repeating-linear-gradient(
    to right,
    #000 0,
    #000 10px,
    #fff 10px,
    #fff 20px
  );
}
```

## 相关资源

- [MDN Web Docs: repeating-linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/repeating-linear-gradient)
- [CSS-Tricks: repeating-linear-gradient()](https://css-tricks.com/snippets/css/repeating-gradients/)