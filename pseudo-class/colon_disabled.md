# :disabled

`:disabled` 伪类用于选择处于禁用状态的表单元素。

## 语法

```css
:disabled {
  /* CSS properties */
}
```

## 描述

`:disabled` 伪类匹配处于禁用状态的用户界面元素，通常是表单元素如 `<input>`、`<button>`、`<select>`、`<textarea>` 等。当元素具有 `disabled` 属性时，它进入 `:disabled` 状态。

## 示例

```css
/* 禁用的输入框 */
input:disabled {
  background-color: #e0e0e0;
  color: #888;
}

/* 禁用的按钮 */
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 禁用的文本域 */
textarea:disabled {
  border: 1px solid #ccc;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | |

## 相关链接

- [MDN: :disabled](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled)
- [CSS Selectors Level 3 - :disabled](https://www.w3.org/TR/css3-selectors/#disabled)