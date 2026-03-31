# :visited

`:visited` 伪类用于选择已访问的链接。

## 语法

```css
:visited {
  /* CSS properties */
}
```

## 描述

`:visited` 伪类匹配已访问链接。它只匹配 `<a>` 元素的 `href` 属性存在且已被访问的链接。

## 示例

```css
/* 已访问的链接 */
a:visited {
  color: purple;
}

/* 已访问的锚点 */
a:visited[name] {
  color: green;
}

/* 已访问的外部链接 */
a:visited[href^="http"] {
  color: red;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | |

## 相关链接

- [MDN: :visited](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited)
- [CSS Selectors Level 3 - :visited](https://www.w3.org/TR/CSS21/selector.html#link-pseudo-classes)