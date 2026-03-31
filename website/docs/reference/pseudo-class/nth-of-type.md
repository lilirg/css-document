---
sidebar_position: 155
---

# :nth-of-type()

:nth-of-type() 伪类匹配其父元素的同类型子元素中的第 n 个。

## 语法

```css
selector:nth-of-type(an+b) {
  property: value;
}
```

## 示例

```css
/* 匹配第 1 个段落 */
p:nth-of-type(1) {
  font-weight: bold;
}

/* 匹配第 2 个段落 */
p:nth-of-type(2) {
  font-style: italic;
}

/* 匹配偶数位置的段落 */
p:nth-of-type(even) {
  background-color: #f5f5f5;
}

/* 匹配奇数位置的段落 */
p:nth-of-type(odd) {
  background-color: #fff;
}

/* 匹配前 3 个段落 */
p:nth-of-type(-n+3) {
  border-bottom: 2px solid #ccc;
}

/* 匹配最后 3 个段落 */
p:nth-of-type(n+3) {
  margin-top: 10px;
}
```

## 相关资源

- [MDN Web Docs: :nth-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type)
- [CSS-Tricks: :nth-of-type](https://css-tricks.com/almanac/selectors/n/nth-of-type/)