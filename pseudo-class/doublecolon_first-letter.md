# ::first-letter

`::first-letter` 伪元素用于匹配元素的第一个字母。

## 语法

```css
::first-letter {
  /* CSS properties */
}
```

## 描述

`::first-letter` 伪元素匹配元素的第一个字母。它通常用于创建首字母下沉效果。

## 示例

```css
/* 段落的第一个字母 */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  float: left;
}

/* 列表项的第一个字母 */
li::first-letter {
  color: red;
}

/* 标题的第一个字母 */
h1::first-letter {
  text-transform: uppercase;
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

- [MDN: ::first-letter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter)
- [CSS Pseudo-Elements Level 4 - ::first-letter](https://www.w3.org/TR/css-pseudo-4/#first-letter-pseudo)