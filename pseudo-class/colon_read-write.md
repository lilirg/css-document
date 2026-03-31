# :read-write

`:read-write` 伪类用于选择用户可更改的元素。

## 语法

```css
:read-write {
  /* CSS properties */
}
```

## 描述

`:read-write` 伪类匹配用户可更改的元素。当元素没有 `readonly` 属性且其类型允许用户输入时，它处于 `:read-write` 状态。

## 示例

```css
/* 可读写的输入框 */
input:read-write {
  border: 1px solid #ccc;
}

/* 可读写的文本域 */
textarea:read-write {
  resize: vertical;
}

/* 可读写的下拉框 */
select:read-write {
  cursor: pointer;
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

- [MDN: :read-write](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-write)
- [CSS Selectors Level 4 - :read-write](https://www.w3.org/TR/css-selectors-4/#read-write)