# rgba()

rgba() 函数用于定义 RGBA 颜色值（带透明度）。

## 语法

```css
rgba(<red>, <green>, <blue>, <alpha>)
```

## 示例

```css
/* 基本 RGBA 颜色 */
.color {
  color: rgba(255, 0, 0, 0.5);
}

/* 完全透明 */
.color {
  color: rgba(255, 0, 0, 0);
}

/* 不透明 */
.color {
  color: rgba(255, 0, 0, 1);
}

/* 百分比 */
.color {
  color: rgba(100%, 50%, 25%, 0.8);
}
```

## 相关资源

- [MDN Web Docs: rgba()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/rgba)
- [CSS-Tricks: rgba()](https://css-tricks.com/snippets/css/rgba-colors/)