---
sidebar_position: 182
---

# :invalid

:invalid 伪类匹配内容不符合验证规则的表单元素。

## 语法

```css
selector:invalid {
  property: value;
}
```

## 示例

```css
/* 匹配无效的输入框 */
input:invalid {
  border-color: red;
}

/* 匹配无效的文本域 */
textarea:invalid {
  border-color: red;
}

/* 匹配无效的选择框 */
select:invalid {
  border-color: red;
}

/* 匹配无效的邮箱输入 */
input[type="email"]:invalid {
  background-image: url('invalid.png');
}
```

## 相关资源

- [MDN Web Docs: :invalid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid)
- [CSS-Tricks: :invalid](https://css-tricks.com/almanac/selectors/i/invalid/)