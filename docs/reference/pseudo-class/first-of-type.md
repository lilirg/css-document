# :first-of-type

:first-of-type 伪类匹配其父元素的同类型子元素中的第一个。

## 语法

```css
selector:first-of-type {
  property: value;
}
```

## 示例

```css
/* 匹配第一个段落 */
p:first-of-type {
  font-weight: bold;
}

/* 匹配第一个 div */
div:first-of-type {
  border-top: none;
}

/* 匹配第一个列表项 */
li:first-of-type {
  margin-top: 0;
}

/* 匹配第一个同类型元素（带特殊样式） */
h2:first-of-type {
  margin-top: 0;
}
```

## 相关资源

- [MDN Web Docs: :first-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type)
- [CSS-Tricks: :first-of-type](https://css-tricks.com/almanac/selectors/f/first-of-type/)