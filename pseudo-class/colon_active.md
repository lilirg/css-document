# :active

`:active` 伪类用于选择用户激活（例如点击）的元素。

## 语法

```css
:active {
  /* CSS properties */
}
```

## 描述

`:active` 伪类匹配用户激活（例如点击）的元素。它通常用于链接、按钮和其他可交互元素，以提供视觉反馈。

当用户按下鼠标按钮时，元素进入 `:active` 状态；当用户释放鼠标按钮时，元素退出 `:active` 状态。

## 示例

```css
/* 链接被点击时 */
a:active {
  color: orange;
}

/* 按钮被点击时 */
button:active {
  background-color: #0056b3;
  transform: translateY(2px);
}

/* 任意元素被激活时 */
div:active {
  border: 2px solid red;
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

- [MDN: :active](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active)
- [CSS Selectors Level 3 - :active](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)