# ::placeholder

`::placeholder` 伪元素用于匹配显示占位文字的 input 元素。

## 语法

```css
::placeholder {
  /* CSS properties */
}
```

## 描述

`::placeholder` 伪元素匹配显示占位文字的 input 元素。它用于设置占位符文本的样式。

## 示例

```css
/* 输入框的占位符 */
input::placeholder {
  color: gray;
  font-style: italic;
}

/* 文本域的占位符 */
textarea::placeholder {
  color: #888;
}

/* 自定义占位符样式 */
input::placeholder {
  opacity: 0.6;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 10+ |

## 相关链接

- [MDN: ::placeholder](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::placeholder)
- [CSS Pseudo-Elements Level 4 - ::placeholder](https://www.w3.org/TR/css-pseudo-4/#placeholder)