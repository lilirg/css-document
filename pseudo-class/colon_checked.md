# :checked

`:checked` 伪类用于选择处于选中状态的单选按钮或复选框。

## 语法

```css
:checked {
  /* CSS properties */
}
```

## 描述

`:checked` 伪类匹配处于选中状态的单选按钮（`<input type="radio">`）或复选框（`<input type="checkbox">`）元素。

## 示例

```css
/* 复选框选中时 */
input[type="checkbox"]:checked {
  background-color: green;
}

/* 单选按钮选中时 */
input[type="radio"]:checked {
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}

/* 自定义复选框样式 */
input[type="checkbox"]:checked + label {
  color: green;
  font-weight: bold;
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

- [MDN: :checked](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)
- [CSS Selectors Level 3 - :checked](https://www.w3.org/TR/css3-selectors/#checkbox)