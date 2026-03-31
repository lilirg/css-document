# :nth-of-type()

`:nth-of-type()` 伪类用于选择某种类型的一列兄弟元素，按照 `an+b` 形式的式子进行匹配。

## 语法

```css
:nth-of-type(an+b) {
  /* CSS properties */
}
```

## 描述

`:nth-of-type()` 伪类匹配某种类型的一列兄弟元素（比如 `<p>` 元素），按照 `an+b` 形式的式子进行匹配。

## 示例

```css
/* 所有奇数个的 p 元素 */
p:nth-of-type(2n+1) {
  color: blue;
}

/* 所有偶数个的 p 元素 */
p:nth-of-type(2n) {
  color: red;
}

/* 第一个 p 元素 */
p:nth-of-type(1) {
  font-weight: bold;
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

- [MDN: :nth-of-type()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type)
- [CSS Selectors Level 3 - :nth-of-type()](https://www.w3.org/TR/CSS21/selector.html#nth-of-type-pseudo)