---
sidebar_position: 41
---

# circle()

circle() 函数用于定义圆形形状。

## 语法

```css
circle(
  [<radius>]? 
  [at <position>]
)
```

## 示例

```css
/* 默认圆形 */
.element {
  clip-path: circle();
}

/* 指定半径 */
.element {
  clip-path: circle(50px);
}

/* 指定位置 */
.element {
  clip-path: circle(100px at center);
}

/* 百分比半径 */
.element {
  clip-path: circle(50% at 50% 50%);
}
```

## 相关资源

- [MDN Web Docs: circle()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-function/circle)
- [CSS-Tricks: circle()](https://css-tricks.com/almanac/properties/c/clip-path/)