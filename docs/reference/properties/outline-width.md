# outline-width

outline-width 属性定义元素的轮廓宽度。

## 语法

```css
outline-width: <length> | thin | medium | thick;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<length>` | 长度 | `outline-width: 1px` |
| `thin` | 细 | `outline-width: thin` |
| `medium` | 中等 | `outline-width: medium` |
| `thick` | 粗 | `outline-width: thick` |

## 示例

### 基础用法

```css
/* 单值 */
.single {
  outline-width: 1px;
}

/* 关键字 */
.keyword {
  outline-width: thin;
}
```

### 高级用法

```css
/* 容器 */
.container {
  outline-width: 1px;
}

/* 静态 */
.static {
  outline-width: 1px;
}

/* 相对 */
.relative {
  outline-width: 1px;
}

/* 绝对 */
.absolute {
  outline-width: 2px;
}

/* 固定 */
.fixed {
  outline-width: 3px;
}

/* 粘性 */
.sticky {
  outline-width: 1px;
}

/* 响应式布局 */
.responsive {
  outline-width: 1px;
}

/* 卡片布局 */
.card {
  outline-width: 1px;
}

/* 表单布局 */
.form {
  outline-width: 1px;
}

/* 图片画廊 */
.gallery {
  outline-width: 1px;
}

/* 混合单位 */
.mixed-units {
  outline-width: 1px;
}

/* 带命名的项目 */
.named-items {
  outline-width: 1px;
}

/* 悬停效果 */
.card {
  transition: outline-width 0.3s ease-in-out;
}

.card:hover {
  outline-width: 2px;
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

- `outline-width` 可以用于任何元素
- `outline-width` 定义元素的轮廓宽度
- 可以使用长度或关键字值

## 相关属性

- [`outline`](./outline)
- [`outline-style`](./outline-style)
- [`outline-color`](./outline-color)

## 相关资源

- [MDN Web Docs: outline-width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-width)
- [CSS-Tricks: outline-width](https://css-tricks.com/almanac/properties/o/outline-width/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)