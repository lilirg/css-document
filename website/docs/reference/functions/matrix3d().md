---
sidebar_position: 31
---

# matrix3d()

matrix3d() 函数用于定义 3D 变换矩阵。

## 语法

```css
matrix3d(<a1>, <b1>, <c1>, <d1>, <a2>, <b2>, <c2>, <d2>, <a3>, <b3>, <c3>, <d3>, <a4>, <b4>, <c4>, <d4>);
```

## 示例

```css
/* 3D 矩阵变换 */
.transform {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    50, 30, 0, 1
  );
}
```

## 相关资源

- [MDN Web Docs: matrix3d()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix3d)
- [CSS-Tricks: matrix3d()](https://css-tricks.com/almanac/properties/t/transform/)