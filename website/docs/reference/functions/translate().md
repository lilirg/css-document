---
sidebar_position: 16
---

# translate()

translate() 函数用于定义 2D 平移。

## 语法

```css
translate(<tx> [<ty>?]);
```

## 示例

```css
/* 水平平移 */
.transform {
  transform: translate(50px);
}

/* 水平和垂直平移 */
.transform {
  transform: translate(50px, 100px);
}

/* 百分比平移 */
.transform {
  transform: translate(50%, 50%);
}
```

## 相关资源

- [MDN Web Docs: translate()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translate)
- [CSS-Tricks: translate()](https://css-tricks.com/almanac/properties/t/transform/)