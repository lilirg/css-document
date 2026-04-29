# outline-color

outline-color 属性定义元素的轮廓颜色。

## 语法

```css
outline-color: <color> | invert;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<color>` | 颜色 | `outline-color: red` |
| `invert` | 反转 | `outline-color: invert` |

## 示例

### 基础用法

```css
/* 颜色 */
.color {
  outline-color: red;
}

/* 十六进制 */
.hex {
  outline-color: #ff0000;
}

/* RGB */
.rgb {
  outline-color: rgb(255, 0, 0);
}

/* RGBA */
.rgba {
  outline-color: rgba(255, 0, 0, 0.5);
}

/* HSL */
.hsl {
  outline-color: hsl(0, 100%, 50%);
}

/* HSLA */
.hsla {
  outline-color: hsla(0, 100%, 50%, 0.5);
}

/* 反转 */
.invert {
  outline-color: invert;
}
```

### 高级用法

```css
/* 容器 */
.container {
  outline-color: #ccc;
}

/* 静态 */
.static {
  outline-color: #ccc;
}

/* 相对 */
.relative {
  outline-color: #ccc;
}

/* 绝对 */
.absolute {
  outline-color: #ccc;
}

/* 固定 */
.fixed {
  outline-color: #ccc;
}

/* 粘性 */
.sticky {
  outline-color: #ccc;
}

/* 响应式布局 */
.responsive {
  outline-color: #ccc;
}

/* 卡片布局 */
.card {
  outline-color: #ccc;
}

/* 表单布局 */
.form {
  outline-color: #ccc;
}

/* 图片画廊 */
.gallery {
  outline-color: #ccc;
}

/* 混合单位 */
.mixed-units {
  outline-color: #ccc;
}

/* 带命名的项目 */
.named-items {
  outline-color: #ccc;
}

/* 悬停效果 */
.card {
  transition: outline-color 0.3s ease-in-out;
}

.card:hover {
  outline-color: #333;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| iOS Safari | 1+ |
| Android Browser | 1+ |
| Chrome for Android | 18+ |

## 注意事项

- `outline-color` 可以用于任何元素
- `outline-color` 定义元素的轮廓颜色
- 可以使用颜色值或反转值

## 相关属性

- [`outline`](./outline)
- [`outline-width`](./outline-width)
- [`outline-style`](./outline-style)

## 相关资源

- [MDN Web Docs: outline-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-color)
- [CSS-Tricks: outline-color](https://css-tricks.com/almanac/properties/o/outline-color/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)