---
sidebar_position: 161
---

# :blank

:blank 伪类匹配空的输入框或文本域（即没有内容且没有占位符的元素）。

## 语法

```css
selector:blank {
  property: value;
}
```

## 示例

```css
/* 匹配空的输入框 */
input:blank {
  border-color: #ccc;
}

/* 匹配空的文本域 */
textarea:blank {
  border-color: #ccc;
}

/* 匹配空的输入框（特殊样式） */
input:blank {
  background-color: #fff;
}

/* 匹配空的输入框（悬停效果） */
input:blank:hover {
  border-color: #aaa;
}
```

## 相关资源

- [MDN Web Docs: :blank](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:blank)
- [CSS-Tricks: :blank](https://css-tricks.com/almanac/selectors/b/blank/)