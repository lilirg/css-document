# :blank

`:blank` 伪类用于选择空输入值的 `<input>` 元素。

## 语法

```css
:blank {
  /* CSS properties */
}
```

## 描述

`:blank` 伪类匹配空输入值的 `<input>` 元素。当输入元素的值为空字符串时，它处于 `:blank` 状态。

## 示例

```css
/* 空输入值的输入框 */
input:blank {
  border: 2px solid red;
}

/* 空输入值的文本域 */
textarea:blank {
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
}

/* 自定义样式 */
input:blank::after {
  content: "不能为空";
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

- [MDN: :blank](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:blank)
- [CSS Selectors Level 4 - :blank](https://www.w3.org/TR/css-selectors-4/#blank)