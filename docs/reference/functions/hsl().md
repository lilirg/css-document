# hsl()

hsl() 函数用于定义 HSL 颜色值（色相、饱和度、亮度）。

## 语法

```css
hsl(<hue>, <saturation>, <lightness>)
hsl(<hue>, <saturation>, <lightness> / <alpha>)
```

## 示例

```css
/* 基本 HSL 颜色 */
.color {
  color: hsl(0, 100%, 50%);
}

/* 红色 */
.color {
  color: hsl(0, 100%, 50%);
}

/* 绿色 */
.color {
  color: hsl(120, 100%, 50%);
}

/* 蓝色 */
.color {
  color: hsl(240, 100%, 50%);
}

/* 带透明度 */
.color {
  color: hsl(0, 100%, 50%, 0.5);
}
```

## 相关资源

- [MDN Web Docs: hsl()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/hsl)
- [CSS-Tricks: hsl()](https://css-tricks.com/snippets/css/hsl-colors/)