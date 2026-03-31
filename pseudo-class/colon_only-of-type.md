# :only-of-type

`:only-of-type` 伪类用于选择兄弟元素中某类型仅有的元素。

## 语法

```css
:only-of-type {
  /* CSS properties */
}
```

## 描述

`:only-of-type` 伪类匹配兄弟元素中某类型仅有的元素。当元素是其父元素中唯一某种类型的元素时，它处于 `:only-of-type` 状态。

## 示例

```css
/* 唯一的 p 元素 */
p:only-of-type {
  font-weight: bold;
}

/* 唯一的 span 元素 */
span:only-of-type {
  color: red;
}

/* 唯一的 div 元素 */
div:only-of-type {
  margin: 0 auto;
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

- [MDN: :only-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type)
- [CSS Selectors Level 3 - :only-of-type](https://www.w3.org/TR/CSS21/selector.html#only-of-type)