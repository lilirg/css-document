# :first-child

`:first-child` 伪类用于选择作为其父元素的第一个子元素的元素。

## 语法

```css
:first-child {
  /* CSS properties */
}
```

## 描述

`:first-child` 伪类匹配兄弟元素中的第一个元素。它不考虑元素的类型，只要该元素是其父元素的第一个子元素即可。

## 示例

```css
/* 列表中的第一个列表项 */
li:first-child {
  font-weight: bold;
}

/* 段落中的第一个子元素 */
div > *:first-child {
  margin-top: 0;
}

/* 第一个段落 */
p:first-child {
  text-indent: 0;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 7+ |

## 相关链接

- [MDN: :first-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child)
- [CSS Selectors Level 3 - :first-child](https://www.w3.org/TR/CSS21/selector.html#first-child)