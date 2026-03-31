---
sidebar_position: 40
---

# attr()

attr() 函数用于获取元素属性值。

## 语法

```css
attr(<attribute-name> <type-or-unit>?)
```

## 示例

```css
/* 获取 data 属性 */
.element::before {
  content: attr(data-label);
}

/* 获取 title 属性 */
.element::after {
  content: attr(title);
}

/* 带类型的 attr */
.element {
  width: calc(attr(data-width px) * 2);
}
```

## 相关资源

- [MDN Web Docs: attr()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)
- [CSS-Tricks: attr()](https://css-tricks.com/almanac/properties/c/content/)