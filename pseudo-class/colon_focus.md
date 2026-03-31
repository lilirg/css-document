# :focus

`:focus` 伪类用于选择获得键盘焦点或鼠标焦点的元素。

## 语法

```css
:focus {
  /* CSS properties */
}
```

## 描述

`:focus` 伪类匹配获得焦点的元素。当用户通过键盘导航（如 Tab 键）或鼠标点击使元素获得焦点时，元素进入 `:focus` 状态。

## 示例

```css
/* 输入框获得焦点时 */
input:focus {
  outline: 2px solid blue;
  border-color: blue;
}

/* 文本域获得焦点时 */
textarea:focus {
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}

/* 链接获得焦点时 */
a:focus {
  outline: 2px dashed red;
  background-color: yellow;
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

- [MDN: :focus](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)
- [CSS Selectors Level 3 - :focus](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)