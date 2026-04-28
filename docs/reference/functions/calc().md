# calc()

calc() 函数用于动态计算长度值。

## 语法

```css
calc(<expression>)
```

## 示例

```css
/* 宽度计算 */
.element {
  width: calc(100% - 80px);
}

/* 高度计算 */
.element {
  height: calc(50vh + 20px);
}

/* 嵌套计算 */
.element {
  margin-left: calc(10px + 5% * 2);
}

/* 与 transform 结合 */
.element {
  transform: translateX(calc(50% - 50px));
}
```

## 相关资源

- [MDN Web Docs: calc()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)
- [CSS-Tricks: calc()](https://css-tricks.com/a-complete-guide-to-calc-in-css/)