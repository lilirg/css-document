# :visited

:visited 伪类匹配已访问过的链接。

## 语法

```css
selector:visited {
  property: value;
}
```

## 示例

```css
/* 匹配已访问的链接 */
a:visited {
  color: purple;
}

/* 匹配已访问的链接悬停状态 */
a:visited:hover {
  color: darkpurple;
}

/* 匹配已访问的菜单项 */
.menu-item:visited {
  color: gray;
}

/* 限制：只能修改颜色相关属性 */
a:visited {
  color: purple;
  /* 以下属性在 :visited 中无效 */
  /* background-color: yellow; */
  /* transform: scale(1.1); */
}
```

## 相关资源

- [MDN Web Docs: :visited](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited)
- [CSS-Tricks: :visited](https://css-tricks.com/almanac/selectors/v/visited/)