# :link

`:link` 伪类用于选择未曾访问的链接。

## 语法

```css
:link {
  /* CSS properties */
}
```

## 描述

`:link` 伪类匹配未曾访问的链接。它只匹配 `<a>` 元素的 `href` 属性存在但尚未被访问的链接。

## 示例

```css
/* 未访问的链接 */
a:link {
  color: blue;
  text-decoration: underline;
}

/* 未访问的锚点 */
a:link[name] {
  color: green;
}

/* 未访问的外部链接 */
a:link[href^="http"] {
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

- [MDN: :link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link)
- [CSS Selectors Level 3 - :link](https://www.w3.org/TR/CSS21/selector.html#link-pseudo-classes)