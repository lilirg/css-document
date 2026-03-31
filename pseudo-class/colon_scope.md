# :scope

`:scope` 伪类用于匹配任何为参考点元素的元素。

## 语法

```css
:scope {
  /* CSS properties */
}
```

## 描述

`:scope` 伪类匹配任何为参考点元素的元素。在 CSS 中，参考点元素通常是当前样式作用域的根元素。

## 示例

```css
/* 当前作用域的根元素 */
:scope {
  background-color: #f0f0f0;
}

/* 在 shadow DOM 中使用 */
:host(:scope) {
  display: block;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 不支持 | IE 不支持 |

## 相关链接

- [MDN: :scope](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope)
- [CSS Selectors Level 4 - :scope](https://www.w3.org/TR/css-selectors-4/#scope-pseudo)