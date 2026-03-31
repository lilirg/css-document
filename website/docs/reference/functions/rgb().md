---
sidebar_position: 45
---

# rgb()

rgb() 函数用于定义 RGB 颜色值。

## 语法

```css
rgb(<red>, <green>, <blue>)
rgb(<red>, <green>, <blue> / <alpha>)
```

## 示例

```css
/* 基本 RGB 颜色 */
.color {
  color: rgb(255, 0, 0);
}

/* 半透明 */
.color {
  color: rgb(255, 0, 0, 0.5);
}

/* 百分比 */
.color {
  color: rgb(100%, 50%, 25%);
}

/* 带 alpha 通道 */
.color {
  color: rgb(255 0 0 / 0.5);
}
```

## 相关资源

- [MDN Web Docs: rgb()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/rgb)
- [CSS-Tricks: rgb()](https://css-tricks.com/snippets/css/rgb-colors/)