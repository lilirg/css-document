---
sidebar_position: 169
---

# :any-link

:any-link 伪类匹配所有已设置 href 属性的 `<a>`、`<area>` 和 `<link>` 元素，无论是否已访问。

## 语法

```css
selector:any-link {
  property: value;
}
```

## 示例

```css
/* 匹配所有链接 */
a:any-link {
  text-decoration: underline;
}

/* 匹配所有区域映射链接 */
area:any-link {
  cursor: pointer;
}

/* 匹配所有链接元素 */
link:any-link {
  /* 样式 */
}

/* 与 :link 和 :visited 的组合 */
a:any-link {
  color: blue;
}

/* 等价于 */
a:link, a:visited {
  color: blue;
}
```

## 相关资源

- [MDN Web Docs: :any-link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:any-link)
- [CSS-Tricks: :any-link](https://css-tricks.com/almanac/selectors/a/any-link/)