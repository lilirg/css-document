---
sidebar_position: 149
---

# :first-child

:first-child 伪类匹配作为其父元素的第一个子元素的元素。

## 语法

```css
selector:first-child {
  property: value;
}
```

## 示例

```css
/* 匹配第一个子元素 */
li:first-child {
  border-top: none;
}

/* 匹配第一个段落 */
p:first-child {
  font-weight: bold;
}

/* 匹配第一个列表项 */
.menu-item:first-child {
  margin-left: 0;
}

/* 匹配第一个子元素（带特殊样式） */
div:first-child {
  border-radius: 4px 4px 0 0;
}
```

## 相关资源

- [MDN Web Docs: :first-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child)
- [CSS-Tricks: :first-child](https://css-tricks.com/almanac/selectors/f/first-child/)