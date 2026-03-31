# :required

`:required` 伪类用于选择必填的表单元素。

## 语法

```css
:required {
  /* CSS properties */
}
```

## 描述

`:required` 伪类匹配必填的表单元素。当表单元素具有 `required` 属性时，它处于 `:required` 状态。

## 示例

```css
/* 必填的输入框 */
input:required {
  border: 2px solid red;
}

/* 必填的文本域 */
textarea:required {
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
}

/* 必填的下拉框 */
select:required {
  background-color: #fff0f0;
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

- [MDN: :required](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required)
- [CSS Selectors Level 4 - :required](https://www.w3.org/TR/css-selectors-4/#required)