# :local-link

:local-link 伪类匹配与当前文档同源的链接。它只匹配与当前页面在同一域名下的链接。

## 语法

```css
selector:local-link {
  property: value;
}
```

## 示例

```css
/* 匹配同源链接 */
a:local-link {
  color: blue;
}

/* 匹配同源链接的悬停状态 */
a:local-link:hover {
  color: darkblue;
}

/* 匹配同源链接的访问状态 */
a:local-link:visited {
  color: purple;
}

/* 区分同源和跨域链接 */
a:local-link {
  color: blue;
}

a:not(:local-link) {
  color: green;
}
```

## 相关资源

- [MDN Web Docs: :local-link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:local-link)
- [CSS-Tricks: :local-link](https://css-tricks.com/almanac/selectors/l/local-link/)