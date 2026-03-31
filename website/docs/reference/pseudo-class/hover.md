---
sidebar_position: 172
---

# :hover

:hover 伪类匹配用户将鼠标悬停在其上的元素。

## 语法

```css
selector:hover {
  property: value;
}
```

## 示例

```css
/* 匹配悬停的链接 */
a:hover {
  color: red;
  text-decoration: underline;
}

/* 匹配悬停的按钮 */
button:hover {
  background-color: #ddd;
  cursor: pointer;
}

/* 匹配悬停的菜单项 */
.menu-item:hover {
  background-color: #333;
  color: white;
}

/* 匹配悬停的图片 */
img:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}
```

## 相关资源

- [MDN Web Docs: :hover](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)
- [CSS-Tricks: :hover](https://css-tricks.com/almanac/selectors/h/hover/)