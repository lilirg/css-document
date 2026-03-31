# :is()

`:is()` 伪类用于匹配传入的选择器列表中的任何选择器。

## 语法

```css
:is(selector-list) {
  /* CSS properties */
}
```

## 描述

`:is()` 伪类匹配传入的选择器列表中的任何选择器。它是一个函数式伪类，可以接受多个选择器作为参数。

## 示例

```css
/* 匹配 h1, h2, h3 */
:is(h1, h2, h3) {
  font-weight: bold;
}

/* 匹配 .special 或 .highlight */
:is(.special, .highlight) {
  color: red;
}

/* 匹配 p 或 div */
:is(p, div) {
  margin-bottom: 1em;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 不支持 | IE 不支持 |

## 相关链接

- [MDN: :is()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is)
- [CSS Selectors Level 4 - :is()](https://www.w3.org/TR/css-selectors-4/#matches)