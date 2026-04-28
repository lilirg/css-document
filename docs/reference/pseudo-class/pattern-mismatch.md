# :pattern-mismatch

:pattern-mismatch 伪类匹配内容不符合 pattern 属性指定正则表达式的表单元素。

## 语法

```css
selector:pattern-mismatch {
  property: value;
}
```

## 示例

```css
/* 匹配不符合模式的输入框 */
input:pattern-mismatch {
  border-color: red;
}

/* 匹配不符合模式的文本域 */
textarea:pattern-mismatch {
  border-color: red;
}

/* 匹配不符合模式的输入框（特殊样式） */
input:pattern-mismatch {
  background-color: #ffebee;
}

/* 匹配不符合模式的输入框（悬停效果） */
input:pattern-mismatch:hover {
  border-color: darkred;
}
```

## 相关资源

- [MDN Web Docs: :pattern-mismatch](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:pattern-mismatch)
- [CSS-Tricks: :pattern-mismatch](https://css-tricks.com/almanac/selectors/p/pattern-mismatch/)