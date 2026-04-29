# grid-row-gap

grid-row-gap 属性设置 Grid 容器中行之间的间距。

## 语法

```css
grid-row-gap: <value>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<length>` | 行间距 | `grid-row-gap: 10px` |

## 示例

### 基础用法

```css
/* 行间距 */
.row-gap {
  grid-row-gap: 10px;
}
```

### 高级用法

```css
/* Grid 容器 */
.grid-container {
  display: grid;
  grid-row-gap: 10px;
}

/* 行间距 */
.row-gap {
  grid-row-gap: 10px;
}

/* 悬停效果 */
.card {
  transition: grid-row-gap 0.3s ease-in-out;
}

.card:hover {
  grid-row-gap: 20px;
}

/* Grid 布局 */
.grid-layout {
  display: grid;
  grid-row-gap: 10px;
}

/* 表单元素 */
.input {
  grid-row-gap: 10px;
}

/* 按钮布局 */
.button {
  grid-row-gap: 10px;
}

/* 响应式布局 */
.responsive {
  display: grid;
  grid-row-gap: 10px;
}

@media (max-width: 600px) {
  .responsive {
    grid-row-gap: 5px;
  }
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 57+ |
| Firefox | 52+ |
| Safari | 10.1+ |
| Edge | 16+ |
| iOS Safari | 10.3+ |
| Android Browser | 57+ |
| Chrome for Android | 57+ |

## 注意事项

- `grid-row-gap` 只在 Grid 容器中有效
- `grid-row-gap` 设置 Grid 容器中行之间的间距
- `grid-row-gap` 可以与 `grid-column-gap` 配合使用

## 相关属性

- [`grid`](./grid)
- [`grid-column-gap`](./grid-column-gap)
- [`grid-gap`](./grid-gap)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-row-gap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row-gap)
- [CSS-Tricks: grid-row-gap](https://css-tricks.com/almanac/properties/g/grid-row-gap/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)