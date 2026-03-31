---
sidebar_position: 12
---

# :not()

:not() 伪类选择不匹配指定选择器的元素。

## 语法

```css
selector:not(exclusion-selector) {
  property: value;
}
```

## 示例

```css
/* 排除特定类 */
li:not(.active) {
  opacity: 0.5;
}

/* 排除最后一个元素 */
li:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

/* 排除禁用元素 */
input:not(:disabled) {
  background-color: white;
}

/* 排除特定类型 */
input:not([type="hidden"]) {
  margin-bottom: 10px;
}
```

## 相关资源

- [MDN Web Docs: :not()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)
- [CSS-Tricks: :not()](https://css-tricks.com/almanac/selectors/n/not/)