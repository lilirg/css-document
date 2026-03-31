# :nth-last-of-type()

`:nth-last-of-type()` 伪类用于从后往前倒数选择某种类型的一列兄弟元素。

## 语法

```css
:nth-last-of-type(an+b) {
  /* CSS properties */
}
```

## 描述

`:nth-last-of-type()` 伪类匹配某种类型的一列兄弟元素（比如 `<p>` 元素），从后往前倒数。兄弟元素按照 `an+b` 形式的式子进行匹配。

## 示例

```css
/* 从后往前数所有奇数个的 p 元素 */
p:nth-last-of-type(2n+1) {
  color: blue;
}

/* 倒数第二个 p 元素 */
p:nth-last-of-type(2) {
  font-weight: bold;
}

/* 最后一个 p 元素 */
p:nth-last-of-type(1) {
  margin-bottom: 0;
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

- [MDN: :nth-last-of-type()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type)
- [CSS Selectors Level 3 - :nth-last-of-type()](https://www.w3.org/TR/CSS21/selector.html#nth-last-of-type-pseudo)