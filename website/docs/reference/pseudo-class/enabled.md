---
sidebar_position: 179
---

# :enabled

:enabled 伪类匹配未被禁用的表单元素。

## 语法

```css
selector:enabled {
  property: value;
}
```

## 示例

```css
/* 匹配未被禁用的输入框 */
input:enabled {
  border-color: blue;
}

/* 匹配未被禁用的按钮 */
button:enabled {
  background-color: #007bff;
  cursor: pointer;
}

/* 匹配未被禁用的文本域 */
textarea:enabled {
  border-color: green;
}

/* 匹配未被禁用的选项 */
option:enabled {
  color: black;
}
```

## 相关资源

- [MDN Web Docs: :enabled](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled)
- [CSS-Tricks: :enabled](https://css-tricks.com/almanac/selectors/e/enabled/)