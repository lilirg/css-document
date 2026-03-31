# :last-child

`:last-child` 伪类用于选择作为其父元素的最后一个子元素的元素。

## 语法

```css
:last-child {
  /* CSS properties */
}
```

## 描述

`:last-child` 伪类匹配兄弟元素中最末的那个元素。它不考虑元素的类型，只要该元素是其父元素的最后一个子元素即可。

## 示例

```css
/* 列表中的最后一个列表项 */
li:last-child {
  border-bottom: none;
}

/* 段落中的最后一个子元素 */
div > *:last-child {
  margin-bottom: 0;
}

/* 最后一个段落 */
p:last-child {
  text-align: justify;
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

- [MDN: :last-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child)
- [CSS Selectors Level 3 - :last-child](https://www.w3.org/TR/CSS21/selector.html#last-child)