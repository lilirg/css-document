# :in-range

`:in-range` 伪类用于选择值在指定范围内的输入元素。

## 语法

```css
:in-range {
  /* CSS properties */
}
```

## 描述

`:in-range` 伪类匹配值在指定范围内的输入元素。它适用于具有 `min` 和 `max` 属性的输入元素，如 `<input type="number">` 和 `<input type="range">`。

## 示例

```css
/* 数值输入框在范围内时 */
input[type="number"]:in-range {
  border: 2px solid green;
}

/* 范围滑块在范围内时 */
input[type="range"]:in-range {
  accent-color: green;
}

/* 自定义样式 */
input:in-range::after {
  content: "✓";
  color: green;
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

- [MDN: :in-range](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:in-range)
- [CSS Selectors Level 4 - :in-range](https://www.w3.org/TR/css-selectors-4/#range)