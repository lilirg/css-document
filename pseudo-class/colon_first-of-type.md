# :first-of-type

`:first-of-type` 伪类用于选择兄弟元素中第一个某种类型的元素。

## 语法

```css
:first-of-type {
  /* CSS properties */
}
```

## 描述

`:first-of-type` 伪类匹配兄弟元素中第一个某种类型的元素。与 `:first-child` 不同，`:first-of-type` 只考虑相同类型的元素。

## 示例

```css
/* 段落中的第一个 p 元素 */
p:first-of-type {
  font-weight: bold;
}

/* div 中的第一个 span 元素 */
div span:first-of-type {
  color: red;
}

/* 列表中的第一个 li 元素 */
ul li:first-of-type {
  list-style-type: none;
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

- [MDN: :first-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type)
- [CSS Selectors Level 3 - :first-of-type](https://www.w3.org/TR/css3-selectors/#first-of-type-pseudo)