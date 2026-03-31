---
sidebar_position: 43
---

# polygon()

polygon() 函数用于定义多边形形状。

## 语法

```css
polygon(<fill-rule>, <point>...)
```

## 示例

```css
/* 三角形 */
.element {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* 四边形 */
.element {
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

/* 五边形 */
.element {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

/* 带填充规则 */
.element {
  clip-path: polygon(nonzero, 50% 0%, 100% 100%, 0% 100%);
}
```

## 相关资源

- [MDN Web Docs: polygon()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-function/polygon)
- [CSS-Tricks: polygon()](https://css-tricks.com/almanac/properties/c/clip-path/)