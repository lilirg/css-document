---
sidebar_position: 177
---

# :checked

:checked 伪类匹配被选中的单选按钮、复选框或选项元素。

## 语法

```css
selector:checked {
  property: value;
}
```

## 示例

```css
/* 匹配被选中的复选框 */
input[type="checkbox"]:checked {
  background-color: blue;
}

/* 匹配被选中的单选按钮 */
input[type="radio"]:checked {
  border-color: blue;
}

/* 匹配被选中的选项 */
option:checked {
  background-color: #333;
  color: white;
}

/* 匹配被选中的开关 */
.switch:checked {
  background-color: green;
}
```

## 相关资源

- [MDN Web Docs: :checked](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)
- [CSS-Tricks: :checked](https://css-tricks.com/almanac/selectors/c/checked/)