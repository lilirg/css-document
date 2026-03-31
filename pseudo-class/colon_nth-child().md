# :nth-child()

`:nth-child()` 伪类用于选择一列兄弟元素中的元素，按照 `an+b` 形式的式子进行匹配。

## 语法

```css
:nth-child(an+b) {
  /* CSS properties */
}
```

## 描述

`:nth-child()` 伪类匹配兄弟元素中的元素，按照 `an+b` 形式的式子进行匹配。其中 `a` 和 `b` 是整数，`n` 是从 0 开始的变量。

## 示例

```css
/* 所有奇数个的 li 元素 */
li:nth-child(2n+1) {
  background-color: #f0f0f0;
}

/* 所有偶数个的 li 元素 */
li:nth-child(2n) {
  background-color: #e0e0e0;
}

/* 第一个 li 元素 */
li:nth-child(1) {
  font-weight: bold;
}

/* 最后一个 li 元素 */
li:nth-child(last) {
  border-bottom: none;
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

- [MDN: :nth-child()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)
- [CSS Selectors Level 3 - :nth-child()](https://www.w3.org/TR/CSS21/selector.html#nth-child-pseudo)