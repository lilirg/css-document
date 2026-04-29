# outline

outline 属性定义元素的轮廓。

## 语法

```css
outline: <outline-color> || <outline-style> || <outline-width>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<outline-color>` | 轮廓颜色 | `outline: red` |
| `<outline-style>` | 轮廓样式 | `outline: solid` |
| `<outline-width>` | 轮廓宽度 | `outline: 1px` |

## 示例

### 基础用法

```css
/* 单值 */
.single {
  outline: 1px solid red;
}

/* 多值 */
.multi {
  outline: 2px dashed blue;
}

/* 无轮廓 */
.none {
  outline: none;
}

/* 透明轮廓 */
.transparent {
  outline: 1px solid transparent;
}
```

### 高级用法

```css
/* 容器 */
.container {
  outline: 1px solid #ccc;
}

/* 静态 */
.static {
  outline: 1px solid #ccc;
}

/* 相对 */
.relative {
  outline: 1px solid #ccc;
}

/* 绝对 */
.absolute {
  outline: 1px solid #ccc;
}

/* 固定 */
.fixed {
  outline: 1px solid #ccc;
}

/* 粘性 */
.sticky {
  outline: 1px solid #ccc;
}

/* 响应式布局 */
.responsive {
  outline: 1px solid #ccc;
}

/* 卡片布局 */
.card {
  outline: 1px solid #ccc;
}

/* 表单布局 */
.form {
  outline: 1px solid #ccc;
}

/* 图片画廊 */
.gallery {
  outline: 1px solid #ccc;
}

/* 混合单位 */
.mixed-units {
  outline: 1px solid #ccc;
}

/* 带命名的项目 */
.named-items {
  outline: 1px solid #ccc;
}

/* 悬停效果 */
.card {
  transition: outline 0.3s ease-in-out;
}

.card:hover {
  outline: 2px solid #333;
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

- `outline` 可以用于任何元素
- `outline` 定义元素的轮廓
- 可以使用颜色、样式和宽度值

## 相关属性

- [`outline-width`](./outline-width)
- [`outline-style`](./outline-style)
- [`outline-color`](./outline-color)
- [`outline-offset`](./outline-offset)

## 相关资源

- [MDN Web Docs: outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)
- [CSS-Tricks: outline](https://css-tricks.com/almanac/properties/o/outline/)
- [W3C CSS UI](https://www.w3.org/TR/css-ui-4/)