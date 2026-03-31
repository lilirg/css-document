# table-layout

`table-layout` 属性定义表格和列的布局算法。

## 语法

```css
table-layout: auto | fixed
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | `table` 元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 根据单元格内容自动调整列宽 |
| `fixed` | 使用固定列宽布局算法 |

## 注意

- `fixed` 布局更快，因为只需要计算一次列宽
- `auto` 布局需要遍历所有单元格内容
- `fixed` 布局下，列宽由第一行决定

## 示例

```css
/* 固定列宽布局 */
table {
  table-layout: fixed;
  width: 100%;
}

/* 自动列宽布局 */
table {
  table-layout: auto;
}
```

## 使用场景

```css
/* 固定布局表格，列宽均匀分布 */
.fixed-table {
  table-layout: fixed;
  width: 100%;
}

.fixed-table th:nth-child(1) { width: 20%; }
.fixed-table th:nth-child(2) { width: 30%; }
.fixed-table th:nth-child(3) { width: 50%; }
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 支持 |
| Edge | 支持 |

## 相关属性

- [`border-collapse`](border-collapse.md) - 边框合并
- [`border-spacing`](border-spacing.md) - 边框间距

## 规范

- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/css-cascade-3/#table-layout)
