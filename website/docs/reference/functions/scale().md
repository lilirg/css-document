---
sidebar_position: 21
---

# scale()

scale() 函数用于定义缩放变换。

## 语法

```css
scale(<sx>, <sy>?);
```

## 示例

```css
/* 等比例缩放 */
.transform {
  transform: scale(1.5);
}

/* 非等比例缩放 */
.transform {
  transform: scale(2, 0.5);
}

/* 缩小 */
.transform {
  transform: scale(0.8);
}
```

## 相关资源

- [MDN Web Docs: scale()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scale)
- [CSS-Tricks: scale()](https://css-tricks.com/almanac/properties/t/transform/)