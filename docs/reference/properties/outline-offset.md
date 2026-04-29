# outline-offset

outline-offset 属性定义元素轮廓的偏移量。

## 语法

```css
outline-offset: <length>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<length>` | 长度 | `outline-offset: 2px` |

## 示例

### 基础用法

```css
/* 零偏移 */
.zero {
  outline-offset: 0;
}

/* 正偏移 */
.positive {
  outline-offset: 2px;
}

/* 负偏移 */
.negative {
  outline-offset: -2px;
}
```

### 高级用法

```css
/* 容器 */
.container {
  outline-offset: 0;
}

/* 静态 */
.static {
  outline-offset: 0;
}

/* 相对 */
.relative {
  outline-offset: 0;
}

/* 绝对 */
.absolute {
  outline-offset: 0;
}

/* 固定 */
.fixed {
  outline-offset: 0;
}

/* 粘性 */
.sticky {
  outline-offset: 0;
}

/* 响应式布局 */
.responsive {
  outline-offset: 0;
}

/* 卡片布局 */
.card {
  outline-offset: 0;
}

/* 表单布局 */
.form {
  outline-offset: 0;
}

/* 图片画廊 */
.gallery {
  outline-offset: 0;
}

/* 混合单位 */
.mixed-units {
  outline-offset: 0;
}

/* 带命名的项目 */
.named-items {
  outline-offset: 0;
}

/* 悬停效果 */
.card {
  transition: outline-offset 0.3s ease-in-out;
}

.card:hover {
  outline-offset: 2px;
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

- `outline-offset` 可以用于任何元素
- `outline-offset` 定义元素轮廓的偏移量
- `0` 是默认值，表示无偏移

## 相关属性

- [`outline`](./outline)
- [`outline-width`](./outline-width)
- [`outline-style`](./outline-style)
- [`outline-color`](./outline-color)

## 相关资源

- [MDN Web Docs: outline-offset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-offset)
- [CSS-Tricks: outline-offset](https://css-tricks.com/almanac/properties/o/outline-offset/)
- [W3C CSS UI](https://www.w3.org/TR/css-ui-4/)