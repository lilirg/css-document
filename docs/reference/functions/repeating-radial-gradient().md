# repeating-radial-gradient()

repeating-radial-gradient() 函数用于创建重复的径向渐变图像。

## 语法

```css
repeating-radial-gradient(
  [ <shape> || <size> ]?
  [ at <position> ]?,
  <color-stop-list>
)
```

## 示例

```css
/* 重复径向渐变 */
.background {
  background: repeating-radial-gradient(
    circle,
    red,
    red 10px,
    blue 10px,
    blue 20px
  );
}

/* 圆环效果 */
.background {
  background: repeating-radial-gradient(
    circle at center,
    #000 0,
    #000 10px,
    #fff 10px,
    #fff 20px
  );
}
```

## 相关资源

- [MDN Web Docs: repeating-radial-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/repeating-radial-gradient)
- [CSS-Tricks: repeating-radial-gradient()](https://css-tricks.com/snippets/css/repeating-gradients/)