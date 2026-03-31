# :hover

`:hover` 伪类用于选择用户将鼠标指针悬停在元素上时的元素。

## 语法

```css
:hover {
  /* CSS properties */
}
```

## 描述

`:hover` 伪类匹配用户将鼠标指针悬停在元素上时的元素。它通常用于链接、按钮和其他可交互元素，以提供视觉反馈。

当用户将鼠标指针移动到元素上时，元素进入 `:hover` 状态；当用户将鼠标指针移出元素时，元素退出 `:hover` 状态。

## 示例

```css
/* 链接悬停时 */
a:hover {
  color: blue;
  text-decoration: underline;
}

/* 按钮悬停时 */
button:hover {
  background-color: #0069d9;
  cursor: pointer;
}

/* 任意元素悬停时 */
div:hover {
  border: 2px solid green;
  transform: scale(1.05);
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

- [MDN: :hover](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)
- [CSS Selectors Level 3 - :hover](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)