# :last-child

:last-child 伪类匹配作为其父元素的最后一个子元素的元素。

## 语法

```css
selector:last-child {
  property: value;
}
```

## 示例

```css
/* 匹配最后一个子元素 */
li:last-child {
  border-bottom: none;
}

/* 匹配最后一个段落 */
p:last-child {
  margin-bottom: 0;
}

/* 匹配最后一个列表项 */
.menu-item:last-child {
  margin-right: 0;
}

/* 匹配最后一个子元素（带特殊样式） */
div:last-child {
  border-radius: 0 0 4px 4px;
}
```

## 相关资源

- [MDN Web Docs: :last-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child)
- [CSS-Tricks: :last-child](https://css-tricks.com/almanac/selectors/l/last-child/)