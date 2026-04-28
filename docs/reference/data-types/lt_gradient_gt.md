# `gradient`

`gradient` 数据类型表示渐变值。

## 示例

```css
/* linear-gradient */
.element {
  background-image: linear-gradient(red, blue);
  background-image: linear-gradient(45deg, red, blue);
}

/* radial-gradient */
.element {
  background-image: radial-gradient(red, blue);
  background-image: radial-gradient(circle, red, blue);
}

/* repeating-linear-gradient */
.element {
  background-image: repeating-linear-gradient(
    45deg,
    red,
    red 10px,
    blue 10px,
    blue 20px
  );
}

/* repeating-radial-gradient */
.element {
  background-image: repeating-radial-gradient(
    circle,
    red,
    red 10px,
    blue 10px,
    blue 20px
  );
}
```

## 相关资源

- [MDN Web Docs: gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient)
- [CSS-Tricks: gradient](https://css-tricks.com/almanac/properties/b/background-image/)
