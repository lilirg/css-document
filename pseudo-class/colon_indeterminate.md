# :indeterminate

`:indeterminate` 伪类用于选择未定态的 UI 元素。

## 语法

```css
:indeterminate {
  /* CSS properties */
}
```

## 描述

`:indeterminate` 伪类匹配未定态值的 UI 元素。通常用于复选框（当 `indeterminate` 属性被设置为 `true` 时）和进度条（当进度未知时）。

## 示例

```css
/* 未定态的复选框 */
input[type="checkbox"]:indeterminate {
  background-color: gray;
}

/* 未定态的进度条 */
progress:indeterminate {
  background-color: #ccc;
  animation: indeterminate 1s infinite;
}

@keyframes indeterminate {
  0% { width: 0%; }
  100% { width: 100%; }
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

- [MDN: :indeterminate](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:indeterminate)
- [CSS Selectors Level 4 - :indeterminate](https://www.w3.org/TR/css-selectors-4/#indeterminate)