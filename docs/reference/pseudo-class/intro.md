# 伪类与伪元素

伪类和伪元素用于选择和样式化文档树中不存在于源文档中的元素或元素的部分。

## 伪类

伪类用于选择处于特定状态的元素，例如:hover、:active、:focus等。

## 伪元素

伪元素用于样式化元素的特定部分，例如::before、::after、::first-line等。

## 语法

```css
/* 伪类 */
selector:pseudo-class {
  property: value;
}

/* 伪元素 */
selector::pseudo-element {
  property: value;
}
```

## 相关资源

- [MDN Web Docs: 伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)
- [MDN Web Docs: 伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)
- [CSS-Tricks: Pseudo-classes](https://css-tricks.com/almanac/selectors/p/pseudo-classes/)
- [CSS-Tricks: Pseudo-elements](https://css-tricks.com/almanac/selectors/p/pseudo-elements/)