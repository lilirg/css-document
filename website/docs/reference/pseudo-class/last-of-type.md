---
sidebar_position: 154
---

# :last-of-type

:last-of-type 伪类匹配其父元素的同类型子元素中的最后一个。

## 语法

```css
selector:last-of-type {
  property: value;
}
```

## 示例

```css
/* 匹配最后一个段落 */
p:last-of-type {
  margin-bottom: 0;
}

/* 匹配最后一个 div */
div:last-of-type {
  border-bottom: none;
}

/* 匹配最后一个列表项 */
li:last-of-type {
  margin-bottom: 0;
}

/* 匹配最后一个同类型元素（带特殊样式） */
h2:last-of-type {
  margin-bottom: 0;
}
```

## 相关资源

- [MDN Web Docs: :last-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type)
- [CSS-Tricks: :last-of-type](https://css-tricks.com/almanac/selectors/l/last-of-type/)