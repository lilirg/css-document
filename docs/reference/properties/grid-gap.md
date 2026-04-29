# grid-gap

grid-gap 属性是 grid-row-gap 和 grid-column-gap 的简写属性。

## 语法

```css
grid-gap: <row-gap> <column-gap>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<length>` | 行和列间距 | `grid-gap: 10px` |
| `<row-gap> <column-gap>` | 行间距和列间距 | `grid-gap: 10px 20px` |

## 示例

### 基础用法

```css
/* 行和列间距 */
.all-gap {
  grid-gap: 10px;
}

/* 行间距和列间距 */
.row-column-gap {
  grid-gap: 10px 20px;
}
```

### 高级用法

```css
/* Grid 容器 */
.grid-container {
  display: grid;
  grid-gap: 10px;
}

/* 行和列间距 */
.all-gap {
  grid-gap: 10px;
}

/* 行间距和列间距 */
.row-column-gap {
  grid-gap: 10px 20px;
}

/* 悬停效果 */
.card {
  transition: grid-gap 0.3s ease-in-out;
}

.card:hover {
  grid-gap: 20px 30px;
}

/* Grid 布局 */
.grid-layout {
  display: grid;
  grid-gap: 10px;
}

/* 表单元素 */
.input {
  grid-gap: 10px 20px;
}

/* 按钮布局 */
.button {
  grid-gap: 10px;
}

/* 响应式布局 */
.responsive {
  display: grid;
  grid-gap: 10px;
}

@media (max-width: 600px) {
  .responsive {
    grid-gap: 5px;
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

- `grid-gap` 只在 Grid 容器中有效
- `grid-gap` 是 grid-row-gap 和 grid-column-gap 的简写属性
- `grid-gap: 10px` 行和列间距 10px
- `grid-gap: 10px 20px` 行间距 10px，列间距 20px

## 相关属性

- [`grid`](./grid)
- [`grid-row-gap`](./grid-row-gap)
- [`grid-column-gap`](./grid-column-gap)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-gap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-gap)
- [CSS-Tricks: grid-gap](https://css-tricks.com/almanac/properties/g/grid-gap/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)