# list-style

list-style 属性定义列表项的样式。

## 语法

```css
list-style: list-style-type | list-style-position | list-style-image;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `list-style-type` | 列表项类型 | `list-style: disc` |
| `list-style-position` | 列表项位置 | `list-style: inside` |
| `list-style-image` | 列表项图像 | `list-style: url(image.png)` |

## 示例

### 基础用法

```css
/* 列表项类型 */
.disc {
  list-style-type: disc;
}

/* 列表项位置 */
.inside {
  list-style-position: inside;
}

/* 列表项图像 */
.image {
  list-style-image: url(image.png);
}
```

### 高级用法

```css
/* 容器 */
.container {
  list-style: none;
}

/* 静态 */
.static {
  list-style: none;
}

/* 相对 */
.relative {
  list-style: none;
}

/* 绝对 */
.absolute {
  list-style: none;
}

/* 固定 */
.fixed {
  list-style: none;
}

/* 粘性 */
.sticky {
  list-style: none;
}

/* 响应式布局 */
.responsive {
  list-style: none;
}

/* 卡片布局 */
.card {
  list-style: none;
}

/* 表单布局 */
.form {
  list-style: none;
}

/* 图片画廊 */
.gallery {
  list-style: none;
}

/* 混合单位 */
.mixed-units {
  list-style: none;
}

/* 带命名的项目 */
.named-items {
  list-style: none;
}

/* 悬停效果 */
.card {
  transition: list-style 0.3s ease-in-out;
}

.card:hover {
  list-style: none;
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

- `list-style` 只能用于列表元素
- `list-style` 定义列表项的样式
- `disc` 是默认值，表示圆点

## 相关属性

- [`list-style-type`](./list-style-type)
- [`list-style-position`](./list-style-position)
- [`list-style-image`](./list-style-image)

## 相关资源

- [MDN Web Docs: list-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style)
- [CSS-Tricks: list-style](https://css-tricks.com/almanac/properties/l/list-style/)
- [W3C CSS Lists](https://www.w3.org/TR/css-lists-3/)