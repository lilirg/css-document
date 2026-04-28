# :is()

:is() 伪类接受选择器列表作为参数，匹配列表中任意一个选择器匹配的元素。

## 语法

```css
selector:is(selector-list) {
  property: value;
}
```

## 示例

```css
/* 匹配 h1, h2, h3 */
:is(h1, h2, h3) {
  font-weight: bold;
}

/* 匹配段落或列表项 */
:is(p, li) {
  line-height: 1.6;
}

/* 匹配特定类的元素 */
:is(.article, .post) {
  margin-bottom: 20px;
}

/* 嵌套选择器 */
:is(.header, .footer) :is(h1, h2) {
  font-size: 1.5em;
}
```

## 相关资源

- [MDN Web Docs: :is](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is)
- [CSS-Tricks: :is](https://css-tricks.com/almanac/selectors/i/is/)