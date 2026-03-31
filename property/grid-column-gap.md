# grid-column-gap

`grid-column-gap` 属性定义网格列之间的间距（已废弃，使用 `column-gap`）。

## 语法

```css
grid-column-gap: <line-width>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 网格容器 |
| 动画 | 是（作为长度值） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<line-width>` | 列间距，可以是长度值或百分比 |

## 注意

- **已废弃**，请使用 `column-gap` 或 `gap` 属性
- 定义网格列之间的空白间距
- 与 `grid-row-gap` 配合使用定义网格间距

## 示例

```css
/* 列间距 20px（旧语法） */
.grid-container {
  display: grid;
  grid-column-gap: 20px;
}

/* 推荐使用新语法 */
.grid-container {
  display: grid;
  column-gap: 20px;
}
```

## 使用场景

```css
/* 网格布局，列间距 10px */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 备注 |
|--------|------|------|
| Chrome | 57-66 | 已废弃 |
| Firefox | 52-62 | 已废弃 |
| Safari | 10.1-11.1 | 已废弃 |
| Edge | 16-18 | 已废弃 |

## 相关属性

- [`gap`](gap.md) - 间距速记（推荐）
- [`column-gap`](column-gap.md) - 列间距（推荐）
- [`grid-row-gap`](grid-row-gap.md) - 行间距（已废弃）
- [`grid-gap`](grid-gap.md) - 网格间距速记（已废弃）

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/#gaps)