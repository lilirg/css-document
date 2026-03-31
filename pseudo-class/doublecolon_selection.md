# ::selection

`::selection` 伪元素用于匹配文档中被选择的那部分。

## 语法

```css
::selection {
  /* CSS properties */
}
```

## 描述

`::selection` 伪元素匹配文档中被选择的那部分。它用于设置用户选择文本时的样式。

## 示例

```css
/* 文本选择样式 */
::selection {
  background-color: yellow;
  color: black;
}

/* 链接选择样式 */
a::selection {
  background-color: blue;
  color: white;
}

/* 自定义选择样式 */
p::selection {
  background-color: #007bff;
  color: white;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 9+ |

## 相关链接

- [MDN: ::selection](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection)
- [CSS Pseudo-Elements Level 4 - ::selection](https://www.w3.org/TR/css-pseudo-4/#selection)