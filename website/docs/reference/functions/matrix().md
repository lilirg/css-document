---
sidebar_position: 30
---

# matrix()

matrix() 函数用于定义 2D 变换矩阵。

## 语法

```css
matrix(<a>, <b>, <c>, <d>, <e>, <f>);
```

## 示例

```css
/* 矩阵变换 */
.transform {
  transform: matrix(1, 0, 0, 1, 50, 30);
}

/* 等同于 translate(50px, 30px) */
.transform {
  transform: matrix(1, 0, 0, 1, 50, 30);
}
```

## 相关资源

- [MDN Web Docs: matrix()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)
- [CSS-Tricks: matrix()](https://css-tricks.com/almanac/properties/t/transform/)