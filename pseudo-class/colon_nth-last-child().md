# :nth-last-child()

`:nth-last-child()` 伪类用于从后往前倒数选择兄弟元素。

## 语法

```css
:nth-last-child(an+b) {
  /* CSS properties */
}
```

## 描述

`:nth-last-child()` 伪类匹配兄弟元素，从后往前倒数。兄弟元素按照 `an+b` 形式的式子进行匹配。

## 示例

```css
/* 从后往前数所有奇数个的 li 元素 */
li:nth-last-child(2n+1) {
  background-color: #f0f0f0;
}

/* 倒数第二个 li 元素 */
li:nth-last-child(2) {
  font-weight: bold;
}

/* 最后一个 li 元素 */
li:nth-last-child(1) {
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

- [MDN: :nth-last-child()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child)
- [CSS Selectors Level 3 - :nth-last-child()](https://www.w3.org/TR/CSS21/selector.html#nth-last-child-pseudo)