---
sidebar_position: 42
---

# ellipse()

ellipse() 函数用于定义椭圆形状。

## 语法

```css
ellipse(
  [<rx> <ry>]? 
  [at <position>]
)
```

## 示例

```css
/* 默认椭圆 */
.element {
  clip-path: ellipse();
}

/* 指定半径 */
.element {
  clip-path: ellipse(100px 50px);
}

/* 指定位置 */
.element {
  clip-path: ellipse(100px 50px at center);
}

/* 百分比半径 */
.element {
  clip-path: ellipse(50% 30% at 50% 50%);
}
```

## 相关资源

- [MDN Web Docs: ellipse()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-function/ellipse)
- [CSS-Tricks: ellipse()](https://css-tricks.com/almanac/properties/c/clip-path/)