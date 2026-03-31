---
sidebar_position: 151
---

# :nth-child()

:nth-child() 伪类匹配其父元素的第 n 个子元素。

## 语法

```css
selector:nth-child(an+b) {
  property: value;
}
```

## 示例

```css
/* 匹配第 1 个子元素 */
li:nth-child(1) {
  border-top: none;
}

/* 匹配第 2 个子元素 */
li:nth-child(2) {
  font-weight: bold;
}

/* 匹配偶数位置的子元素 */
li:nth-child(even) {
  background-color: #f5f5f5;
}

/* 匹配奇数位置的子元素 */
li:nth-child(odd) {
  background-color: #fff;
}

/* 匹配前 3 个子元素 */
li:nth-child(-n+3) {
  border-bottom: 2px solid #ccc;
}

/* 匹配最后 3 个子元素 */
li:nth-child(n+3) {
  margin-top: 10px;
}
```

## 相关资源

- [MDN Web Docs: :nth-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)
- [CSS-Tricks: :nth-child](https://css-tricks.com/almanac/selectors/n/nth-child/)