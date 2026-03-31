---
sidebar_position: 173
---

# :focus

:focus 伪类匹配获得焦点的元素，如用户通过键盘导航或点击选中的表单元素。

## 语法

```css
selector:focus {
  property: value;
}
```

## 示例

```css
/* 匹配获得焦点的输入框 */
input:focus {
  border-color: blue;
  outline: none;
}

/* 匹配获得焦点的文本域 */
textarea:focus {
  border-color: green;
  outline: none;
}

/* 匹配获得焦点的按钮 */
button:focus {
  outline: 2px solid blue;
}

/* 匹配获得焦点的链接 */
a:focus {
  outline: 2px solid red;
}
```

## 相关资源

- [MDN Web Docs: :focus](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)
- [CSS-Tricks: :focus](https://css-tricks.com/almanac/selectors/f/focus/)