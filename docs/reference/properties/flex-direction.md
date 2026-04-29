# flex-direction

flex-direction 属性定义 Flex 容器中 Flex 项目的排列方向。

## 语法

```css
flex-direction: row | row-reverse | column | column-reverse;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `row` | 水平排列 | `flex-direction: row` |
| `row-reverse` | 水平反向排列 | `flex-direction: row-reverse` |
| `column` | 垂直排列 | `flex-direction: column` |
| `column-reverse` | 垂直反向排列 | `flex-direction: column-reverse` |

## 示例

### 基础用法

```css
/* 水平排列 */
.flex-row {
  flex-direction: row;
}

/* 水平反向排列 */
.flex-row-reverse {
  flex-direction: row-reverse;
}

/* 垂直排列 */
.flex-column {
  flex-direction: column;
}

/* 垂直反向排列 */
.flex-column-reverse {
  flex-direction: column-reverse;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
  flex-direction: row;
}

/* 水平排列 */
.flex-row {
  flex-direction: row;
}

/* 水平反向排列 */
.flex-row-reverse {
  flex-direction: row-reverse;
}

/* 垂直排列 */
.flex-column {
  flex-direction: column;
}

/* 垂直反向排列 */
.flex-column-reverse {
  flex-direction: column-reverse;
}

/* 响应式布局 */
.responsive {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .responsive {
    flex-direction: row;
  }
}

/* 卡片布局 */
.card {
  display: flex;
  flex-direction: column;
}

/* 表单布局 */
.form {
  display: flex;
  flex-direction: column;
}

/* 图片画廊 */
.gallery {
  display: flex;
  flex-direction: row;
}

/* 混合单位 */
.mixed-units {
  display: flex;
  flex-direction: row;
}

/* 带命名的项目 */
.named-items {
  display: flex;
  flex-direction: column;
}

/* 悬停效果 */
.card {
  transition: flex-direction 0.3s ease-in-out;
}

.card:hover {
  flex-direction: column;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 29+ |
| Firefox | 28+ |
| Safari | 9+ |
| Edge | 12+ |
| iOS Safari | 9.2+ |
| Android Browser | 4.4+ |
| Chrome for Android | 57+ |

## 注意事项

- `flex-direction` 只在 Flex 容器中有效
- `flex-direction` 定义 Flex 容器中 Flex 项目的排列方向
- `row` 是默认值，表示水平排列
- `column` 表示垂直排列

## 相关属性

- [`flex`](./flex)
- [`flex-wrap`](./flex-wrap)
- [`flex-flow`](./flex-flow)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)
- [CSS-Tricks: flex-direction](https://css-tricks.com/almanac/properties/f/flex-direction/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)