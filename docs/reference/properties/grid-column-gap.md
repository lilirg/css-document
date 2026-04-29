# grid-column-gap

grid-column-gap 属性设置 Grid 容器中列之间的间距。

## 语法

```css
grid-column-gap: <value>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<length>` | 列间距 | `grid-column-gap: 10px` |

## 示例

### 基础用法

```css
/* 列间距 */
.column-gap {
  grid-column-gap: 10px;
}
```

### 高级用法

```css
/* Grid 容器 */
.grid-container {
  display: grid;
  grid-column-gap: 10px;
}

/* 列间距 */
.column-gap {
  grid-column-gap: 10px;
}

/* 悬停效果 */
.card {
  transition: grid-column-gap 0.3s ease-in-out;
}

.card:hover {
  grid-column-gap: 20px;
}

/* Grid 布局 */
.grid-layout {
  display: grid;
  grid-column-gap: 10px;
}

/* 表单元素 */
.input {
  grid-column-gap: 10px;
}

/* 按钮布局 */
.button {
  grid-column-gap: 10px;
}

/* 响应式布局 */
.responsive {
  display: grid;
  grid-column-gap: 10px;
}

@media (max-width: 600px) {
  .responsive {
    grid-column-gap: 5px;
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

- `grid-column-gap` 只在 Grid 容器中有效
- `grid-column-gap` 设置 Grid 容器中列之间的间距
- `grid-column-gap` 可以与 `grid-row-gap` 配合使用

## 相关属性

- [`grid`](./grid)
- [`grid-row-gap`](./grid-row-gap)
- [`grid-gap`](./grid-gap)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-column-gap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column-gap)
- [CSS-Tricks: grid-column-gap](https://css-tricks.com/almanac/properties/g/grid-column-gap/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)