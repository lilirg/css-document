---
sidebar_position: 168
---

# :has()

:has() 伪类是一个关系伪类，它接受一个选择器列表作为参数，当元素包含与选择器匹配的后代元素时匹配。

## 语法

```css
selector:has(selector-list) {
  property: value;
}
```

## 示例

```css
/* 匹配包含 .highlight 类的段落 */
p:has(.highlight) {
  border: 1px solid #ccc;
}

/* 匹配包含子元素的列表项 */
li:has(*) {
  padding: 5px;
}

/* 匹配包含至少一个链接的导航 */
nav:has(a) {
  background-color: #f5f5f5;
}

/* 匹配包含输入字段的表单 */
form:has(input) {
  padding: 20px;
}

/* 匹配包含图片的 div */
div:has(img) {
  display: flex;
}
```

## 相关资源

- [MDN Web Docs: :has](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:has)
- [CSS-Tricks: :has](https://css-tricks.com/almanac/selectors/h/has/)