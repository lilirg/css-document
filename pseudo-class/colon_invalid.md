# :invalid

`:invalid` 伪类用于选择处于无效状态的表单元素。

## 语法

```css
:invalid {
  /* CSS properties */
}
```

## 描述

`:invalid` 伪类匹配处于无效状态的表单元素。当输入元素的值不符合其类型或验证规则（如 `required`、`min`、`max`、`pattern` 等）时，元素进入 `:invalid` 状态。

## 示例

```css
/* 无效的输入框 */
input:invalid {
  border: 2px solid red;
  background-color: #ffe6e6;
}

/* 无效的邮箱输入 */
input[type="email"]:invalid {
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
}

/* 无效的 URL 输入 */
input[type="url"]:invalid {
  outline: 2px solid red;
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

- [MDN: :invalid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid)
- [CSS Selectors Level 4 - :invalid](https://www.w3.org/TR/css-selectors-4/#invalid)