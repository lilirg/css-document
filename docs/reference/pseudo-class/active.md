# :active

:active 伪类匹配用户激活的元素，如点击按钮或按下键盘上的元素。

## 语法

```css
selector:active {
  property: value;
}
```

## 示例

```css
/* 匹配被点击的链接 */
a:active {
  color: red;
}

/* 匹配被按下的按钮 */
button:active {
  background-color: #ddd;
  transform: translateY(2px);
}

/* 匹配被激活的菜单项 */
.menu-item:active {
  background-color: #333;
  color: white;
}

/* 匹配被激活的表单元素 */
input:active {
  border-color: blue;
}
```

## 相关资源

- [MDN Web Docs: :active](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active)
- [CSS-Tricks: :active](https://css-tricks.com/almanac/selectors/a/active/)