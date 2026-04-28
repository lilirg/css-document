# :disabled

:disabled 伪类匹配被禁用的表单元素。

## 语法

```css
selector:disabled {
  property: value;
}
```

## 示例

```css
/* 匹配被禁用的输入框 */
input:disabled {
  background-color: #eee;
  color: #999;
}

/* 匹配被禁用的按钮 */
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* 匹配被禁用的文本域 */
textarea:disabled {
  border-color: #ddd;
}

/* 匹配被禁用的选项 */
option:disabled {
  color: #999;
}
```

## 相关资源

- [MDN Web Docs: :disabled](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled)
- [CSS-Tricks: :disabled](https://css-tricks.com/almanac/selectors/d/disabled/)