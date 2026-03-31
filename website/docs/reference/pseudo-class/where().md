---
sidebar_position: 167
---

# :where()

:where() 伪类与 :is() 类似，但它接受选择器列表作为参数，但不会增加选择器的特异性。

## 语法

```css
selector:where(selector-list) {
  property: value;
}
```

## 示例

```css
/* 匹配 h1, h2, h3，但不增加特异性 */
:where(h1, h2, h3) {
  font-weight: bold;
}

/* 匹配段落或列表项，但不增加特异性 */
:where(p, li) {
  line-height: 1.6;
}

/* 匹配特定类的元素，但不增加特异性 */
:where(.article, .post) {
  margin-bottom: 20px;
}

/* 嵌套选择器 */
:where(.header, .footer) :where(h1, h2) {
  font-size: 1.5em;
}
```

## 相关资源

- [MDN Web Docs: :where](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:where)
- [CSS-Tricks: :where](https://css-tricks.com/almanac/selectors/w/where/)