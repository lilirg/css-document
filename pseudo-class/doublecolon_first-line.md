# ::first-line

`::first-line` 伪元素用于匹配包含此伪元素的元素的第一行。

## 语法

```css
::first-line {
  /* CSS properties */
}
```

## 描述

`::first-line` 伪元素匹配包含此伪元素的元素的第一行。它通常用于设置段落第一行的样式。

## 示例

```css
/* 段落的第一行 */
p::first-line {
  font-weight: bold;
  color: blue;
}

/* 列表项的第一行 */
li::first-line {
  text-transform: uppercase;
}

/* 标题的第一行 */
h1::first-line {
  font-size: 1.5em;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 6+ |

## 相关链接

- [MDN: ::first-line](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line)
- [CSS Pseudo-Elements Level 4 - ::first-line](https://www.w3.org/TR/css-pseudo-4/#first-line-pseudo)