# :not()

`:not()` 伪类用于选择不匹配指定选择器的元素。

## 语法

```css
:not(selector) {
  /* CSS properties */
}
```

## 描述

`:not()` 伪类匹配不匹配传入选择器的元素。它是一个否定选择器，可以用于排除特定元素。

## 示例

```css
/* 不带 class 的 p 元素 */
p:not(.special) {
  color: gray;
}

/* 不是第一个子元素的 li 元素 */
li:not(:first-child) {
  margin-left: 10px;
}

/* 不是链接的 a 元素 */
a:not(:link):not(:visited) {
  color: black;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 9+ |

## 相关链接

- [MDN: :not()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)
- [CSS Selectors Level 3 - :not()](https://www.w3.org/TR/CSS21/selector.html#negation)