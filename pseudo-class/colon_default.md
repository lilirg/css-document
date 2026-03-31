# :default

`:default` 伪类用于选择一组相似的元素中默认的一个或更多的 UI 元素。

## 语法

```css
:default {
  /* CSS properties */
}
```

## 描述

`:default` 伪类匹配一组相似的元素中默认的一个或更多的 UI 元素。例如，在一组单选按钮中，默认选中的那个。

## 示例

```css
/* 默认选中的单选按钮 */
input[type="radio"]:default {
  outline: 2px solid blue;
}

/* 默认的提交按钮 */
button:default {
  background-color: #007bff;
  color: white;
}

/* 默认的复选框 */
input[type="checkbox"]:default {
  background-color: #e0e0e0;
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

- [MDN: :default](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default)
- [CSS Selectors Level 4 - :default](https://www.w3.org/TR/css-selectors-4/#default)