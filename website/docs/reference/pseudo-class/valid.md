---
sidebar_position: 181
---

# :valid

:valid 伪类匹配内容符合验证规则的表单元素。

## 语法

```css
selector:valid {
  property: value;
}
```

## 示例

```css
/* 匹配有效的输入框 */
input:valid {
  border-color: green;
}

/* 匹配有效的文本域 */
textarea:valid {
  border-color: green;
}

/* 匹配有效的选择框 */
select:valid {
  border-color: green;
}

/* 匹配有效的邮箱输入 */
input[type="email"]:valid {
  background-image: url('valid.png');
}
```

## 相关资源

- [MDN Web Docs: :valid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid)
- [CSS-Tricks: :valid](https://css-tricks.com/almanac/selectors/v/valid/)