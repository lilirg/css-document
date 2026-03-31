---
sidebar_position: 20
---

# translate3d()

translate3d() 函数用于定义 3D 平移。

## 语法

```css
translate3d(<tx>, <ty>, <tz>);
```

## 示例

```css
/* 3D 平移 */
.transform {
  transform: translate3d(50px, 30px, 100px);
}

/* 使用 calc() */
.transform {
  transform: translate3d(calc(50% + 20px), calc(30vh - 10px), 100px);
}
```

## 相关资源

- [MDN Web Docs: translate3d()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translate3d)
- [CSS-Tricks: translate3d()](https://css-tricks.com/almanac/properties/t/transform/)