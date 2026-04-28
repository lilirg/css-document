# :indeterminate

:indeterminate 伪类匹配处于不确定状态的表单元素，如未选中也未取消选中的复选框，或未选择任何选项的单选按钮组。

## 语法

```css
selector:indeterminate {
  property: value;
}
```

## 示例

```css
/* 匹配不确定状态的复选框 */
input[type="checkbox"]:indeterminate {
  background-color: gray;
}

/* 匹配不确定状态的单选按钮 */
input[type="radio"]:indeterminate {
  border-color: gray;
}

/* 匹配不确定状态的进度条 */
progress:indeterminate {
  background-color: #ccc;
}

/* 匹配不确定状态的复选框（特殊样式） */
input[type="checkbox"]:indeterminate::after {
  content: "−";
  color: white;
}
```

## 相关资源

- [MDN Web Docs: :indeterminate](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:indeterminate)
- [CSS-Tricks: :indeterminate](https://css-tricks.com/almanac/selectors/i/indeterminate/)