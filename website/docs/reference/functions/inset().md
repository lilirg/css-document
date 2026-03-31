---
sidebar_position: 44
---

# inset()

inset() 函数用于定义矩形形状。

## 语法

```css
inset(<top> <right> <bottom> <left>? [round <border-radius>]?)
```

## 示例

```css
/* 矩形裁剪 */
.element {
  clip-path: inset(10px 20px 30px 40px);
}

/* 圆角矩形 */
.element {
  clip-path: inset(10px round 20px);
}

/* 全部边缘相同 */
.element {
  clip-path: inset(20px);
}

/* 百分比 */
.element {
  clip-path: inset(10% 20% 10% 20%);
}
```

## 相关资源

- [MDN Web Docs: inset()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-function/inset)
- [CSS-Tricks: inset()](https://css-tricks.com/almanac/properties/c/clip-path/)