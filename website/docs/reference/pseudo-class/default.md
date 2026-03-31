---
sidebar_position: 180
---

# :default

:default 伪类匹配默认选中的表单元素，如默认选中的单选按钮或复选框，或表单提交按钮。

## 语法

```css
selector:default {
  property: value;
}
```

## 示例

```css
/* 匹配默认选中的单选按钮 */
input[type="radio"]:default {
  border-color: blue;
}

/* 匹配默认选中的复选框 */
input[type="checkbox"]:default {
  background-color: blue;
}

/* 匹配默认提交按钮 */
button:default {
  background-color: #007bff;
}

/* 匹配默认选项 */
option:default {
  background-color: #333;
  color: white;
}
```

## 相关资源

- [MDN Web Docs: :default](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default)
- [CSS-Tricks: :default](https://css-tricks.com/almanac/selectors/d/default/)