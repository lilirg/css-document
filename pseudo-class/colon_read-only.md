# :read-only

`:read-only` 伪类用于选择用户不可更改的元素。

## 语法

```css
:read-only {
  /* CSS properties */
}
```

## 描述

`:read-only` 伪类匹配用户不可更改的元素。当元素具有 `readonly` 属性或其类型不允许用户输入时，它处于 `:read-only` 状态。

## 示例

```css
/* 只读的输入框 */
input:read-only {
  background-color: #f0f0f0;
  color: #666;
}

/* 只读的文本域 */
textarea:read-only {
  border: 1px solid #ccc;
}

/* 只读的下拉框 */
select:read-only {
  cursor: not-allowed;
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

- [MDN: :read-only](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-only)
- [CSS Selectors Level 4 - :read-only](https://www.w3.org/TR/css-selectors-4/#read-only)