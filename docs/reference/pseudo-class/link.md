# :link

:link 伪类匹配未访问过的链接。

## 语法

```css
selector:link {
  property: value;
}
```

## 示例

```css
/* 匹配未访问的链接 */
a:link {
  color: blue;
}

/* 匹配未访问的链接悬停状态 */
a:link:hover {
  color: darkblue;
}

/* 匹配未访问的菜单项 */
.menu-item:link {
  color: black;
}

/* 与 :visited 的组合 */
a:link {
  color: blue;
}

a:visited {
  color: purple;
}
```

## 相关资源

- [MDN Web Docs: :link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link)
- [CSS-Tricks: :link](https://css-tricks.com/almanac/selectors/l/link/)