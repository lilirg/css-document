# grid

grid 属性是一个简写属性，用于设置 Grid 布局的行、列和区域。

## 语法

```css
grid: grid-template-rows / grid-template-columns;
```

## 属性值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无网格定义 | `grid: none` |
| `template-rows / template-columns` | 行列定义 | `grid: 100px 200px / 1fr 2fr` |

## 示例

### 基础用法

```css
/* 定义 2 行 3 列的网格 */
.container {
  display: grid;
  grid: 100px 200px / 1fr 2fr 1fr;
}

/* 定义 3 行 2 列的网格 */
.container {
  display: grid;
  grid: repeat(3, 100px) / 1fr 2fr;
}

/* 使用 auto-fit 和 minmax */
.container {
  display: grid;
  grid: repeat(auto-fit, minmax(200px, 1fr)) / 1fr;
}
```

### 高级用法

```css
/* 定义网格区域 */
.container {
  display: grid;
  grid:
    "header header header" 100px
    "sidebar content content" 1fr
    "footer footer footer" 100px;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
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
| Android Browser | 62+ |
| Chrome for Android | 62+ |

## 注意事项

- `grid` 是 `grid-template-rows` 和 `grid-template-columns` 的简写
- 使用 `grid: none` 可以移除网格布局
- 使用 `repeat()` 函数可以简化重复的轨道定义
- 使用 `fr` 单位可以分配剩余空间
- 使用 `minmax()` 函数可以设置最小和最大尺寸

## 相关属性

- [`display`](./display)
- [`grid-template-columns`](./grid-template-columns)
- [`grid-template-rows`](./grid-template-rows)
- [`grid-template-areas`](./grid-template-areas)
- [`grid-column`](./grid-column)
- [`grid-row`](./grid-row)
- [`gap`](./gap)

## 相关资源

- [MDN Web Docs: grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)
- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)