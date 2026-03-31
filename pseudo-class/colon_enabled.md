# :enabled

`:enabled` 伪类用于选择处于启用状态的表单元素。

## 语法

```css
:enabled {
  /* CSS properties */
}
```

## 描述

`:enabled` 伪类匹配处于启用状态的用户界面元素，通常是表单元素如 `<input>`、`<button>`、`<select>`、`<textarea>` 等。当元素没有 `disabled` 属性时，它处于 `:enabled` 状态。

## 示例

```css
/* 启用的输入框 */
input:enabled {
  border: 1px solid #ccc;
}

/* 启用的按钮 */
button:enabled {
  cursor: pointer;
}

/* 启用的文本域 */
textarea:enabled {
  resize: vertical;
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

- [MDN: :enabled](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled)
- [CSS Selectors Level 3 - :enabled](https://www.w3.org/TR/css3-selectors/#enabled)