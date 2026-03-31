---
sidebar_position: 183
---

# :required

:required 伪类匹配设置了 required 属性的表单元素。

## 语法

```css
selector:required {
  property: value;
}
```

## 示例

```css
/* 匹配必填的输入框 */
input:required {
  border-color: red;
}

/* 匹配必填的文本域 */
textarea:required {
  border-color: red;
}

/* 匹配必填的选择框 */
select:required {
  border-color: red;
}

/* 匹配必填的输入框（带星号） */
input:required::after {
  content: " *";
  color: red;
}
```

## 相关资源

- [MDN Web Docs: :required](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required)
- [CSS-Tricks: :required](https://css-tricks.com/almanac/selectors/r/required/)