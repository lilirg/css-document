# :read-write

:read-write 伪类匹配可读写的表单元素（即未设置 readonly 属性的 input 或 textarea）。

## 语法

```css
selector:read-write {
  property: value;
}
```

## 示例

```css
/* 匹配可读写的输入框 */
input:read-write {
  border-color: blue;
}

/* 匹配可读写的文本域 */
textarea:read-write {
  border-color: green;
}

/* 匹配可读写的输入框（带特殊样式） */
input:read-write {
  transition: border-color 0.3s;
}

/* 匹配可读写的输入框（悬停效果） */
input:read-write:hover {
  border-color: darkblue;
}
```

## 相关资源

- [MDN Web Docs: :read-write](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-write)
- [CSS-Tricks: :read-write](https://css-tricks.com/almanac/selectors/r/read-write/)