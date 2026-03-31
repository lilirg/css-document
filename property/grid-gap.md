# grid-gap

`grid-gap` 属性定义网格行和列之间的间距速记（已废弃，使用 `gap`）。

## 语法

```css
grid-gap: <'grid-row-gap'> <'grid-column-gap'>?
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 参见各个独立属性 |
| 适用 HTML 元素 | 网格容器 |
| 动画 | 取决于各个独立属性 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<grid-row-gap>` | 行间距 |
| `<grid-column-gap>` | 列间距（可选） |

## 注意

- **已废弃**，请使用 `gap` 属性
- 速记属性，同时设置行间距和列间距
- 只指定一个值时，行和列使用相同的间距

## 示例

```css
/* 行和列间距都是 20px（旧语法） */
.grid-container {
  display: grid;
  grid-gap: 20px;
}

/* 行间距 10px，列间距 20px（旧语法） */
.grid-container {
  display: grid;
  grid-gap: 10px 20px;
}

/* 推荐使用新语法 */
.grid-container {
  display: grid;
  gap: 20px;
}
```

## 使用场景

```css
/* 网格布局，统一间距 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 15px;
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
- [`grid-row-gap`](grid-row-gap.md) - 行间距（已废弃）
- [`grid-column-gap`](grid-column-gap.md) - 列间距（已废弃）

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/#gaps)