# :optional

`:optional` 伪类用于选择不是必填的表单元素。

## 语法

```css
:optional {
  /* CSS properties */
}
```

## 描述

`:optional` 伪类匹配不是必填的表单元素。当表单元素没有 `required` 属性时，它处于 `:optional` 状态。

## 示例

```css
/* 可选的输入框 */
input:optional {
  border: 1px solid #ccc;
}

/* 可选的文本域 */
textarea:optional {
  resize: both;
}

/* 可选的下拉框 */
select:optional {
  background-color: white;
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

- [MDN: :optional](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:optional)
- [CSS Selectors Level 4 - :optional](https://www.w3.org/TR/css-selectors-4/#optional)