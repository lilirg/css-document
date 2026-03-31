---
sidebar_position: 145
---

# :placeholder-shown

:placeholder-shown 伪类匹配显示占位符文本的输入框或文本域。

## 语法

```css
selector:placeholder-shown {
  property: value;
}
```

## 示例

```css
/* 匹配显示占位符的输入框 */
input:placeholder-shown {
  border-color: #ccc;
}

/* 匹配显示占位符的文本域 */
textarea:placeholder-shown {
  border-color: #ccc;
}

/* 匹配显示占位符的输入框（特殊样式） */
input:placeholder-shown {
  color: #999;
}

/* 匹配显示占位符的输入框（悬停效果） */
input:placeholder-shown:hover {
  border-color: #aaa;
}
```

## 相关资源

- [MDN Web Docs: :placeholder-shown](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:placeholder-shown)
- [CSS-Tricks: :placeholder-shown](https://css-tricks.com/almanac/selectors/p/placeholder-shown/)