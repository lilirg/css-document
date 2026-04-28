# :is()

:is() 伪类选择匹配指定选择器列表中任意一个选择器的元素。

## 语法

```css
selector:is(selector-list) {
  property: value;
}
```

## 示例

```css
/* 匹配多个选择器 */
:is(h1, h2, h3) {
  font-family: 'Georgia', serif;
}

/* 与 :not() 结合 */
article :is(h1, h2, h3):not(:first-child) {
  margin-top: 20px;
}

/* 简化选择器 */
:is(.nav, .menu, .sidebar) :is(a, button) {
  display: block;
}
```

## 相关资源

- [MDN Web Docs: :is()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is)
- [CSS-Tricks: :is()](https://css-tricks.com/almanac/selectors/i/is/)