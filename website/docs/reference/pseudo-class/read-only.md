---
sidebar_position: 186
---

# :read-only

:read-only 伪类匹配只读的表单元素（如设置了 readonly 属性的 input 或 textarea）。

## 语法

```css
selector:read-only {
  property: value;
}
```

## 示例

```css
/* 匹配只读的输入框 */
input:read-only {
  background-color: #eee;
  color: #666;
}

/* 匹配只读的文本域 */
textarea:read-only {
  background-color: #eee;
  border-color: #ddd;
}

/* 匹配只读的选择框 */
select:read-only {
  background-color: #eee;
}

/* 匹配只读的输入框（带特殊样式） */
input:read-only {
  border-style: dashed;
}
```

## 相关资源

- [MDN Web Docs: :read-only](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-only)
- [CSS-Tricks: :read-only](https://css-tricks.com/almanac/selectors/r/read-only/)