# :out-of-range

`:out-of-range` 伪类用于选择值超出指定范围的输入元素。

## 语法

```css
:out-of-range {
  /* CSS properties */
}
```

## 描述

`:out-of-range` 伪类匹配值超出指定范围的输入元素。它适用于具有 `min` 和 `max` 属性的输入元素，如 `<input type="number">` 和 `<input type="range">`。

## 示例

```css
/* 数值输入框超出范围时 */
input[type="number"]:out-of-range {
  border: 2px solid red;
  background-color: #ffe6e6;
}

/* 范围滑块超出范围时 */
input[type="range"]:out-of-range {
  accent-color: red;
}

/* 自定义样式 */
input:out-of-range::after {
  content: "✗";
  color: red;
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

- [MDN: :out-of-range](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:out-of-range)
- [CSS Selectors Level 4 - :out-of-range](https://www.w3.org/TR/css-selectors-4/#out-of-range)