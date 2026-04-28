# :nth-last-child()

:nth-last-child() 伪类匹配其父元素的倒数第 n 个子元素。

## 语法

```css
selector:nth-last-child(an+b) {
  property: value;
}
```

## 示例

```css
/* 匹配倒数第 1 个子元素 */
li:nth-last-child(1) {
  border-bottom: none;
}

/* 匹配倒数第 2 个子元素 */
li:nth-last-child(2) {
  font-weight: bold;
}

/* 匹配倒数偶数位置的子元素 */
li:nth-last-child(even) {
  background-color: #f5f5f5;
}

/* 匹配倒数奇数位置的子元素 */
li:nth-last-child(odd) {
  background-color: #fff;
}

/* 匹配最后 3 个子元素 */
li:nth-last-child(-n+3) {
  border-top: 2px solid #ccc;
}

/* 匹配前 3 个子元素 */
li:nth-last-child(n+3) {
  margin-bottom: 10px;
}
```

## 相关资源

- [MDN Web Docs: :nth-last-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child)
- [CSS-Tricks: :nth-last-child](https://css-tricks.com/almanac/selectors/n/nth-last-child/)