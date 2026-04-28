# :not()

:not() 伪类选择不匹配其参数中选择器的元素。

## 语法

```css
selector:not(selector-list) {
  property: value;
}
```

## 示例

```css
/* 不是段落的元素 */
:not(p) {
  margin: 0;
}

/* 不是链接的元素 */
a:not(:link) {
  color: gray;
}

/* 不包含特定类的元素 */
div:not(.highlight) {
  background-color: #f0f0f0;
}

/* 不是第一个或最后一个的列表项 */
li:not(:first-child):not(:last-child) {
  border-left: 1px solid #ccc;
}
```

## 相关资源

- [MDN Web Docs: :not](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)
- [CSS-Tricks: :not](https://css-tricks.com/almanac/selectors/n/not/)