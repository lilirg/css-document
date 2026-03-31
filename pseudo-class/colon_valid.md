# :valid

`:valid` 伪类用于选择处于有效状态的表单元素。

## 语法

```css
:valid {
  /* CSS properties */
}
```

## 描述

`:valid` 伪类匹配处于有效状态的表单元素。当输入元素的值符合其类型或验证规则（如 `required`、`min`、`max`、`pattern` 等）时，元素进入 `:valid` 状态。

## 示例

```css
/* 有效的输入框 */
input:valid {
  border: 2px solid green;
  background-color: #e6ffe6;
}

/* 有效的邮箱输入 */
input[type="email"]:valid {
  box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

/* 有效的 URL 输入 */
input[type="url"]:valid {
  outline: 2px solid green;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 不支持 | IE 不支持 HTML5 表单验证 |

## 相关链接

- [MDN: :valid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid)
- [CSS Selectors Level 4 - :valid](https://www.w3.org/TR/css-selectors-4/#valid)