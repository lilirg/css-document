# :last-of-type

`:last-of-type` 伪类用于选择兄弟元素中最后一个某种类型的元素。

## 语法

```css
:last-of-type {
  /* CSS properties */
}
```

## 描述

`:last-of-type` 伪类匹配兄弟元素中最后一个某种类型的元素。与 `:last-child` 不同，`:last-of-type` 只考虑相同类型的元素。

## 示例

```css
/* 段落中的最后一个 p 元素 */
p:last-of-type {
  margin-bottom: 0;
}

/* div 中的最后一个 span 元素 */
div span:last-of-type {
  color: blue;
}

/* 列表中的最后一个 li 元素 */
ul li:last-of-type {
  padding-bottom: 10px;
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

- [MDN: :last-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type)
- [CSS Selectors Level 3 - :last-of-type](https://www.w3.org/TR/css3-selectors/#last-of-type-pseudo)